import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
export default async function Dashboard() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const subscription = await prisma.subscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      status: true,
    },
  });
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md">
      <p className="text-xl mb-6">You are not subscirbed</p>
      <Button>
        <Link href="/pricing">Subscribe</Link>
      </Button>
    </div>
  );
}
