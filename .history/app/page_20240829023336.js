import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 text-white h-[44vh]">
        <div className="text-5xl font-bold flex items-baseline justify-center gap-1">Buy Me a Chai <span><img width={58} src="/tea.gif" alt="" /></span></div>
        <p>
          A crowdfunding paltform. Get funded by your fans and followers. Start now!
        </p>
        <div>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      <div className="bg-white opacity-10 h-1"></div>

      <div className="container mx-auto text-white">

        <h1 className="text-2xl font-bold text-center my-10 ">Your Fans can buy you a Chai</h1>

        <div className="flex gap-5 justify-evenly">

          <div className="item space-y-3 ">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p>Fund Yourself</p>
          </div>

          <div className="item space-y-3 ">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p>Fund Yourself</p>
          </div>

          <div className="item space-y-3 ">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p>Fund Yourself</p>
          </div>

        </div>

      </div>

    </>

  );
}
