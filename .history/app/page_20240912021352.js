import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 text-white h-[44vh] px-5 md:px-0 text-xs md:text-base">
        <div className="md:text-5xl font-bold flex items-baseline justify-center md:gap-5 gap-2 text-xl">Buy Me a Chai <span><img width={58} src="/tea.gif" alt="" /></span></div>
        <p className="text-center md:text-left">
          A crowdfunding paltform. Get funded by your fans and followers. Start now!
        </p>
        <p className="text-center md:text-left">
          A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.
        </p>
        <div>
          <Link href={"/login"}>
            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>

          <Link href={"/about"}>
            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>


        </div>
      </div>

      <div className="bg-white opacity-10 h-1"></div>

      <div className="container mx-auto text-white pb-14 pt-16 px-10">

        <h2 className="text-3xl font-bold text-center mb-10">Your Fans can buy you a Chai</h2>

        <div className="flex gap-2 justify-evenly">

          <div className="item space-y-1 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-b-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold te">Fans want to help you</p>
            <p className="text-center text-sm">Your fans are available to help you</p>
          </div>

          <div className="item space-y-1 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-1 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold te">Fans want to help you</p>
            <p className="text-center text-sm">Your fans are available to help you</p>
          </div>

          <div className="item space-y-1 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-b-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold te">Fans want to help you</p>
            <p className="text-center  text-sm">Your fans are available to help you</p>
          </div>

        </div>

      </div>

      <div className="bg-white opacity-10 h-1"></div>

      <div className="container mx-auto text-white pb-14 pt-16 flex flex-col items-center justify-center">

        <h2 className="text-3xl font-bold text-center mb-10">Learn more about us</h2>

        <iframe width="299" height="211" src="https://www.youtube.com/embed/QtaorVNAwbI" title="Project GetMeAChai - Patreon Clone in Next.js | Sigma Web Development Course - Tutorial #131" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>


    </>

  );
}
