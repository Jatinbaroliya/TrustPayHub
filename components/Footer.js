import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-100 dark:bg-gray-900 text-sm text-black dark:text-white flex justify-center items-center px-4 h-16'>
      <p className='text-center'>Copyright &copy; {currentYear} TrustPayHub - All rights reserved</p>
    </footer>
  )
}

export default Footer

