"use client";

import { motion } from "framer-motion";
import { CarFront, CalendarCheck, MessageSquare, KeyRound } from "lucide-react";
import SectionTitle from "@/components/molecules/SectionTitle";
import StepCard from "@/components/molecules/StepCard";
import { HOW_TO_RENT } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";

const iconMap = {
    CarFront,
    CalendarCheck,
    MessageSquare,
    KeyRound,
};

export default function HowItWorksSection() {
    return (
        <section className="section-padding bg-surface/50 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3" />

            <div className="container-main relative z-10">
                <SectionTitle
                    label="Cara Sewa"
                    title="Sewa Mobil Mudah & Cepat"
                    subtitle="Proses sewa mobil di Jayabaya Rent sangat praktis, cukup 4 langkah mudah."
                    align="center"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                >
                    {HOW_TO_RENT.map((step) => {
                        const Icon = iconMap[step.icon as keyof typeof iconMap];
                        return (
                            <StepCard
                                key={step.step}
                                stepNumber={step.step}
                                title={step.title}
                                description={step.description}
                                icon={<Icon className="w-6 h-6" />}
                            />
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
