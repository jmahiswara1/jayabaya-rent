"use client";

/**
 * Navbar organism
 * Sticky top navbar with:
 * - Logo (image + text) matching black & white brand
 * - Nav links
 * - CTA "Kontak Kami" button (solid black pill)
 * - Mobile sidebar
 * - Scroll-aware background transition
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, GitCompareArrows, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { useCompareStore } from "@/lib/compareStore";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const compareCount = useCompareStore((s) => s.cars.length);

    // Smooth scroll animations with Framer Motion
    const { scrollY } = useScroll();

    // Animate background from transparent to mostly white
    const backgroundColor = useTransform(
        scrollY,
        [0, 80],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
    );

    // Animate shadow/border when scrolled
    const borderColor = useTransform(
        scrollY,
        [0, 80],
        ["rgba(255, 255, 255, 0)", "rgba(243, 244, 246, 1)"] // gray-100
    );

    const boxShadow = useTransform(
        scrollY,
        [0, 80],
        ["none", "0 1px 3px 0 rgba(0, 0, 0, 0.05)"]
    );

    // Optional blur effect when scrolled
    const backdropFilter = useTransform(
        scrollY,
        [0, 80],
        ["blur(0px)", "blur(12px)"]
    );

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.header
                style={{
                    backgroundColor,
                    borderColor,
                    boxShadow,
                    backdropFilter,
                }}
                className="fixed top-0 left-0 right-0 z-50 border-b"
            >
                <nav className="container-main flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <Image
                                src="/images/logo.png"
                                alt="Jayabaya Trans Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-lg font-extrabold font-heading text-black tracking-wide uppercase">
                            Jayabaya Trans
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium font-body rounded-lg transition-colors",
                                        pathname === href
                                            ? "text-black font-semibold"
                                            : "text-gray-700 hover:text-black"
                                    )}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Compare Badge */}
                        {compareCount > 0 && (
                            <Link href="/compare" className="relative">
                                <button className="p-2 text-gray-700 hover:text-black transition-colors">
                                    <GitCompareArrows className="w-5 h-5" />
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs font-bold rounded-full flex items-center justify-center">
                                        {compareCount}
                                    </span>
                                </button>
                            </Link>
                        )}
                        <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer">
                            <button className="bg-black text-white font-semibold font-body text-sm px-6 py-2.5 rounded-full hover:bg-gray-900 transition-colors">
                                Hubungi Kami
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-black"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/40 z-40 md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-floating flex flex-col md:hidden"
                        >
                            {/* Sidebar Header */}
                            <div className="flex items-center justify-between p-5 border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Jayabaya Trans Logo"
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                    <span className="text-base font-extrabold font-heading text-black uppercase tracking-wide">
                                        Jayabaya Trans
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-1 text-gray-500 hover:text-black"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Sidebar Links */}
                            <nav className="flex-1 py-4">
                                {NAV_LINKS.map(({ label, href }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={cn(
                                            "flex items-center px-5 py-3 text-base font-medium font-body transition-colors",
                                            pathname === href
                                                ? "text-black border-l-2 border-black bg-gray-50 font-semibold"
                                                : "text-gray-700 hover:text-black hover:bg-gray-50"
                                        )}
                                    >
                                        {label}
                                    </Link>
                                ))}
                                {compareCount > 0 && (
                                    <Link
                                        href="/compare"
                                        className="flex items-center gap-2 px-5 py-3 text-base font-medium font-body text-gray-700 hover:text-black hover:bg-gray-50"
                                    >
                                        <GitCompareArrows className="w-5 h-5" />
                                        Bandingkan ({compareCount})
                                    </Link>
                                )}
                            </nav>

                            {/* Sidebar CTA */}
                            <div className="p-5 border-t border-gray-100">
                                <a
                                    href={CONTACT.whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <button className="w-full bg-black text-white font-semibold font-body rounded-full py-3 flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                                        <ArrowUpRight className="w-4 h-4" />
                                        Hubungi Kami
                                    </button>
                                </a>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
