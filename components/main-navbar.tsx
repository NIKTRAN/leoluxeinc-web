"use client";

import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  // ProductItem,
  HoveredLink,
} from "@/components/ui/navbar-menu";

/**
 * Simple navbar using your Menu + MenuItem components.
 * Drop <MainNavbar /> into layout.tsx.
 */


const MainNavbar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="flex justify-center">
      <Menu setActive={setActive}>
        {/* Home */}
        <MenuItem item="Home" active={active} setActive={setActive}>
          <HoveredLink href="/">Go to homepage</HoveredLink>
        </MenuItem>

        {/* Products */}
        <MenuItem item="Products" active={active} setActive={setActive}>
          <div className="flex flex-col gap-3">
            <HoveredLink href="/Product">All products</HoveredLink>
            <HoveredLink href="/Product/Men">Men</HoveredLink>
            <HoveredLink href="/Product/Women">Women</HoveredLink>
            <HoveredLink href="/Product/Unisex">Unisex</HoveredLink>
          </div>
        </MenuItem>

        {/* Contact */}
        <MenuItem item="Contact" active={active} setActive={setActive}>
          <HoveredLink href="/Contact">Contact page</HoveredLink>Q
        </MenuItem>

        {/* About */}
        <MenuItem item="About" active={active} setActive={setActive}>
          <HoveredLink href="/About">About LEO LUXE INC</HoveredLink>
        </MenuItem>
      </Menu>
    </header>
  );
};

export default MainNavbar;
