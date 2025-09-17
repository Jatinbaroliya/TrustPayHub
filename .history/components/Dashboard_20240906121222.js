"use client"
import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';

const Dashboard = () => {

    const { data: session } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        if (!session) {
            router.push("/login")
        }
    }, [router, session])

    const handleChange = (e) =>{
        setform({...form, [e.target.name]: [e.target.value]})
    }


    return (

        d
    
    
    
};

export default Dashboard
