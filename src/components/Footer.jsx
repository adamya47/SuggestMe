import React from 'react'

function Footer() {
  return (
    <footer className="bg-black py-8 fixed bottom-0 w-full">
    <div className="container mx-auto flex justify-between items-center">
      <p className="text-white text-sm">© made by Adamya Sharma (adamya47@gmail.com)</p>
      <div>
        <a href="#" className="text-white hover:text-gray-300 mx-2">
          Privacy Policy
        </a>
        <span className="text-white"> | </span>
        <a href="#" className="text-white hover:text-gray-300 mx-2">
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer