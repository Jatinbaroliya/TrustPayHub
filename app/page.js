import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 text-black dark:text-white min-h-[50vh] px-5 md:px-0 text-xs md:text-base">
        <div className="bg-black/10 dark:bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-2xl flex flex-col items-center gap-4 border border-black/20 dark:border-white/20 mt-8 mb-8 relative">
          <div className="md:text-6xl font-extrabold flex items-center justify-center md:gap-6 gap-3 text-4xl overflow-hidden">
            <span className="text-3xl md:text-5xl font-extrabold italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 drop-shadow-lg">
              TrustPayHub
            </span>
            <Image
              width={56}
              height={56}
              src="/logo.png"
              alt="Help handshake"
              className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-white dark:bg-black shadow-lg border-2 border-black/30 dark:border-white/30"
            />
          </div>

          <p className="text-center text-lg md:text-xl font-medium text-black/90 dark:text-white/90">
            A modern crowdfunding platform. Get funded by your fans and followers.
            Start now!
          </p>
          <p className="text-center text-base md:text-lg text-black/80 dark:text-white/80">
            A place where your fans can help you. Unleash the power of your fans
            and get your projects funded.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Link href={"/login"}>
              <button
                type="button"
                className="flex items-center gap-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:scale-105 transition-transform duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-xl text-base px-6 py-3 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                  ></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 8v6M23 11h-6"
                  ></path>
                </svg>
                Start Here
              </button>
            </Link>

            <Link href={"/about"}>
              <button
                type="button"
                className="flex items-center gap-2 text-white bg-gradient-to-br from-pink-500 to-purple-600 hover:scale-105 transition-transform duration-200 focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold rounded-xl text-base px-6 py-3 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 17l4 4 4-4m-4-5v9"
                  ></path>
                </svg>
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 opacity-20 h-1 rounded-full my-8"></div>

      <div className="container mx-auto text-black dark:text-white pb-14 pt-16 px-4 md:px-10 mt-8 mb-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 drop-shadow-lg">
          Your Fans can support you
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-evenly items-center">
          {/* First Item */}
          <div className="item space-y-2 flex flex-col items-center justify-center bg-black/10 dark:bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-black/20 dark:border-white/20 w-full max-w-xs">
            <Image
              className="bg-slate-400 rounded-b-full p-2 text-black shadow-md"
              width={88}
              height={88}
              src="/man.gif"
              alt="Fans wanting to help"
            />
            <p className="font-bold text-center text-lg">
              Your Fans Support You
            </p>
            <p className="text-center text-sm text-black/80 dark:text-white/80">
              They love your work and want to contribute.
            </p>
          </div>

          {/* Second Item */}
          <div className="item space-y-2 flex flex-col items-center justify-center bg-black/10 dark:bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-black/20 dark:border-white/20 w-full max-w-xs">
            <Image
              className="bg-slate-400 rounded-full p-1 text-black shadow-md"
              width={88}
              height={88}
              src="/coin.gif"
              alt="Coin gif representing donation"
            />
            <p className="font-bold text-center text-lg">Get Small Donations</p>
            <p className="text-center text-sm text-black/80 dark:text-white/80">
              Receive tips to fuel your creativity and projects.
            </p>
          </div>

          {/* Third Item */}
          <div className="item space-y-2 flex flex-col items-center justify-center bg-black/10 dark:bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-black/20 dark:border-white/20 w-full max-w-xs">
            <Image
              className="bg-slate-400 rounded-b-full p-2 text-black shadow-md"
              width={88}
              height={88}
              src="/group.gif"
              alt="Group gif representing community support"
            />
            <p className="font-bold text-center text-lg">Build a Community</p>
            <p className="text-center text-sm text-black/80 dark:text-white/80">
              Connect with supporters and grow your tribe.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
