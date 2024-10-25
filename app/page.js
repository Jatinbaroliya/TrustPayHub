"use client"
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="h-[44vh] flex flex-col justify-center items-center text-white gap-4">
       <div className="md:text-5xl text-3xl font-bold">Buy Me a Chai</div>
       <p className="px-6 pb-4">A crowdfunding platform for creators. Get funded by yours Fans and followers. Start now!</p>
       <div>
        <Link href={"/login"}>
       <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
       </Link>
       <Link href={"/about"}>
       <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
       </Link>
       </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    </>
  );
}
