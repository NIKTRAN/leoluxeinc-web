"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Home", link: "/" },          // change paths if your routes differ
  { name: "Product", link: "/Product" },
  { name: "Contact", link: "/Contact" },
  { name: "About Us", link: "/About" },
];

export function SiteNavbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <Navbar className="top-0">
      {/* Desktop navbar */}
      <NavBody>
        {/* Left: logo / brand */}
        <div className="flex items-center gap-2">
          <NavbarLogo 
          />
          {/* <span className="text-sm font-semibold tracking-tight text-black dark:text-white">
            LEO LUXE INC
          </span> */}
        </div>

        {/* Center: nav items */}
        <NavItems
          items={navItems}
          onItemClick={() => setIsMobileOpen(false)}
        />

        {/* Right: CTA buttons (optional) */}
        <div className="hidden items-center gap-2 lg:flex">
          <NavbarButton href="/Contact" variant="secondary">
            Contact
          </NavbarButton>
          <NavbarButton href="/Product" variant="primary">
            Shop Now
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile navbar */}
      <MobileNav>
        <MobileNavHeader>
          <span className="text-base font-semibold text-black dark:text-white">
            LEO LUXE INC
          </span>
          <MobileNavToggle
            isOpen={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)}>
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={() => setIsMobileOpen(false)}
                className="text-sm text-neutral-700 dark:text-neutral-200"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-4 flex flex-col gap-2">
              <NavbarButton href="/Product" variant="primary">
                Shop Now
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
