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
        // positioning & layout
        "relative flex w-screen justify-between",
        "md:justify-evenly md:gap-1",

        // border (light + dark)
        "border border-red-500/20 dark:border-white/20",

        // background & padding
        "bg-background px-8 py-6 shadow-input",

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
  /** Called when this item becomes active (hovered). */
  setActive: (item: string) => void;
  /** Currently active item key. */
  active: string | null;
  /** Unique identifier / label for this item. */
  item: string;
  /** Optional panel content shown when this item is active. */
  children?: React.ReactNode;

  /** Extra classes for the outer wrapper div. */
  className?: string;
  /** Extra classes for the clickable/hover label text. */
  labelClassName?: string;
  /** Extra classes for the floating panel container. */
  panelClassName?: string;
  /** Extra classes for the panel inner content wrapper. */
  panelInnerClassName?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  setActive,
  active,
  item,
  children,
  className,
  labelClassName,
  panelClassName,
  panelInnerClassName,
}) => {
  const isActive = active === item;

  return (
    <div
      onMouseEnter={() => setActive(item)}
      className={cn("relative", className)}
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          // base label styles
          "cursor-pointer",
          "text-black hover:opacity-90",
          // dark mode
          "dark:text-white",
          labelClassName,
        )}
      >
        {item}
      </motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={DEFAULT_TRANSITION}
        >
          {isActive && (
            <div className={cn("absolute left-1/2 top-[calc(100%+1.2rem)] -translate-x-1/2 transform pt-4)")}>
              <motion.div
                transition={DEFAULT_TRANSITION}
                layoutId="active"
                className={cn(
                  // base container styles
                  "overflow-hidden rounded-2xl border border-black/20",
                  "bg-white shadow-xl backdrop-blur-sm",
                  // dark mode
                  "dark:border-white/20 dark:bg-black",
                  panelClassName,
                )}
              >
                <motion.div
                  layout
                  className={cn(
                    // inner panel layout
                    "h-full w-max p-4",
                    panelInnerClassName,
                  )}
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
            "text-neutral-700 dark:text-neutral-300",
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
        "hover:text-black",
        className,
      )}
    >
      {children}
    </a>
  );
};
