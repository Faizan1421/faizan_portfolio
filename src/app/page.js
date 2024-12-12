import { HeaderSection } from "@/components/HeaderSection";
import TimelineSection from "@/components/TimelineSection";
import { ProjectOnMacSection } from "@/components/ProjectOnMacSection";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import TechnologiesSection from "@/components/TechnologiesSection";


export default function Home() {
  return (
    <HeroHighlight>
      <div className="" >
        {/* <BackgroundBeamsWithCollision> */}
        <HeaderSection />
        <TechnologiesSection />
        <ProjectOnMacSection />
        <TimelineSection />
     
        {/* </BackgroundBeamsWithCollision>  */}
      </div>
    </HeroHighlight>
  );
}
