import React from "react";
import MobTabCarousel from "./MobTabCarousel";
import { WavyBackground } from "./wavyBg";

const HeroBanner = () => {
  return (
    <div className=" ">
      <div className="hidden md:block relative md:overflow-x-hidden overflow-y-hidden rounded-b-3xl">
        <WavyBackground className="max-w-fit mx-auto pb-40 ">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-semibold inter-var text-center">
            Quality That's Best
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Prices That Don’t Break the Bank
          </p>
        </WavyBackground>
      </div>

      <MobTabCarousel />
    </div>
  );
};

export default HeroBanner;
