import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 text-white h-[44vh]">
        <div className="text-5xl font-bold flex items-baseline justify-center gap-5">Buy Me a Chai <span><img width={58} src="/tea.gif" alt="" /></span></div>
        <p>
          A crowdfunding paltform. Get funded by your fans and followers. Start now!
        </p>
        <div>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      <div className="bg-white opacity-10 h-1"></div>

      <div className="container mx-auto text-white pb-14 pt-16">

        <h1 className="text-2xl font-bold text-center mb-10">Your Fans can buy you a Chai</h1>

        <div className="flex gap-2 justify-evenly">

        <div className="item space-y-1 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-b-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold">Fans want to help you</p>
            <p className="text-center text-sm">Your fans are available to help you</p>
          </div>

          <div className="item space-y-1 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-1 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold">Fans want to help you</p>
            <p className="text-center text-sm">Your fans are available to help you</p>
          </div>

          <div className="item space-y-1 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-b-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold">Fans want to help you</p>
            <p className="text-center  text-sm">Your fans are available to help you</p>
          </div>

        </div>

      </div>

      <div className="bg-white opacity-10 h-1"></div>

      <div className="container mx-auto text-white pb-14 pt-16">

        <h1 className="text-2xl font-bold text-center mb-10">Learn more about us</h1>

        <iframe width="914" height="514" src="https://www.youtube.com/embed/QtaorVNAwbI" title="Project GetMeAChai - Patreon Clone in Next.js | Sigma Web Development Course - Tutorial #131" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>

    </>

  );
}
