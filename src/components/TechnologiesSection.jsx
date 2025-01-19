import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

import Image from "next/image";
import {technologies }from "../constants";

function TechnologiesSection() {

  const items  = technologies.map((tech) => ({
    title: tech?.name,
    icon: (<Image src={tech?.icon} alt="tech" width={100} height={100} className="text-neutral-500 dark:text-neutral-300"/>),
    href: "",
  }));
  return (
    // <div className="flex " id="TechnologiesSection">
    // <div> {technologies[0].name}</div>
    // <Image src={technologies[0].icon} alt="tech" width={100} height={100} />
    // </div>
    <div className="flex flex-col justify-center items-center w-full gap-10 ">
      <h1 className="text-center  font-bold text-5xl lg:text-7xl text-white ">Technologies</h1>
      <div className="px-0 lg:px-52 xl:px-96">
      <p className="text-md md:text-lg lg:text-xl  text-center max-w-[500px]">A powerful tech stack that enable seamless development of modern, 
     scalable, and visually stunning web applications.</p>
      </div>
      
    <FloatingDock
      // mobileClassName="translate-y-20" // only for demo, remove for production
      items={items}
    />
  </div>

  )
}

export default TechnologiesSection