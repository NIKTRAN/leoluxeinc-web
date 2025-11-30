"use client";

import React from "react";
import { motion, type Transition } from "motion/react";
import Image from "next/image";

/* -------------------------------------------------------------------------- */
/*                                shared utils                                */
/* -------------------------------------------------------------------------- */

const cn = (...classes: Array<string | undefined | null | false>) =>
  classes.filter(Boolean).join(" ");

/**
 * Default spring transition for dropdown panel animations.
 * Change these values to tweak the “feel” of the menu globally.
 */
const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

/* -------------------------------------------------------------------------- */
/*                                    Menu                                    */
/* -------------------------------------------------------------------------- */

interface MenuProps {
  /** Called with null on mouse leave, and item id on hover. */
  setActive: (item: string | null) => void;
  children: React.ReactNode;

  /** Extra classes for the menu container nav. */
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({
  setActive,
  children,
  className,
}) => {
  // Make TS treat children as React elements with props = any
  const childArray = React.Children.toArray(children) as React.ReactElement<any>[];

  const primaryItems = childArray.filter((child) => {
    // default: primary if navSlot is not "phone"
    return child.props.navSlot !== "phone";
  });

  const phoneItems = childArray.filter((child) => {
    return child.props.navSlot === "phone";
  });

  return (
    <div  
      className="relative z-20"
      onMouseLeave={() => setActive(null)}
    >
        {/* Main navbar (desktop / tablet; also visible on phone if you want) */}
        <nav
          className={cn(
            // layout
            "relative flex w-full items-center justify-around sm:justify-between",

            // horizontal padding: base + larger on bigger screens
            "px-4 md:px-[6vw] lg:px-[10vw]",
            "py-8 sm:py-4 md:py-4 lg:py-4",

            // border
            "border-b border-black-500/20 dark:border-white/20",

            // background & vertical padding
            "bg-background shadow-input",
            className,
          )}
        >
          {primaryItems}
        </nav>

        {/* Phone-only navbar underneath */}
        {phoneItems.length > 0 && (
          <nav
            onMouseLeave={() => setActive(null)}
            className={cn(
              // only show on phone
              "relative flex w-full items-start justify-around sm:hidden",

              "px-5 md:px-[6vw] lg:px-[10vw]",
              "py-3",
              "bg-background shadow-input",
            )}
          >
            {phoneItems}
          </nav>
        )}
  
  
  </div>
  );
};


/* -------------------------------------------------------------------------- */
/*                                  MenuItem                                  */
/* -------------------------------------------------------------------------- */

interface MenuItemProps {
  /** Used for active state */
  id: string;

  /** What to show in the nav (text, SVG, etc.) */
  label: React.ReactNode;

  /** Currently active item key. */
  active: string | null;

  /** Called when this item becomes active (hovered). */
  setActive: (id: string) => void;

  /** Optional panel content shown when this item is active. */
  children?: React.ReactNode;

  /** Which navbar this item belongs to. Default: primary (desktop/tablet). */
  navSlot?: "primary" | "phone";

  className?: string;
  labelClassName?: string;
  panelClassName?: string;
  panelInnerClassName?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  id,
  label,
  setActive,
  active,
  children,
  className,
  labelClassName,
  panelClassName,
  panelInnerClassName,
}) => {
  const isActive = active === id;

  return (
    <div
      onMouseEnter={() => setActive(id)}
      onMouseLeave={() => setActive(null)}
      onClick={() => setActive(isActive ? null : id)} // tap toggle for phone
      className={cn("relative flex flex-col items-start", className)}
    >
<div
        className={cn(
          "cursor-pointer text-black hover:opacity-90 dark:text-white",
          labelClassName,
        )}
      >
        {label}
      </div>

      {/* Panel: always in the DOM, we just fade/slide it with classes */}
      <div
        className={cn(
          // position & spacing
          "absolute left-1/2 top-full pt-2",
          "sm:top-[calc(100%+1.2rem)] sm:pt-4",
          "-translate-x-1/2 transform",
          "z-50",

          // animation
          "transition-opacity transition-transform duration-150 ease-out",

          // visible vs hidden state
          isActive
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
        )}
      >
        <div
          className={cn(
            "overflow-hidden rounded-2xl border border-black/20 shadow-xl backdrop-blur-sm dark:border-white/20",
            panelClassName,
          )}
        >
          <div
            className={cn("h-full w-max p-4", panelInnerClassName)}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};


/* -------------------------------------------------------------------------- */
/*                                ProductItem                                 */
/* -------------------------------------------------------------------------- */

interface ProductItemProps {
  title: string;
  description: string;
  href: string;
  src: string;

  /** Extra classes for outer wrapper link. */
  className?: string;
  /** Extra classes for the image. */
  imageClassName?: string;
  /** Extra classes for the title. */
  titleClassName?: string;
  /** Extra classes for the description. */
  descriptionClassName?: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  title,
  description,
  href,
  src,
  className,
  imageClassName,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <a
      href={href}
      className={cn(
        // layout of image + text
        // "flex space-x-2",
        className,
      )}
    >
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className={cn(
          // image styling
          "shrink-0 rounded-md shadow-2xl",
          imageClassName,
        )}
      />
      <div>
        <h4
          className={cn(
            // title typography
            "mb-1 text-xl font-bold",
            "text-black dark:text-white",
            titleClassName,
          )}
        >
          {title}
        </h4>
        <p
          className={cn(
            // text layout & size
            "max-w-40 text-sm",
            // color
            // "bg-background dark:text-neutral-300",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
    </a>
  );
};

/* -------------------------------------------------------------------------- */
/*                                HoveredLink                                 */
/* -------------------------------------------------------------------------- */

type HoveredLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export const HoveredLink: React.FC<HoveredLinkProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className={cn(
        // base colors
        "text-neutral-700 dark:text-neutral-200",
        // hover behavior
        // "hover:bg-background",
        "transition-colors",
        className,
      )}
    >
      {children}
    </a>
  );
};