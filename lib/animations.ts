/**
 * Centralized Framer Motion animation constants
 * All components import from here for consistency
 */

// Default easing curve: ease-out cubic
const easeOutCubic = [0.25, 0.46, 0.45, 0.94] as const;

// Page transition: fade + slide up
export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.4, ease: easeOutCubic },
};

// Card entrance: staggered fade + slide up
export const cardContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export const cardItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: easeOutCubic },
    },
};

// Hero text: staggered slide up per line
export const heroContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export const heroLine = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeOutCubic },
    },
};

// Navbar: fade in on mount
export const navbarFadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3, ease: easeOutCubic },
};

// CompareBar: slide up from bottom
export const compareBarSlide = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
    transition: { duration: 0.3, ease: easeOutCubic },
};

// Accordion FAQ: height + opacity
export const accordionContent = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.3, ease: easeOutCubic },
};

// Button hover/tap interactions
export const buttonHover = {
    scale: 1.03,
    transition: { duration: 0.2, ease: "easeOut" as const },
};

export const buttonTap = {
    scale: 0.97,
};

// Image hover: scale inside overflow-hidden container
export const imageHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: easeOutCubic },
};

// Scroll reveal: whileInView
export const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5, ease: easeOutCubic },
};

// Fade in only (no slide)
export const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.4, ease: easeOutCubic },
};

// Stagger container for scroll reveal groups
export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: easeOutCubic },
    },
};
