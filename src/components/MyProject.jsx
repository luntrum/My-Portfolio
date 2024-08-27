import React from 'react';

function MyProject() {
  return (
    <section
      id="myProject"
      className="  mb-40 flex  flex-col items-center justify-center mt-6  gap-8 p-6 scroll-mt-20  widescreen:section-min-height tallscreen:screen:section-min-height"
    >
      <h3 className="dark:text-white mx-auto  text-5xl font-bold ">
        My Project
      </h3>
      <div className="items-center justify-center mx-auto">
        <a href="https://job-management-ujed.onrender.com/" target="_blank">
          <img
            src="./img/jobmanagerProject.png"
            alt="job manager project"
            className="w-3/4 md:w-1/2 mx-auto  "
          />
        </a>
      </div>
      <p className="dark:text-white w-4/7 mx-auto   text-xl  italic">
        A practical project designed to sharpen my skills, featuring intuitive
        job management functionality.{' '}
        <a
          href="https://job-management-ujed.onrender.com/"
          target="_blank"
          className="underline"
        >
          Check it out!
        </a>
      </p>
      <p className="dark:text-white w-4/7 mx-auto   text-xl  italic  ml-0 md:ml-auto  ">
        You can visit{' '}
        <a
          href="https://github.com/luntrum"
          target="_blank"
          className=" underline font-bold "
        >
          my github
        </a>{' '}
        for more.
      </p>
    </section>
  );
}

export default MyProject;
