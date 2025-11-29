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
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        // layout
        "relative flex w-full items-center justify-around",

        // horizontal padding: base + larger on bigger screens
        "px-0 md:px-[6vw] lg:px-[vw]",
        "py-2 sm:py-4  md:py-4 lg:py-4",

        // border
        "border-b border-black-500/20 dark:border-white/20",

        // background & vertical padding
        "bg-background shadow-input",
        
        className,
      )}

    >
      {children}
    </nav>
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

  /** Extra classes... */
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
      onMouseEnter={() => setActive(id)}  // desktop hover
      // onClick={handleClick}               // mobile tap
      className={cn("relative", className)}
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          "cursor-pointer text-black hover:opacity-90 dark:text-white",
          labelClassName,
        )}
      >
        {label}
      </motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={DEFAULT_TRANSITION}
        >
          {isActive && (
            <div className="absolute left-1/2 top-[calc(100%+1.2rem)] -translate-x-1/2 transform pt-4">
              <motion.div
                transition={DEFAULT_TRANSITION}
                layoutId="active"
                className={cn(
                  "overflow-hidden rounded-2xl border border-black/20 bg-background shadow-xl backdrop-blur-sm",
                  "dark:border-white/20 dark:bg-background",
                  panelClassName,
                )}
              >
                <motion.div
                  layout
                  className={cn("h-full w-max p-4", panelInnerClassName)}
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
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
        "flex space-x-2",
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
            "bg-background dark:text-neutral-300",
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
        "hover: bg-background",
        className,
      )}
    >
      {children}
    </a>
  );
};
