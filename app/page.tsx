import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 pt-12 text-center">
        <h1 className="mb-4 text-3xl md:text-6xl font-bold ">Tutorial</h1>
        <p className="mb-8 text-xl md:text-2xl max-w-3xl mx-auto">
          Description of our product
        </p>
        <div className="flex justify-center items-center space-x-4">
          <Button>
            <Link href={"/dashboard"}>Get Started</Link>
          </Button>
          <Button>
            <Link href={"/pricing"}>View Pricing</Link>
          </Button>
        </div>
        <img src="./preview.png" alt="Image" className="w-full h-auto mt-8" />
      </div>
    </div>
  );
}
