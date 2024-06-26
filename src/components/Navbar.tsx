"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 sm:inset-x-0 sm:max-w-xl sm:mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"#home"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"#projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="https://aaradhyapathak.vercel.app/">
                Portfolio
              </HoveredLink>
              <HoveredLink href="https://arocrmsoftware.netlify.app/">
                CRM Web App
              </HoveredLink>
              <HoveredLink href="https://arocrmlandingwebsite.netlify.app/">
                CRM Landing page
              </HoveredLink>
              <HoveredLink href="https://aroyoutubeclone.netlify.app">
                YouTube Clone
              </HoveredLink>
              <HoveredLink href="https://financegpt.netlify.app/">
                FinanceGPT
              </HoveredLink>
              <HoveredLink href="https://arotechnews.netlify.app/">
                Tech News
              </HoveredLink>
              <HoveredLink href="https://github.com/ARO369/nodejs-chat-app">
                Chat App
              </HoveredLink>
              <HoveredLink href="https://arogdsc.netlify.app/">
                GDSC website
              </HoveredLink>
              <HoveredLink href="https://aromovieshub.netlify.app/">
                MoviesHub
              </HoveredLink>
              <HoveredLink href="https://aroprojects.000webhostapp.com/gymwebsite/">
                Gym Website
              </HoveredLink>
              <HoveredLink href="https://aroprojects.000webhostapp.com/gpacalculator/">
                GPA Calculator
              </HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"#about"}>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#blogs">Blogs</HoveredLink>
              <HoveredLink href="#services">Services</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"#contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="mailto:aaradhyapathakofficial@gmail.com">
                Email
              </HoveredLink>
              <HoveredLink href="https://www.linkedin.com/in/aaradhyapathak/">
                LinkedIn
              </HoveredLink>
              <HoveredLink href="https://www.instagram.com/yonko_aro">
                Instagram
              </HoveredLink>
              <HoveredLink href="https://x.com/AaradhyaPathak6">
                X(Twitter)
              </HoveredLink>
              <HoveredLink href="tel:+91 1234567890">Mobile</HoveredLink>
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
