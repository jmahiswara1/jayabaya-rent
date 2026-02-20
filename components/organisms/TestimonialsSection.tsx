"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/molecules/SectionTitle";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";

export default function TestimonialsSection() {
    return (
        <section className="section-padding bg-white">
            <div className="container-main">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
                    {/* Left: Heading */}
                    <div className="lg:col-span-1 lg:sticky lg:top-24">
                        <SectionTitle
                            label="Testimoni"
                            title="Kata Mereka Tentang Kami"
                            subtitle="Ribuan pelanggan puas telah mempercayakan perjalanan mereka kepada Jayabaya Trans."
                            align="left"
                        />
                        <div className="mt-8 p-6 bg-surface rounded-2xl border border-gray-100 hidden lg:block">
                            <div className="text-4xl font-bold font-heading text-primary mb-2">4.9/5</div>
                            <div className="flex gap-1 text-yellow-400 mb-2">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm text-muted font-body">
                                Rata-rata rating dari 500+ ulasan di Google Maps
                            </p>
                        </div>
                    </div>

                    {/* Right: Grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {TESTIMONIALS.map((testimonial, idx) => (
                            <TestimonialCard
                                key={idx}
                                {...testimonial}
                                text={testimonial.content}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
