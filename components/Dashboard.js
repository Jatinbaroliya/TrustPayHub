"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await fetchuser(session.user.name);
        setForm(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to fetch user data. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      }
    };

    if (status === "loading") return; // Wait until session is ready
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated" && session?.user?.name) {
      fetchUserData();
    }
  }, [router, session, status]);

  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(form, session.user.name);
      toast.success("Profile updated successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  // Show loading while session is being checked
  if (status === "loading" || !session) {
    return (
      <div className="text-white text-center mt-10">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="flex justify-center items-center min-h-screen text-white mx-6">
          <div className="shadow-lg rounded-lg p-6 w-full max-w-lg">
            <h1 className="text-2xl font-bold mb-6 text-center text-white">
              Welcome to your Dashboard
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {["name", "email", "username", "profilepic", "coverpic", "razorpayid", "razorpaysecret"].map((field) => (
                <div key={field} className="form-group">
                  <label htmlFor={field} className="block text-sm font-medium text-white capitalize">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={form[field] || ""}
                    onChange={handleChange}
                    className="mt-1 bg-slate-900 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white mt-14 py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;