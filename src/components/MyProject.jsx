import React from 'react';

function MyProject() {
  return (
    <section
      id="myProject"
      className="mb-40 flex flex-col items-center justify-center mt-6 gap-8 p-6 scroll-mt-20 widescreen:section-min-height tallscreen:screen:section-min-height"
    >
      <h3 className="dark:text-white mx-auto text-5xl font-bold ">
        My Project
      </h3>
      <div className="flex flex-col w-full m-auto space-y-4 justify-center">
        <h2 className="text-4xl font-bold m-auto">Website 1: Kelvin Mall</h2>
        <iframe
          src="https://kelvinmall.onrender.com/"
          width="70%"
          height="600"
          title="Kelvin Mall"
          className="border border-gray-300 rounded m-auto"
        />
        <p className="dark:text-white w-4/7 mx-auto text-xl italic">
          Discover Kelvin Mall, an innovative platform designed to enhance your
          shopping experience with seamless navigation and dynamic features.{' '}
          <a
            href="https://kelvinmall.onrender.com/"
            target="_blank"
            className="underline"
          >
            Check it out!
          </a>
        </p>
        <h2 className="text-4xl font-bold m-auto">Website 2: Job Management</h2>
        <iframe
          src="https://job-management-ujed.onrender.com/"
          width="70%"
          height="600"
          title="Job management"
          className="border border-gray-300 rounded m-auto"
        />
      </div>

      <p className="dark:text-white w-4/7 mx-auto text-xl italic">
        Dive into Job Management, a robust tool that simplifies project
        organization and enhances team collaboration with user-friendly
        functionalities.{' '}
        <a
          href="https://job-management-ujed.onrender.com/"
          target="_blank"
          className="underline"
        >
          Check it out!
        </a>
      </p>
      <p className="dark:text-white w-4/7 mx-auto text-xl italic ml-0 md:ml-auto">
        You can visit{' '}
        <a
          href="https://github.com/luntrum"
          target="_blank"
          className="underline font-bold"
        >
          my GitHub
        </a>{' '}
        for more.
      </p>
    </section>
  );
}

export default MyProject;
