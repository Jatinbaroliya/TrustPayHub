import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 h-16'>
       <div className="logo font-bold text-lg flex justify-center items-baseline gap-2">
        <img width={28} src="tea.gif" alt="" />
        <span className='text-2xl'>GetMeAChai!</span>
      </div>
       {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign up</li>
        <li>Login</li>
       </ul> */}

       <Link>
         <button>
          
         </button>
       </Link>
    </nav>
  )
}

export default Navbar
