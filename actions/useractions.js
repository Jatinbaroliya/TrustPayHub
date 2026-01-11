"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDb from "@/db/connectDb"

// Initiates a Razorpay order and saves the pending payment in the database
export const initiate = async (amount, to_username, paymentform) => {
    try {
        await connectDb()

        const user = await User.findOne({ username: to_username })
        if (!user) {
            throw new Error("User not found")
        }

        if (!user.razorpayid || !user.razorpaysecret) {
            throw new Error("Payment gateway not configured")
        }

        const secret = user.razorpaysecret

        const instance = new Razorpay({
            key_id: user.razorpayid,
            key_secret: secret
        })

        const options = {
            amount: Number.parseInt(amount),
            currency: "INR"
        }

        const order = await instance.orders.create(options)

        await Payment.create({
            oid: order.id,
            amount: amount / 100,
            to_user: to_username,
            name: paymentform.name,
            message: paymentform.message
        })

        return order
    } catch (error) {
        console.error("Error initiating payment:", error)
        throw error
    }
}

// Fetches a user by username and flattens ObjectIds
export const fetchuser = async (username) => {
    try {
        await connectDb()
        const user = await User.findOne({ username })
        if (!user) return null

        const userObj = user.toObject({ flattenObjectIds: true })
        // Ensure _id is string
        userObj._id = userObj._id.toString()
        return userObj
    } catch (error) {
        console.error("Error fetching user:", error)
        throw new Error("Failed to fetch user data")
    }
}

// Fetches recent completed payments sorted by amount descending
export const fetchpayments = async (username) => {
    try {
        await connectDb()
        const payments = await Payment.find({ to_user: username, done: true })
            .sort({ amount: -1 })
            .lean()

        // Convert ObjectIds and BSON types to strings
        const cleanPayments = payments.map(p => ({
            ...p,
            _id: p._id.toString(),
            createdAt: p.createdAt ? p.createdAt.toISOString() : null,
            updatedAt: p.updatedAt ? p.updatedAt.toISOString() : null,
        }))

        return cleanPayments
    } catch (error) {
        console.error("Error fetching payments:", error)
        return []
    }
}

// Updates a user profile; handles username conflict and propagates changes to Payment
export const updateProfile = async (data, oldusername) => {
    await connectDb()

    // Convert data safely depending on whether it's FormData or a plain object
    const ndata = typeof data?.entries === "function"
        ? Object.fromEntries(data.entries())
        : { ...data }

    if (!ndata?.email || !ndata?.username) {
        return { error: "Invalid profile data" }
    }

    // If username is changed, check for conflicts
    if (oldusername !== ndata.username) {
        const existingUser = await User.findOne({ username: ndata.username })
        if (existingUser) {
            return { error: "Username already exists" }
        }

        await User.updateOne({ email: ndata.email }, ndata)
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
    } else {
        await User.updateOne({ email: ndata.email }, ndata)
    }

    return { success: true }
}
