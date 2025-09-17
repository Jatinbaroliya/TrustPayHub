import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import connectDb from "@/db/connectDb";
import Payment from "@/models/Payment";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export const POST = async(req) =>{
    await connectDb();
    let body = await req.formData()
    body = object.fr
}