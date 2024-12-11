import { GlareCard } from "@/components/ui/glare-card";
import Image from "next/image";

export default function ImageCard() {
  return (
    <div className=" relative flex flex-col items-center justify-center w-[302px] h-[302px] lg:w-[340px] lg:h-[340px] bg-gradient-to-br from-blue-900 to-pink-900 rounded-full cursor-pointer">
     <div className="z-[-50] absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.72] bg-red-500 rounded-full blur-3xl" />
    <div className="flex flex-col items-center justify-center w-72 h-72  lg:w-80 lg:h-80 bg-white dark:bg-black rounded-full">
     <Image
       src="https://res.cloudinary.com/dzxywksdm/image/upload/v1733559245/414048569_7141970295891764_5075936731563071177_n_lgiuxi.jpg"
       alt="hero"
       width={1000}
       height={1000}
       className="opacity-40 mx-auto rounded-full object-cover   "
     />
    </div>
    </div>
  );
}
