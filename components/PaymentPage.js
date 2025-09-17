"use client";
import React, { useEffect, useState, useCallback } from "react";
import Script from "next/script";
import { fetchuser, fetchpayments, initiate } from "@/actions/useractions";
import { useSearchParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import Image from "next/image";

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const getData = useCallback(async () => {
    let u = await fetchuser(username);
    setcurrentUser(u);
    let dbpayments = await fetchpayments(username);
    setPayments(dbpayments);
  }, [username]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast("Thanks for your donation!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    router.push(`/${username}`);
  }, [searchParams, router, username]);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;

    const options = {
      key: currentUser.razorpayid,
      amount: amount,
      currency: "INR",
      name: "Sahara Works",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: paymentform.name,
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    if (typeof window !== "undefined" && window.Razorpay) {
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      toast.error("Razorpay SDK not loaded");
    }
  };

  return (
    <>
      <ToastContainer theme="light" />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="cover w-full bg-gradient-to-r from-purple-900 via-blue-900 to-pink-900 relative rounded-b-3xl shadow-lg overflow-visible mb-12">
        {currentUser.coverpic && (
          <Image
            src={currentUser.coverpic}
            alt="Cover"
            width={1920}
            height={350}
            className="object-cover w-full h-48 md:h-[350px] opacity-80"
          />
        )}
        {/* profile: half on cover and half below */}
        <div
          className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 z-30 rounded-full bg-white/30 backdrop-blur-lg flex items-center justify-center"
          style={{ width: 176, height: 176 }}
        >
          {currentUser.profilepic && (
            <Image
              src={currentUser.profilepic}
              alt="Profile"
              width={176}
              height={176}
              className="rounded-full object-cover w-full h-full border-4 border-purple-400 shadow-lg"
            />
          )}
        </div>
      </div>

      <div className="info flex justify-center items-center mt-24 mb-12 flex-col gap-4">
        <div className="font-extrabold text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 drop-shadow-lg">
          @{username}
        </div>
        <div className="text-slate-400 text-lg">
          Let&apos;s help{" "}
          <span className="font-bold text-purple-400">TrustPayHub!</span>
        </div>
        <div className="text-slate-400 text-base">
          <span className="font-semibold text-white">{payments.length}</span>{" "}
          Payments ·{" "}
          <span className="font-semibold text-green-400">
            ₹{payments.reduce((a, b) => a + b.amount, 0)}
          </span>{" "}
          raised
        </div>

        <div className="payment flex gap-6 w-full max-w-5xl mt-16 flex-col md:flex-row">
          <div className="supporters w-full md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl text-white px-4 py-8 md:p-10 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Top Supporters
            </h2>
            <ul className="mx-2 text-lg space-y-4">
              {payments.length === 0 && (
                <li className="text-slate-400">No payments yet</li>
              )}
              {payments.slice(0, 7).map((p, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-center bg-white/10 rounded-lg p-3 shadow"
                >
                  <Image
                    width={36}
                    height={36}
                    src="/avatar.png"
                    alt="user avatar"
                    className="rounded-full border-2 border-purple-400"
                  />
                  <div>
                    <span className="font-bold text-purple-300">{p.name}</span>{" "}
                    donated{" "}
                    <span className="font-bold text-green-400">₹{p.amount}</span>
                    <div className="text-sm text-slate-300">
                      "{p.message}"
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="makePayment w-full md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl text-white px-4 py-8 md:p-10 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Make a Payment
            </h2>
            <div className="flex gap-3 flex-col">
              <input
                onChange={handleChange}
                value={paymentform.name}
                name="name"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800 border border-purple-400 focus:border-pink-400 focus:ring-2 focus:ring-purple-400 text-white placeholder:text-slate-400"
                placeholder="Enter Name"
              />
              <input
                onChange={handleChange}
                value={paymentform.message}
                name="message"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800 border border-purple-400 focus:border-pink-400 focus:ring-2 focus:ring-purple-400 text-white placeholder:text-slate-400"
                placeholder="Enter Message"
              />
              <input
                onChange={handleChange}
                value={paymentform.amount}
                name="amount"
                type="number"
                min="1"
                className="w-full p-3 rounded-lg bg-slate-800 border border-purple-400 focus:border-pink-400 focus:ring-2 focus:ring-purple-400 text-white placeholder:text-slate-400"
                placeholder="Enter Amount"
              />
              <button
                onClick={() =>
                  pay(Number.parseInt(paymentform.amount || "0") * 100)
                }
                type="button"
                className="flex items-center justify-center gap-2 text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:scale-105 transition-transform duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-xl text-base px-6 py-3 shadow-lg disabled:bg-slate-600 disabled:from-purple-100"
                disabled={
                  paymentform.name?.length < 3 ||
                  paymentform.message?.length < 4 ||
                  paymentform.amount?.length < 1
                }
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3"
                  ></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Pay
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-6">
              <button
                className="bg-gradient-to-r from-purple-700 to-blue-700 text-white font-semibold p-3 rounded-lg shadow hover:scale-105 transition-transform"
                onClick={() => pay(1000)}
              >
                Pay ₹10
              </button>
              <button
                className="bg-gradient-to-r from-purple-700 to-blue-700 text-white font-semibold p-3 rounded-lg shadow hover:scale-105 transition-transform"
                onClick={() => pay(2000)}
              >
                Pay ₹20
              </button>
              <button
                className="bg-gradient-to-r from-purple-700 to-blue-700 text-white font-semibold p-3 rounded-lg shadow hover:scale-105 transition-transform"
                onClick={() => pay(3000)}
              >
                Pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
