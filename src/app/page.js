import { HeaderSection } from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import { ProjectScroll } from "@/components/ProjectScroll";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <HeroHighlight>
      <div className="">
        {/* <BackgroundBeamsWithCollision> */}
        <HeaderSection />
        <ProjectScroll />
        <HeroSection />
      

        {/* </BackgroundBeamsWithCollision>  */}
      </div>
    </HeroHighlight>
  );
}
