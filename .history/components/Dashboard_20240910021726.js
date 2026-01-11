"use client"
import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { fetchuser, updateProfile} from '@/actions/useractions';

const Dashboard = () => {

    const { data: session } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        
        if (!session) {
            router.push("/login")
        }
        else
        {
            getData()
        }
        console.log(session);
        
    }, [router, session])

    const getData = async () =>{
        let u = await fetchuser(session.user.name)
        setform(u)
    }

    const handleChange = (e) =>{
        setform({...form, [e.target.name]: [e.target.value]})
    }

    const handleSubmit = async (e) =>{
        let a = await updateProfile(e, session.user.name)
        alert('Profile updated')
    }


    return (
        <div className=" min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">  
        <div className="flex justify-center items-center min-h-screen text-white">
            <div className=" shadow-lg rounded-lg p-6 w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-6 text-center text-white">Welcome to your Dashboard</h1>
                <form className="space-y-4" action={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name || ""}
                            onChange={handleChange}
                            className="mt-1 bg-slate-900 block w-full  p-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email || ""}
                            onChange={handleChange}
                            className="mt-1 bg-slate-900 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={form.username || ""}
                            onChange={handleChange}
                            className="mt-1 bg-slate-900 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="profilepic" className="block text-sm font-medium text-white">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={form.username || ""}
                            onChange={handleChange}
                            className="mt-1 bg-slate-900 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="coverpic" className="block text-sm font-medium text-white">Cover Picture</label>
                        <input
                            type="text"
                            id="coverpic"
                            name="coverpic"
                            onChange={handleChange}
                            className="mt-1 bg-slate-900 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="razorpayid" className="block text-sm font-medium text-white">Razorpay ID</label>
                        <input
                            type="text"
                            id="razorpayid"
                            name="razorpayid"
                            value={form.razorpayid || ""}
                            onChange={handleChange}
                            className="mt-1 bg-slate-900 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="razorpaysecret" className="block text-sm font-medium text-white">Razorpay Secret</label>
                        <input
                            type="password"
                            id="razorpaysecret"
                            name="razorpaysecret"
                            value={form.razorpaysecret || ""}
                            onChange={handleChange}
                            className="mt-1 bg-slate-900 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
    
                    <button type="submit" className="w-full bg-indigo-600 text-white mt-14 py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Save
                        </button>
                </form>
            </div>
        </div>

        </div>

    );
    
    
    
};

export default Dashboard
