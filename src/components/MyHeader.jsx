import React, { useState } from 'react';

function MyHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isToggleBurger, setIsToggleBurger] = useState(false);
  const handleMobileMenu = () => {
    setIsToggleBurger(!isToggleBurger);
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className="sticky top-0 z-10 bg-emerald-700 ">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        {/* Name and logo  */}
        <h1 className="text-3xl text-black">
          <a href="#home" className="flex items-center ">
            <img
              src="public\favicon-32x32.png"
              alt="my logo"
              className="mx-3 w-12"
            />
            Loc Nguyen
          </a>
        </h1>
        {/* hamburger button */}
        <button
          id="hamburger-button"
          className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
          onClick={handleMobileMenu}
        >
          <div
            className={`absolute top-4 -mt-0.5 h-1 w-8 rounded bg-black transition-all duration-500  ${
              isToggleBurger
                ? `bg-transparent before:absolute before:h-1 before:w-8 before:-translate-x-4  before:rounded before:bg-black before:rotate-360
                before:transition-all before:duration-500 before:rotate-45 before:content-[''] after:absolute after:h-1 after:w-8 
                after:transition-all after:duration-500 after:-translate-x-4  after:rounded after:bg-black after:-rotate-45 after:content-[''] rotate-[1800deg]  `
                : `before:absolute before:h-1 before:w-8 before:-translate-x-4 before:translate-y-3 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:-translate-y-3 after:rounded after:bg-black after:content-['']`
            } `}
          ></div>
        </button>

        {/* <!-- navbar --> */}
        <nav className="hidden space-x-8 text-xl md:block">
          <a href="#aboutMe" className="hover:opacity-80">
            About Me
          </a>
          <a href="#myProject" className="hover:opacity-80">
            My Project
          </a>
          <a href="#contact" className="hover:opacity-80">
            Contact Me
          </a>
        </nav>
        {/* mobile menu */}
        <section
          className={`top-20 left-0 right-5 justify-center absolute text-white   w-full origin-top animate-open-menu flex-col bg-slate-800 text-5xl ${
            isOpenMenu ? 'flex' : 'hidden'
          } md:hidden`}
        >
          <nav
            className="flex min-h-screen flex-col items-center py-8"
            aria-label="mobile"
          >
            <a
              href="#home"
              className="py-6 w-full text-center hover:opacity-80"
              onClick={handleMobileMenu}
            >
              Home
            </a>
            <a
              href="#aboutMe"
              className="py-6 w-full text-center hover:opacity-80"
              onClick={handleMobileMenu}
            >
              About Me
            </a>
            <a
              href="#myProject"
              className="py-6 w-full text-center hover:opacity-80"
              onClick={handleMobileMenu}
            >
              My Project
            </a>
            <a
              href="#contact"
              className="py-6 w-full text-center hover:opacity-80"
              onClick={handleMobileMenu}
            >
              Contact Me
            </a>
          </nav>
        </section>
      </section>
    </header>
  );
}

export default MyHeader;
