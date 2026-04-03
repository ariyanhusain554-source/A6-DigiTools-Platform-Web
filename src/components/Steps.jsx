import React from "react";

import user from "../assets/user.png";
import packageBox from "../assets/package.png";
import rocket from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="bg-zinc-300 my-20">
      <div className="text-center p-10  mx-auto space-y-5">
        <h1 className="text-5xl text-black font-semibold">
          Get Started in 3 Steps
        </h1>
        <p className="text-xl text-zinc-400">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-20 mx-auto max-w-7xl p-10 bg-transparent">

        <div className="card card-dash bg-base-100 w-96 h-96">
          <div className="card-body">

            <div className="relative flex items-center justify-center mb-3">
                <img className="bg-violet-200 w-25 h-25 bg-cover rounded-full mt-4" src={user} alt="" />

                <span className="absolute top-1 right-2 bg-violet-400 rounded-full w-8 h-8 flex items-center justify-center">01</span>
            </div>
          

            <h2 className="card-title">Create Account</h2>
            <p className="text-zinc-400 text-sm">
           Sign up for free in seconds. <br /> No credit card required to get started.
            </p>
          </div>
        </div>

        <div className="card card-dash bg-base-100 w-96 h-96">
          <div className="card-body">

            <div className="relative flex items-center justify-center mb-3">
                <img className="bg-violet-200 w-25 h-25 bg-cover rounded-full mt-4" src={packageBox} alt="" />
                <span className="absolute top-1 right-2 bg-violet-400 rounded-full w-8 h-8 flex items-center justify-center">02</span>
            </div>


            <h2 className="card-title">Choose Products</h2>
            <p className="text-zinc-400 text-sm">
          Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        <div className="card card-dash bg-base-100 w-96 h-96">
          <div className="card-body">

            <div className="relative flex items-center justify-center mb-3">
                <img className="bg-violet-200 w-25 h-25 bg-cover rounded-full mt-4" src={rocket} alt="" />

                <span className="absolute top-1 right-2 bg-violet-400 rounded-full w-8 h-8 flex items-center justify-center">03</span>
            </div>


            <h2 className="card-title">Start Creating</h2>
            <p className="text-zinc-400 text-sm">
             Download and start using your premium tools immediately.
            </p>
          </div>
        </div>

       




      </div>
    </div>
  );
};

export default Steps;
