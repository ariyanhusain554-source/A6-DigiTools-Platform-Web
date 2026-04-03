import React from "react";

const Rating = () => {
  return (
    <div className="bg-[linear-gradient(to_right,#4F39F6,#9514FA)] flex justify-around items-center gap-25 py-10 text-white mt-10 ">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">50K+</h1>
        <p className="text-xl text-zinc-400">Active Users</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">200+</h1>
        <p className="text-xl text-zinc-400">Premium Tools</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">4.9</h1>
        <p className="text-xl text-zinc-400">Rating</p>
      </div>
    </div>
  );
};

export default Rating;
