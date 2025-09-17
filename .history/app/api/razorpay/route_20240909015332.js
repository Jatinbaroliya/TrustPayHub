import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import connectDb from "@/db/connectDb";
import Payment from "@/models/Payment";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export const POST = async(req) =>{
    await connectDb();
    let body = await req.formData()
    body = object.fromEntries(body)

    //check if razorpay orderid is present on the server
    let p = await Payment.findOne({oid: body.razorpay_order_id})

    if(!p)
    {
        return NextResponse.error("Order id not found")

    }

    //verify the payment
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "razorpay.payment_id": body.razorpay_payment_id, "razorpay_signature": body.razorpay_signature}, process.env.KEY_SECRET )

    if(xx){
        //update the payment status
        const updatedPayment = await pa
    }


}