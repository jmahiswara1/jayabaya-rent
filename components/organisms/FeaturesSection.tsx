"use client";

import { motion } from "framer-motion";
import { Headphones, ShieldCheck, BadgeDollarSign, MapPin } from "lucide-react";
import SectionTitle from "@/components/molecules/SectionTitle";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap = {
    Headphones,
    ShieldCheck,
    BadgeDollarSign,
    MapPin,
};

export default function FeaturesSection() {
    return (
        <section className="section-padding bg-white">
            <div className="container-main">
                <SectionTitle
                    title="Kenapa Memilih Kami?"
                    subtitle="Layanan terbaik dengan standar keamanan dan kenyamanan tinggi untuk perjalanan Anda."
                    align="center"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
                >
                    {WHY_CHOOSE_US.map((item, idx) => {
                        const Icon = iconMap[item.icon as keyof typeof iconMap];
                        return (
                            <motion.div
                                key={idx}
                                variants={staggerItem}
                                className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface hover:bg-white hover:shadow-card transition-all duration-300 border border-transparent hover:border-gray-100"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold font-heading text-charcoal mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted font-body leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
