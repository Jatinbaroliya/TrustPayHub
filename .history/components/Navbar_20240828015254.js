import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-between items-center px-4 h-16'>
       <div className="logo font-bold">GetMeAChai!</div>
       <ul className='flex justify'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign up</li>
        <li>Login</li>
       </ul>
    </nav>
  )
}

export default Navbar
