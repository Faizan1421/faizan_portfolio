import { GlareCard } from "@/components/ui/glare-card";
import Image from "next/image";

export default function ImageCard() {
  return (
    <div className=" relative flex flex-col items-center justify-center w-[250px] h-[300px]  sm:w-[250px] sm:h-[300px]  bg-gradient-to-br from-blue-900 to-pink-900 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500 ">
     <div className="z-[-50] absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] bg-red-500 rounded-lg blur-2xl  " />
    <div className="flex flex-col items-center justify-center w-[240px] h-[290px] sm:w-[240px]   sm:h-[290px] bg-white dark:bg-black rounded-lg">
     <Image
       src="https://res.cloudinary.com/dzxywksdm/image/upload/v1733559245/414048569_7141970295891764_5075936731563071177_n_lgiuxi.jpg"
       alt="hero"
       width={1000}
       height={1000}
       className="opacity-40 h-full w-full  mx-auto rounded-lg object-cover  "
     />
    </div>
    </div>
  );
}
