import React from 'react'

const About = () => {
  return (
    <div>
       <div className="container mx-auto px-4 py-12 bg-dark-blue min-h-screen">
        <h1 className="text-center text-4xl font-bold text-white mb-8">About Us</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-200">
            Welcome to <strong>Get Me a Chai</strong>, a simple, heartfelt initiative aimed at spreading joy one chai at a time. This website was created to connect with generous souls who want to support our journey through small donations. Whether you're a chai lover or simply want to contribute to a small cause, your support means the world to us.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Why Chai?</h2>
          <p className="text-lg text-gray-200">
            For many, chai is more than just a drink – it's a moment of peace, inspiration, or shared connection. By donating through this platform, you're not just helping with a chai, you're contributing to a vision of warmth and kindness.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">How It Works</h2>
          <p className="text-lg text-gray-200">
            It's simple: you donate, and we enjoy a chai together – virtually! Each donation is a token of support, and it's greatly appreciated. It’s a lighthearted way to spread positivity and enjoy a moment in life’s simplest pleasures.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About

export const metadata = {
    title: "About - Get Me a Chai",
}