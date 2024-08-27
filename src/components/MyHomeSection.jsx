import React from 'react';

function MyHomeSection() {
  return (
    <main className="main-section">
      <section
        id="home"
        className="   mb-28 flex  flex-col-reverse items-center justify-center gap-8 p-6 md:flex-row  scroll-mt-40 widescreen:section-min-height tallscreen:screen:section-min-height md:mb-52"
      >
        <article className="md:w-2/5 ">
          <h2 className="md:text-7xl md:text-left  mb-5 md:mb-10  md:w-xl text-center text-5xl font-bold text-stone-900 dark:text-white ">
            Nguyễn Hữu Lộc
          </h2>
          <h2 className=" max-w-md text-left text-4xl font-bold text-stone-900 dark:text-white ">
            Date of Birth: 07/05/2001
          </h2>
          <br />
          <p className=" max-w-md text-left text-2xl  text-stone-900 dark:text-white">
            Graduated from HCMUTE with a degree in Mechatronics Engineering{' '}
            <br />
            Pursuing advanced studies in Front-End Web Development over a
            6-month period
          </p>
        </article>
        <img
          src="./img/myavatar.jpg"
          alt="myavatar"
          className="w-1/2 rounded-full md:w-1/4"
        />
      </section>
    </main>
  );
}

export default MyHomeSection;
