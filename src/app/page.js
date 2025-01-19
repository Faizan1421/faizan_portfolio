"use client"

import { HeaderSection } from "@/components/HeaderSection";
import TimelineSection from "@/components/TimelineSection";
import { ProjectOnMacSection } from "@/components/ProjectOnMacSection";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import TechnologiesSection from "@/components/TechnologiesSection";
import { useEffect, useState } from "react";
import { IconArrowBackUpDouble, IconArrowUpBar, IconCaretUp, IconCaretUpFilled } from "@tabler/icons-react";


export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <HeroHighlight>
      <div className="px-5  " >
        {/* <BackgroundBeamsWithCollision> */}
        <HeaderSection />
        <TechnologiesSection />
        <ProjectOnMacSection />
        <TimelineSection />
     
        {/* </BackgroundBeamsWithCollision>  */}
      
      </div>
      {showBackToTop && (
        <button
          className="fixed bottom-16 right-4  cursor-pointer backToTop bg-gradient-to-r from-violet-900 to-purple-900 rounded-full shadow-md  hover:scale-125 transition-all duration-300"
          onClick={handleBackToTop}
        >
          <IconCaretUpFilled className="w-8 h-8 lg:h-10 lg:w-10 "/>
        </button>
      )}
    </HeroHighlight>
  );
}
