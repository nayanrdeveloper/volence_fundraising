import React from "react";

function WeDo() {
  return (
    <div className="container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
      <div className="flex gap-2 justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-global-orange">What We Do</h3>
          <p className="text-3xl font-semibold text-global-primary">
            We Make A Difference In Their Life
          </p>
          <p className="text-light-grey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            consequuntur eum sint porro! Voluptates esse tempora quia voluptatum
            odio fugit?
          </p>
        </div>
        <div>
            <div className="grid  gap-6">
                <div className="flex flex-col rounded-lg  py-5 px-20 bg-global-light-orange shadow-hero-section">
                    <span className="text-global-orange font-medium ">15K</span>
                    <span>Humans Impacted</span>
                </div>
                <div className="px-18 py-5 rounded-lg bg-global-light-orange justify-center shadow-hero-section">
                    <span className="text-global-orange font-medium">15K</span>
                </div>
                <div className="px-18 py-5 rounded-lg bg-global-light-orange justify-center shadow-hero-section">
                    <span className="text-global-orange font-medium">15K</span>
                </div>
                <div className="px-18 py-5 rounded-lg bg-global-light-orange justify-center shadow-hero-section">
                    <span className="text-global-orange font-medium">15K</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WeDo;
