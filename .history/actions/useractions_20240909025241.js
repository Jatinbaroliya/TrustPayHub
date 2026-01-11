"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDb from "@/db/connectDb"
import Username from "@/app/[username]/page"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()

    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })
    
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    
    let x = await instance.orders.create(options)

    //create a payment object which shows the pending payment in the database
    await Payment.create({oid: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message})

    return x;
}

    export const fetchuser = async(username)=>{
        await connectDb()
        let u = await User.findOne({username: username})
        let user= u.toObject({flattenObjectIds: true})
        return user
    }

    export const fetchpayments = async(username)=>{
        await connectDb()
        //find all the payments sorted by decreasing order of amount and flatten o
        let u = await User.findOne({username: username})
        let user= u.toObject({flattenObjectIds: true})
        return p
    }


