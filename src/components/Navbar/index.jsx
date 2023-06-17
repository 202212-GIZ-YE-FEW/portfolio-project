
import React from "react"
const Navbar = () => {

  return (
    <>
      {/* <header class="text-gray-700 body-font m-10">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="animate-bounce"> 👩‍💻</span>
          <span class="ml-3 text-xl cursor-pointer">RAWAN<br />SALEM<strong class="logo-color">.B</strong></span>
          </a>
          <nav class="md:ml-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
            <a class="nav-links mr-5 hover:text-gray-900 hover:text-gray-500 cursor-pointer" href="#">Home</a>
            <a class="nav-links mr-5 hover:text-gray-900 hover:text-gray-500 cursor-pointer" href="#projects">Projects</a>
            <a class="nav-links mr-5 hover:text-gray-900 hover:text-gray-500 cursor-pointer" href="#contact">Contact Me</a>
          </nav>
        </div>
      </header> */}
      <div className="m-10 text-gray-700 body-font">
        <nav>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              {/* <div class="flex items-center">
                <a href="#" class="text-black text-2xl font-bold animate-bounce">RAWAN <br></br>SALEM.B 👩‍💻</a>
              </div> */}
              <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                {/* <img class="cursor-pointer" src="https://picsum.photos/seed/picsum/200/200" alt="logo" width="30px" height="20px"/> */}
                <span className="animate-bounce"> 👩‍💻</span>
                <span class="ml-3 text-xl cursor-pointer">RAWAN<br />SALEM<strong class="logo-color">.B</strong></span>
              </a>
              <div class="flex">
                <a href="#home" class="text-white-700 hover:bg-yellow-400 px-3 py-2 rounded-md text-lg font-medium">Home</a>
                <a href="#projects" class="text-white-700 hover:bg-yellow-400 px-3 py-2 rounded-md text-lg font-medium">Projects</a>
                <a href="#contact" class="text-white-700 hover:bg-yellow-400 px-3 py-2 rounded-md text-lg font-medium">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;