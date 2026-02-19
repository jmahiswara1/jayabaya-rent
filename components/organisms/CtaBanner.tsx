"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/atoms/Button";
import { generateQuickWhatsAppURL } from "@/lib/whatsapp";
import { scrollReveal } from "@/lib/animations";

export default function CtaBanner() {
    const waUrl = generateQuickWhatsAppURL("Halo, saya ingin memesan mobil.");

    return (
        <section className="py-12 md:py-20">
            <div className="container-main">
                <motion.div
                    variants={scrollReveal}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={scrollReveal.viewport}
                    transition={scrollReveal.transition}
                    className="relative rounded-3xl overflow-hidden bg-primary px-6 py-12 md:p-16 text-center shadow-2xl shadow-primary/30"
                >
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

                    {/* Glow effects */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                            Siap Memulai Perjalanan?
                        </h2>
                        <p className="text-white/90 font-body text-lg mb-8 leading-relaxed">
                            Jangan ragu untuk bertanya atau langsung memesan unit pilihan Anda.
                            Layanan support kami siap membantu 24 jam.
                        </p>
                        <a href={waUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="outline"
                                size="lg"
                                pill
                                leftIcon={<Phone className="w-5 h-5" />}
                                className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary hover:border-white/90 shadow-lg"
                            >
                                Hubungi Kami Sekarang
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
