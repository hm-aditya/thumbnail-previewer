"use client";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";

export function Navbar() {
const {isSignedIn} = useUser();
  return (
    <nav className="bg-background border-b sticky backdrop:blur-lg ">
      <div className="max-w-7xl mx-auto h-16 text-lg flex justify-between items-center">
        <Link href="/" className="p-2 font-medium tracking-tight">
          Thumbnail Previewer
        </Link>
        <div>
          {isSignedIn ? (
            <>
              <Link href="/dashboard" className="p-2 font-medium ">
                Product
              </Link>
              <Link href="/dashboard/profile" className="p-2  font-medium ">
                Profile
              </Link>
            </>
          ) : (
            <div> r</div>
          )}
          <Link href="/pricing" className="p-2  font-medium ">
            Pricing
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          <ModeToggle />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
