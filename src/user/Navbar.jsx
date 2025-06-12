import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='bg-black text-white p-4 flex gap-5 items-center justify-center'>
        <nav className='space-x-4'>
          <a href="/" className='hover:text-gray-400'>Home</a>
          <a href="/about" className='hover:text-gray-400 m-4'>About</a>
          <a href="/about" className='hover:text-gray-400 m-4'>Skills</a>
          <a href="/about" className='hover:text-gray-400 m-4'>Portfolio</a>
          <a href="/contact" className='hover:text-gray-400 m-4'>Contact Me</a>
        </nav>

      </div>
    </>
  )
}

export default Navbar
