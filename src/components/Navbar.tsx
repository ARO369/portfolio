"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border border-[#413d3d] rounded-full",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"#projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#Portfolio">Portfolio</HoveredLink>
              <HoveredLink href="#crm">CRM Web App</HoveredLink>
              <HoveredLink href="#landing">CRM Landing page</HoveredLink>
              <HoveredLink href="#youtube">YouTube Clone</HoveredLink>
              <HoveredLink href="#financeGpt">FinanceGPT</HoveredLink>
              <HoveredLink href="#techNews">Tech News</HoveredLink>
              <HoveredLink href="#chapApp">Chat App</HoveredLink>
              <HoveredLink href="#gdsc">GDSC website</HoveredLink>
              <HoveredLink href="#moviesHub">MoviesHub</HoveredLink>
              <HoveredLink href="#gpa">GPA Calculator</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"#about"}>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#services">Services</HoveredLink>
              <HoveredLink href="#experience">Experience</HoveredLink>
              <HoveredLink href="#blogs">Blogs</HoveredLink>
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
              <HoveredLink href="tel:+91 1234567890">Mobile</HoveredLink>
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
