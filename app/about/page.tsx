"use client";

import { motion } from "framer-motion";
import {
    Headphones,
    ShieldCheck,
    BadgeDollarSign,
    MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import SectionTitle from "@/components/molecules/SectionTitle";
import StatCard from "@/components/molecules/StatCard";
import Button from "@/components/atoms/Button";
import { ABOUT_STATS, WHY_CHOOSE_US, CONTACT } from "@/lib/constants";
import { staggerContainer, staggerItem, scrollReveal } from "@/lib/animations";

// Map icon string → component
const iconMap = {
    Headphones,
    ShieldCheck,
    BadgeDollarSign,
    MapPin,
};

const TIMELINE = [
    {
        year: "2015",
        title: "Berdiri",
        desc: "Jayabaya Trans didirikan dengan 3 unit armada perdana di Pare, Kediri.",
    },
    {
        year: "2018",
        title: "Ekspansi",
        desc: "Armada berkembang menjadi 20+ unit, melayani area Kediri Raya dan sekitarnya.",
    },
    {
        year: "2021",
        title: "Digital",
        desc: "Meluncurkan platform digital untuk mempermudah proses pemesanan.",
    },
    {
        year: "2025",
        title: "Sekarang",
        desc: "Melayani 10.000+ pelanggan dengan armada lengkap dari City Car hingga Minibus.",
    },
];

export default function AboutPage() {
    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="relative bg-charcoal text-white py-24 md:py-32 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about.jpeg"
                        alt="Jayabaya Trans About Background"
                        fill
                        className="object-cover object-center opacity-40 mix-blend-luminosity"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
                </div>

                {/* Background glow */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2" />
                </div>

                <div className="container-main relative z-10">
                    <div className="text-left w-full max-w-2xl mx-auto lg:mx-0">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-block px-3 py-1 bg-charcoal/50 backdrop-blur-sm border border-white/10 rounded-full text-xs font-semibold text-primary uppercase tracking-wider font-body mb-4"
                        >
                            Tentang Kami
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight"
                        >
                            Mitra Perjalanan <span className="text-primary">Terpercaya</span> Anda di Kediri
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="mt-6 text-white/80 font-body text-lg md:text-xl leading-relaxed max-w-xl"
                        >
                            Sejak 2015, Jayabaya Trans hadir untuk menemani perjalanan Anda dengan armada terawat,
                            harga transparan, dan pelayanan yang hangat.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-10 flex flex-col sm:flex-row gap-4 justify-start"
                        >
                            <Link href="/catalog">
                                <Button size="lg" pill className="w-full sm:w-auto shadow-lg shadow-primary/20">
                                    Lihat Armada Kami
                                </Button>
                            </Link>
                            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" pill className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                                    Hubungi Kami
                                </Button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-padding bg-white">
                <div className="container-main">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {ABOUT_STATS.map((stat) => (
                            <motion.div key={stat.label} variants={staggerItem}>
                                <StatCard
                                    value={`${stat.value}${stat.suffix}`}
                                    label={stat.label}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Story Timeline */}
            <section className="section-padding bg-surface">
                <div className="container-main">
                    <SectionTitle
                        label="Perjalanan Kami"
                        title="Dari Pare untuk Semua"
                        subtitle="Perjalanan panjang kami dalam melayani pelanggan dengan sepenuh hati."
                        align="center"
                    />
                    <div className="relative mt-12 max-w-3xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 md:left-1/2" />

                        <div className="space-y-10">
                            {TIMELINE.map((item, idx) => (
                                <motion.div
                                    key={item.year}
                                    {...scrollReveal}
                                    transition={{ ...scrollReveal.transition, delay: idx * 0.1 }}
                                    className={`relative flex gap-6 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-[18px] md:left-1/2 md:-ml-3 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-sm z-10" />
                                    {/* Content */}
                                    <div
                                        className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] bg-white rounded-2xl border border-gray-100 p-5 shadow-sm ${idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                                            }`}
                                    >
                                        <span className="text-xs font-semibold text-primary font-body uppercase tracking-wider">
                                            {item.year}
                                        </span>
                                        <h3 className="text-base font-bold font-heading text-charcoal mt-1 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-muted font-body leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-white">
                <div className="container-main">
                    <SectionTitle
                        label="Keunggulan Kami"
                        title="Mengapa Pilih Jayabaya Trans?"
                        align="center"
                    />
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                    >
                        {WHY_CHOOSE_US.map((item) => {
                            const Icon = iconMap[item.icon as keyof typeof iconMap];
                            return (
                                <motion.div
                                    key={item.title}
                                    variants={staggerItem}
                                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface hover:bg-white hover:shadow-card transition-all"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                                        {Icon && <Icon className="w-7 h-7" />}
                                    </div>
                                    <h3 className="text-base font-bold font-heading text-charcoal mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted font-body leading-relaxed">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="section-padding bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}
                />
                <div className="container-main relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                        Siap Menjelajah Bersama Kami?
                    </h2>
                    <p className="text-white/80 font-body mb-8 max-w-xl mx-auto">
                        Temukan armada terbaik pilihan Anda dan pesan sekarang dalam hitungan menit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/catalog">
                            <Button size="lg" pill className="bg-white text-primary hover:bg-white/90">
                                Lihat Katalog Mobil
                            </Button>
                        </Link>
                        <Link href="/booking">
                            <Button size="lg" variant="outline" pill className="border-white/40 text-white hover:bg-white/10">
                                Pesan Sekarang
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
