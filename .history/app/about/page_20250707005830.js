import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl bg-white rounded-lg shadow-lg m-16 md:m-0 md:p-16">
          <h1 className="text-4xl text-center font-extrabold italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            सहाराWorks
          </h1>

          <p className="text-lg text-gray-700 text-center mb-8">
            SaharaWorks is a crowdfunding platform created for passionate individuals and creators who want to connect with their community and turn their dreams into reality. Whether you&apos;re a writer, artist, musician, or builder — SaharaWorks empowers you through the support of your fans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-purple-600 mb-2">Our Mission</h2>
              <p className="text-gray-600">
                SaharaWorks aims to provide a smooth and transparent platform for creators to get support and funding from their audience. We believe in the strength of community and the impact of even the smallest contributions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-purple-600 mb-2">How It Works</h2>
              <p className="text-gray-600">
                Fans and followers can easily support their favorite creators by sending small donations. These contributions help creators sustain and grow their work, while building a loyal and engaged community.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-xl font-semibold text-purple-600 mb-2">Join Us</h2>
            <p className="text-gray-600 mb-6">
              Whether you&apos;re a creator looking for support or a fan who wants to make a difference — SaharaWorks gives you the platform to do just that. Together, we build dreams.
            </p>
            <Link href="/login">
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:shadow-lg">
                Start Supporting Creators
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

export const metadata = {
  title: 'About - SaharaWorks',
};
