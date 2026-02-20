"use client";

/**
 * HeroSection organism
 * Black & white split layout:
 * - Left: huge bold black headline + description + CTA pill button
 * - Right: hero car image
 * Matches reference design: white background, clean typographic hero
 */

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { generateQuickWhatsAppURL } from "@/lib/whatsapp";
import { SITE } from "@/lib/constants";

const easeOut = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.13, delayChildren: 0.2 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const carVariant: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut, delay: 0.3 } },
};

export default function HeroSection() {
    const waUrl = generateQuickWhatsAppURL(
        "Halo Jayabaya Trans! Saya ingin tanya info sewa mobil."
    );

    return (
        <section className="relative min-h-screen bg-white flex items-center overflow-hidden pt-16 md:pt-20">
            {/* Subtle gradient accent - right side */}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

            <div className="container-main w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)] py-12">

                    {/* Left - Text Content */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col justify-center"
                    >
                        {/* Eyebrow label */}
                        <motion.div variants={item} className="mb-4">
                            <span className="inline-flex items-center gap-2 text-sm font-semibold font-body text-gray-500 tracking-widest uppercase">
                                <span className="inline-block w-8 h-px bg-gray-400" />
                                Jasa Rental Terpercaya
                            </span>
                        </motion.div>

                        {/* Main headline - bold black, huge */}
                        <motion.h1
                            variants={item}
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-black leading-[1.0] tracking-tight mb-6"
                        >
                            RENTAL MOBIL
                            <br />
                            MURAH <span className="text-black">KEDIRI</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={item}
                            className="text-gray-600 font-body text-base md:text-lg leading-relaxed mb-8 max-w-md"
                        >
                            {SITE.description}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
                            {/* Lihat Katalog - plain black pill */}
                            <Link href="/katalog">
                                <button className="inline-flex items-center justify-center bg-black text-white font-semibold font-body text-base px-8 py-4 rounded-full hover:bg-gray-900 transition-all duration-200">
                                    Lihat Katalog
                                </button>
                            </Link>
                            {/* Sewa Sekarang - black pill with white circle arrow */}
                            <a href={waUrl} target="_blank" rel="noopener noreferrer">
                                <button className="group inline-flex items-center gap-3 bg-black text-white font-semibold font-body text-base pl-8 pr-2 py-2 rounded-full hover:bg-gray-900 transition-all duration-200">
                                    Sewa Sekarang
                                    <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-95 transition-transform duration-300">
                                        <ArrowUpRight className="w-5 h-5 text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </span>
                                </button>
                            </a>
                        </motion.div>

                        {/* Stats row */}
                        <motion.div
                            variants={item}
                            className="mt-12 flex flex-wrap gap-8"
                        >
                            {[
                                { value: "50+", label: "Armada Tersedia" },
                                { value: "10K+", label: "Pelanggan Puas" },
                                { value: "2015", label: "Berdiri Sejak" },
                            ].map(({ value, label }) => (
                                <div key={label}>
                                    <div className="text-2xl font-extrabold font-heading text-black">{value}</div>
                                    <div className="text-xs text-gray-500 font-body mt-0.5">{label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - Car Image */}
                    <motion.div
                        variants={carVariant}
                        initial="hidden"
                        animate="visible"
                        className="relative flex items-center justify-center h-full w-full"
                    >
                        {/* Faded Grid Background */}
                        <div
                            className="absolute inset-[-20%] z-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_3px),linear-gradient(to_bottom,#0000000a_1px,transparent_3px)] bg-[size:32px_32px]"
                            style={{
                                maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 40%, transparent 100%)",
                                WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 40%, transparent 100%)"
                            }}
                        />

                        <Image
                            src="/images/hero.png"
                            alt="Armada Mobil Jayabaya Trans - Toyota Kijang Innova"
                            width={700}
                            height={480}
                            className="relative z-10 object-contain drop-shadow-2xl w-full max-w-[600px]"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
