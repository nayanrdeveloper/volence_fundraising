import React from "react";

function Banner() {
  return (
    <div className="flex flex-col items-center mx-1 gap-4 mt-3 md:mt-10 bg-global-green rounded-3xl p-7 md:p-10 dark:(bg-dark-card border-2 border-dark-border)">
      <h4 className="text-white text-3xl font-semibold">Join Us And Let'S Make A Better World, Today</h4>
      <p className="text-white dark:(text-global-grey-dark)">
      Volence is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.

      </p>
      <div className="flex justify-center flex-wrap gap-2">
        <button className="bg-global-orange text-white rounded-xl px-8 py-2 w-[14rem] dark:(bg-global-yellow text-black)">Donate Now</button>
        <button className="bg-white text-global-green rounded-xl px-8 py-2 w-[14rem] dark:(text-global-yellow)">More ways to help</button>
      </div>
    </div>
  );
}

export default Banner;
