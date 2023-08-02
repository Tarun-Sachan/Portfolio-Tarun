import React from "react";
import Typed from "react-typed";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Hero = () => {
  return (
    <div className="text-white" >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          TURNING IDEAS TO REAL LIFE PRODUCTS.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Welcome.
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-4xl sm:text-4xl text-xl font-bold py-4">
            Web developement made
          </p>
          <Typed
            className="md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["FASTER", "FLEXIBLE", "SIMPLER"]}
            typeSpeed={140}
            backSpeed={180}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-1" >My name is Tarun Sachan. I'm a front-end developer based in Delhi.
         I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intutively implemented UX.</p>
      <button className="bg-[#00df9a] w-[200px] rounded text-bold font-medium my-6 mx-auto py-3 text-black" ><AnchorLink href="#projects">PROJECTS</AnchorLink></button>
      </div>
    </div>
  );
};

export default Hero;