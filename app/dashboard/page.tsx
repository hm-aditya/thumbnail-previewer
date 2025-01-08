import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import ThumbnailPreviewer from "./_components/thumbnail-previewer";

async function getChannelName(userId: string ) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      channelName: true,
    }
  });
  return user?.channelName || "";
}
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
    }
  });
  if(subscription?.status !== "active") {
    return(<div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md">
      <p className="text-xl mb-6">You are not subscirbed</p>
      <Button>
        <Link href="/pricing">Subscribe</Link>
      </Button>
    </div>)
  }
  const channelName = await getChannelName(userId);
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md">
      <p className="text-xl mb-6">You are subscribed to the app</p>
    <ThumbnailPreviewer channelNameSaved={channelName}/>
    </div>
  );
}
