import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import ImageCard from "./HeaderImageCard";
import SocialLinks from "./SocialLinks";
import { FlipWords } from "./ui/flip-words";

export function HeaderSection() {
  const words = ["Elegant","Sleek","Stylish","Trendy"];
  return (
    <BackgroundBeamsWithCollision>
      <div className="h-screen flex flex-col justify-around mb-5 md:mb-0 py-20" id="HeaderSection">
        <div
          className="  flex flex-col lg:flex-row items-center gap-20  md:gap-5 lg:gap-30 xl:gap-40 justify-center "
          
        >
          <h2 className="px-5 md:px-0 relative z-20 text-5xl  lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Hi, I am Faizan Tayyab
            <br />
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="text-2xl md:text-3xl lg:text-5xl">  I will Design <FlipWords words={words} />Website</span>
                </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="text-2xl md:text-3xl lg:text-5xl">  I will Design <FlipWords words={words} />Website</span>
              </div>
            </div>
          </h2>
          <ImageCard />
        </div>
        <SocialLinks />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
