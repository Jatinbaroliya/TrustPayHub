import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import connectDb from "@/db/connectDb";
import Payment from "@/models/Payment";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";