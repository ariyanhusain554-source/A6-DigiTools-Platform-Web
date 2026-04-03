import React from "react";

import ractangle from "../assets/Rectangle 3.png";

import BannerImage from "../assets/banner.png";

import play from "../assets/Play.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[linear-gradient(to_right,#4F39F6,#9514FA)] text-white text-sm font-medium px-5 py-2 rounded-full">
            <span className="">
              <img src={ractangle} alt="" />
            </span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tighter">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[linear-gradient(to_right,#4F39F6,#9514FA)] px-8 py-4 rounded-2xl font-semibold text-white">
              Explore Products
            </button>

            <button className="flex items-center gap-2 bg-[linear-gradient(to_right,#4F39F6,#9514FA)] text-transparent bg-clip-text border border-violet-500  px-8 py-4 rounded-2xl">
              <span className="group-hover:translate-x-1 transition">
                <img src={play} alt="" />
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl"
              src={BannerImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
