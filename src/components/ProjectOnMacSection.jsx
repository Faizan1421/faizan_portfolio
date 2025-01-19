"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function ProjectOnMacSection() {
  return (
    
    <div className="flex flex-col overflow-hidden pt-32 md:pt-20  " id="ProjectOnMacSection">
      <ContainerScroll
        titleComponent={
          <div className="md:pb-20">
            <h1 className="text-4xl font-semibold text-black dark:text-white ">
            One of My SAAS Application <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Real Estate 
              </span>
            </h1>
          </div>
        }
      >
        <Image
          src={`/images/reallestate.png`}
          alt="hero"
          width={1000}
          height={1000}
          className="mx-auto rounded-2xl object-cover  overflow-hidden   " 
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
