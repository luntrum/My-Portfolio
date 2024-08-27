import React, { useState, useMemo } from 'react';

function MyHobby() {
  const [count, setCount] = useState(0);
  const handleCount = (value) => {
    if (value === 'increase') {
      setCount((preCount) => preCount + 1);
    }

    if (value === 'decrease') {
      setCount((count) => count - 1);
    }
    if (count >= 3) {
      setCount(0);
    }
    if (count < 0) {
      setCount(2);
    }
  };

  const content = useMemo(() => {
    switch (count) {
      case 1:
        return (
          <>
            <img
              src="./img/travel.jpg"
              alt="travel"
              className="w-80 h-96 md:w-1/3 md:h-1/3 object-fill md:object-cover"
            />
            <p className="md:text-3xl text-xl md:mt-8 mt-2 whitespace-nowrap">
              Travel
            </p>
          </>
        );
      case 2:
        return (
          <>
            <img
              src="./img/leonui.jpg"
              alt="travel"
              className="w-80 h-96 md:w-1/4 md:h-1/4 object-fill md:object-cover "
            />
            <p className="md:text-3xl text-xl md:mt-8 mt-2 whitespace-nowrap">
              {' '}
              Mountain Climbing{' '}
            </p>
          </>
        );
      default:
        return (
          <>
            <video
              src="./video/gapgau.mp4"
              className="w-80 h-96 md:w-1/4 md:h-1/4 "
              controls
            ></video>

            <p className="md:text-3xl text-xl md:mt-8 mt-2 whitespace-nowrap">
              Playing Claw Machines
            </p>
          </>
        );
    }
  }, [count]);
  return (
    <section
      id="myHobby"
      className=" mb-56 md:mb-32 flex  flex-col items-center justify-center mt-6  gap-8 p-6 scroll-mt-20  widescreen:section-min-height tallscreen:screen:section-min-height"
    >
      <h3 className="dark:text-white mx-auto  text-5xl font-bold ">My Hobby</h3>
      <div className=" md:w-5/6 flex  align-middle items-center justify-between ">
        <button
          id="decrease"
          value={'decrease'}
          onClick={(e) => handleCount(e.currentTarget.getAttribute('value'))}
          className="p-2 md:p-10 hover:bg-slate-500 rounded-xl md:mx-4 py-5 md:py-14"
        >
          <i className="fi fi-br-angle-left dark:text-white text-xl md:text-5xl "></i>
        </button>

        <article className="md:w-5/6 w-3/5 h-3/4 flex flex-col items-center justify-center md:justify-center ">
          {content}
        </article>

        <button
          id="increase"
          value={'increase'}
          onClick={(e) => handleCount(e.currentTarget.getAttribute('value'))}
          className="p-2 md:p-10 hover:bg-slate-500 rounded-xl md:mx-4 py-5 md:py-14"
        >
          <i className="fi fi-br-angle-right dark:text-white right-5 text-xl md:text-5xl "></i>
        </button>
      </div>
    </section>
  );
}

export default MyHobby;
