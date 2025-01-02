"use client";

import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Cancelled(){
    return(
    <div className="flex flex-col items-center text-center justify-center min-h-screen space-y-6">
    <h1 className="text-2xl font-bold">Payment Cancelled</h1>
    <div className="w-[300px] h-1 bg-red-300"></div>
    <p className="text-xl">Your payment was cancelled. No charges have been made</p>
    <Button>
        <Link href="/pricing">Return to Pricing</Link>
    </Button>
    </div>)
}