"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Button } from "./ui/moving-border";

const SocialAccounts = [
  {
    name: "Github",
    icon: <IconBrandGithub />,
    href: "https://github.com/faizan1421",
  },
  {
    name: "Facebook",
    icon: <IconBrandFacebook />,
    href: "https://facebook.com/faizan1421",
  },
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin />,
    href: "https://linkedin.com/in/faizan1421",
  },
  {
    name: "Instagram",
    icon: <IconBrandInstagram />,
    href: "https://instagram.com/faizan1421",
  },
];

function SocialLinks() {

 

  return (
    <div className="flex  gap-4 md:gap-8 items-center justify-center flex-wrap">
      {SocialAccounts?.map((account, index) => (
        <>
          <LinkPreview
            url={account?.href}
            className="font-bold"  
          >
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex gap-2"
            >
              {account?.icon} 
            </Button>
          </LinkPreview>
        </>
      ))}
    </div>
  );
}

export default SocialLinks;
