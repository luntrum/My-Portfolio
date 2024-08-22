import React, { useState, useMemo } from 'react';

function MyHobby() {
  const [count, setCount] = useState(0);
  const handleCount = (value) => {
    if (value === 'increase' && count < 3) {
      setCount((preCount) => preCount + 1);
    }
    if (value === 'decrease' && count > 0) {
      setCount((count) => count - 1);
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
              className="w-full h-auto md:w-1/2 md:h-1/2 object-cover"
            />
            <p className="text-5xl mt-8">Travel</p>
          </>
        );
      case 2:
        return (
          <>
            <img
              src="./img/leonui.jpg"
              alt="travel"
              className="w-full h-auto md:w-1/3 md:h-1/3 object-cover"
            />
            <p className="text-5xl mt-8"> Mountain Climbing </p>
          </>
        );
      default:
        return (
          <>
            <video
              src="./video/gapgau.mp4"
              className="w-80 h-96 md:w-1/4 md:h-1/4"
              controls
            ></video>

            <p className="text-3xl mt-8 mx-5">Playing Claw Machines</p>
          </>
        );
    }
  }, [count]);
  return (
    <section
      id="myHobby"
      className=" widescreen:section-min-height tallscreen:screen:section-min-height mb-12 flex scroll-mt-40 flex-col items-center justify-center mt-12 gap-8 p-6 "
    >
      <h3 className="dark:text-white mx-auto text-5xl ">MyHobby</h3>
      <div className=" md:w-5/6 flex mt-20 align-middle items-center justify-between ">
        <button
          id="decrease"
          value={'decrease'}
          onClick={(e) => handleCount(e.currentTarget.getAttribute('value'))}
          className="p-10 hover:bg-slate-500 rounded-xl mx-4 py-14"
        >
          <i className="fi fi-br-angle-left dark:text-white text-3xl md:text-5xl "></i>
        </button>

        <article className="md:w-5/6 w-3/5 h-3/4 flex flex-col items-center justify-center md:justify-center ">
          {content}
        </article>

        <button
          id="increase"
          value={'increase'}
          onClick={(e) => handleCount(e.currentTarget.getAttribute('value'))}
          className="p-10 hover:bg-slate-500 rounded-xl mx-4 py-14"
        >
          <i className="fi fi-br-angle-right dark:text-white right-5 text-3xl md:text-5xl "></i>
        </button>
      </div>
    </section>
  );
}

export default MyHobby;
