import React from 'react';

function MyKnowledge() {
  return (
    <section
      id="myKnowlegde"
      className="  mb-36 md:mb-80 flex  flex-col items-center justify-center mt-6  gap-8 p-6 scroll-mt-20  widescreen:section-min-height tallscreen:screen:section-min-height"
    >
      <h2 className="text-5xl font-bold mb-6">My Knowledge</h2>
      <div className="mx-auto flex flex-col">
        <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 md:flex-row">
          <li className="px2 flex w-2/3 md:w-5/6 h-48  md:h-60  flex-col items-center rounded-3xl border border-solid border-slate-900 bg-emerald-50 p-6 shadow-xl  dark:border-gray-100 dark:bg-black bg-opacity-60 order-1 md:order-2 ">
            <h3 className="text-center text-3xl md:text-4xl text-slate-900 dark:text-white whitespace-nowrap">
              Core Skills
            </h3>
            <ul className="list-disc pl-5 text-xl md:text-xl">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>TailwindCSS</li>
            </ul>
          </li>

          <li className="px2 flex w-2/3 md:w-3/4 widescreen:w-1/4  h-48  md:h-48  flex-col items-center rounded-3xl border border-solid border-slate-900 bg-emerald-50 p-6 px-10 shadow-xl dark:border-gray-100 dark:bg-black bg-opacity-60 order-2 md:order-1 ">
            <h3 className="text-center text-3xl  text-slate-900 dark:text-white whitespace-nowrap">
              Tools
            </h3>
            <ul className="list-disc pl-5 text-xl md:text-xl">
              <li>Git</li>
              <li>Vite</li>
              <li>Webpack</li>
            </ul>
          </li>
          <li className="px2 flex w-2/3 md:w-3/4 widescreen:w-1/4  h-48 md:h-48 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-emerald-50 p-6 px-10 shadow-xl  dark:border-gray-100 dark:bg-black bg-opacity-60 order-3  ">
            <h3 className="text-center text-3xl  text-slate-900 dark:text-white whitespace-nowrap">
              Certifications
            </h3>
            <ul className="list-disc pl-5 text-xl md:text-xl">
              <li>Toeic 600+</li>
              <li>Mechatronics Engineering</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MyKnowledge;
