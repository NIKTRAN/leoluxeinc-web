"use client";

import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";


import {
  Menu,
  MenuItem,
  HoveredLink,
} from "@/components/ui/navbar-menu";
// import { menu } from "motion/react-client";

const MainNavbar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header >
      <Menu setActive={setActive}>

        
        {/* Home */}
        {/* <MenuItem item="Home" active={active} setActive={setActive}>
          <HoveredLink href="/">Go to homepage</HoveredLink>
        </MenuItem> */}

        {/* Products – tablet */}
        <MenuItem
          id="products"
          label={
            <Link href="/Product" className="inline-flex items-center">
              Products
            </Link>
          }
          active={active}
          setActive={setActive}
          className="hidden sm:block"
        >
          <div className="flex flex-col gap-3">
            <HoveredLink href="/Product">All products</HoveredLink>
            <HoveredLink href="/Product/Men">Men</HoveredLink>
            <HoveredLink href="/Product/Women">Women</HoveredLink>
            <HoveredLink href="/Product/Unisex">Unisex</HoveredLink>
          </div>
        </MenuItem>


        {/*logo + site name */}

        <Link
          href="/"
          className="
            flex flex-col items-center gap-1
            absolute left-1/2 -translate-x-1/2
            sm:static sm:left-auto sm:translate-x-0
          "
        >

          {/* <Image src="/images/brand-assets/leoluxeinc-logo.png" alt="LEO LUXE INC logo" width={64} height={64} className="h-8 w-auto sm:h-15 md:h-12 lg:h-25 filter invert dark:invert-0" /> */} 

          <span className="logo-text-size font-semibold">
            LEO LUXE INC.
          </span>
        </Link>


        {/* Contact – desktop / tablet */}
        <MenuItem
          id="contact"
          label="Contact"
          active={active}
          setActive={setActive}
          className="hidden sm:block"
        >
          <HoveredLink href="/Contact">Contact page</HoveredLink>
        </MenuItem>










        {/* This one moves to the phone-only nav underneath */}



        {/* Products – tablet */}
        <MenuItem
          id="products-phone"
          label="Products"
          active={active}
          setActive={setActive}
          navSlot="phone"
        >
          <div className="flex flex-col gap-3">
            <HoveredLink href="/Product">All products</HoveredLink>
            <HoveredLink href="/Product/Men">Men</HoveredLink>
            <HoveredLink href="/Product/Women">Women</HoveredLink>
            <HoveredLink href="/Product/Unisex">Unisex</HoveredLink>
          </div>
        </MenuItem>


        <MenuItem
          id="contact-phone"
          label="Contact"
          active={active}
          setActive={setActive}
          navSlot="phone"
        >
          <HoveredLink href="/Contact">Contact page</HoveredLink>
        </MenuItem>


        {/* Phone Menu – phone only */}
        {/* <MenuItem
          id="menu"
          label={
            <div className="flex items-center gap-2">

              <span className="underline underline-offset-1"> Menu</span>

            </div>
          }
          active={active}
          setActive={setActive}
          className="ml-auto block sm:hidden"
        >
          <div className="flex flex-col gap-2">
            <HoveredLink href="/Product">All products</HoveredLink>
            <HoveredLink href="/Product/Men">Men</HoveredLink>
            <HoveredLink href="/Product/Women">Women</HoveredLink>
            <HoveredLink href="/Product/Unisex">Unisex</HoveredLink>
            <HoveredLink href="/Contact">Contact</HoveredLink>
          </div>
        </MenuItem> */}

      </Menu>
    </header>
  );
};

export default MainNavbar;
