import React from "react";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold text-3xl text-left">
            Get to know me!
          </p>
          {/* <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1> */}
          <p className="text-justify pt-3">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.I'm open to Job
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't
            hesitate to contact me.{" "}
          </p>
          
        </div>
        <div className="flex flex-col justify-left text-left px-4">
          <p className="font-bold text-3xl px-2">My Skills</p>
          <div className="">
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              HTML
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              CSS
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              JavaScript
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              Tailwind
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              Bootstrap
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              ReactJS
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              Git
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              MongoDB
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              Responsive Design
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              Github
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              NodeJS
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              Express
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              C++
            </button>
            <button className="bg-slate-200 md:text-xl text-sm text-gray-600 p-2 m-3 rounded-md">
              FireBase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
