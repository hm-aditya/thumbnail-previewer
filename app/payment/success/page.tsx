"use client";

import { Button } from "@/components/ui/button";
import {  } from "lucide-react";
import Link from "next/link";


export default function Success(){
    return(
    <div className="flex flex-col text-center items-center justify-center min-h-screen space-y-6">
    
    <h1 className="text-2xl font-bold">Payment Successfull</h1>
    <div className="w-[300px] h-1 bg-green-300"></div>
    <p className="text-xl">Thank you for your purchase.Your payment was Successfull. </p>
    <Button>
        <Link href="/dashboard">Get Started</Link>
    </Button>
    </div>)
}