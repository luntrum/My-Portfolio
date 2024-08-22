import React, { useEffect, useState } from 'react';

function MyHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isToggleBurger, setIsToggleBurger] = useState(false);
  const [isHiddenMenu, setIsHiddenMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpenMenu(false);
        setIsToggleBurger(false);
        setTimeout(() => {
          setIsHiddenMenu(false);
        }, 1500);
      } else {
        setIsHiddenMenu(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleMobileMenu = () => {
    setIsToggleBurger(!isToggleBurger);
    setIsOpenMenu(!isOpenMenu);
    setIsHiddenMenu(false);
  };

  return (
    <header className="sticky top-0 z-10 bg-emerald-500  ">
      <section className="mx-auto w-3/4 py-10 md:py-12  md:text-2xl xl:text-4xl flex items-center justify-between ">
        {/* Name and logo  */}
        <h1 className="text-3xl text-black md:text-4xl">
          <a href="#home" className="flex items-center ">
            <img
              src="../favicon-32x32.png"
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
                ? `bg-transparent before:absolute before:h-1 before:w-8 before:-translate-x-4  before:rounded before:bg-black 
                before:transition-all before:duration-500 before:rotate-45 before:content-[''] after:absolute after:h-1 after:w-8 
                after:transition-all after:duration-500 after:-translate-x-4  after:rounded after:bg-black after:-rotate-45 after:content-[''] rotate-[1800deg]  `
                : `before:absolute before:h-1 before:w-8 before:-translate-x-4 before:translate-y-3 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:-translate-y-3 after:rounded after:bg-black after:content-['']`
            } `}
          ></div>
        </button>

        {/* <!-- navbar --> */}
        <nav className="hidden space-x-8 text-xl md:block md:text-2xl xl:text-4xl ">
          <a
            href="#myKnowlegde"
            className="hover:opacity-60 hover:bg-emerald-800 py-12 "
          >
            My Knowlegde
          </a>
          <a
            href="#myHobby"
            className="hover:opacity-60 hover:bg-emerald-800 py-12 "
          >
            My Hobby
          </a>
          <a
            href="#myProject"
            className="hover:opacity-60 hover:bg-emerald-800 py-12 "
          >
            My Project
          </a>
          <a
            href="#contact"
            className="hover:opacity-60 hover:bg-emerald-800 py-12 "
          >
            Contact Me
          </a>
        </nav>
        {/* mobile menu */}
        <section
          className={`top-32 left-0 right-5 text-5xl justify-center absolute text-white   w-full origin-top  flex-col bg-slate-600 ${
            isHiddenMenu ? 'opacity-0 invisible' : 'opacity-100 visible'
          }    ${
            !isOpenMenu ? 'animate-close-menu' : 'animate-open-menu '
          } flex  md:hidden  `}
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
              href="#myKnowlegde"
              className="py-6 w-full text-center hover:opacity-80"
              onClick={handleMobileMenu}
            >
              My Knowlegde
            </a>
            <a
              href="#myHobby"
              className="py-6 w-full text-center hover:opacity-80"
              onClick={handleMobileMenu}
            >
              My Hobby
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
