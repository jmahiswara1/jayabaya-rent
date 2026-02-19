"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Tag, Clock } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionTitle from "@/components/molecules/SectionTitle";
import Button from "@/components/atoms/Button";
import { PROMO_PACKAGES } from "@/data/promos";
import { formatCurrency } from "@/lib/utils";
import { generateQuickWhatsAppURL } from "@/lib/whatsapp";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function PromoPage() {
    return (
        <PageLayout>
            {/* Hero */}
            <div className="bg-surface border-b border-gray-100 py-14 md:py-20">
                <div className="container-main text-center">
                    <SectionTitle
                        label="Promo & Paket"
                        title="Penawaran Terbaik Jayabaya Rent"
                        subtitle="Nikmati berbagai paket wisata dan promo sewa mobil hemat untuk perjalanan Anda."
                        align="center"
                    />
                </div>
            </div>

            <div className="container-main py-12 md:py-16">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PROMO_PACKAGES.map((promo) => {
                        const waMessage = `Halo, saya tertarik dengan ${promo.title}. Apakah masih tersedia?`;
                        const waUrl = generateQuickWhatsAppURL(waMessage);

                        return (
                            <motion.div
                                key={promo.id}
                                variants={staggerItem}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-card transition-shadow duration-300 flex flex-col"
                            >
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={promo.image}
                                        alt={promo.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    {promo.highlight && (
                                        <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {promo.highlight}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold font-heading text-charcoal mb-2">
                                        {promo.title}
                                    </h3>
                                    <p className="text-sm text-muted font-body leading-relaxed mb-5 flex-1">
                                        {promo.description}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-sm text-muted font-body mb-5">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-primary" />
                                            <span>{promo.duration}</span>
                                        </div>
                                        {promo.price > 0 && (
                                            <div className="flex items-center gap-1.5">
                                                <Tag className="w-4 h-4 text-primary" />
                                                <span className="font-semibold text-charcoal">
                                                    {formatCurrency(promo.price)}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Includes */}
                                    <ul className="space-y-1.5 mb-6">
                                        {promo.includes.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm font-body text-charcoal">
                                                <span className="mt-0.5 w-4 h-4 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                                    <svg className="w-2.5 h-2.5 text-green-600 fill-current" viewBox="0 0 24 24">
                                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                                    </svg>
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <a href={waUrl} target="_blank" rel="noopener noreferrer">
                                        <Button
                                            fullWidth
                                            leftIcon={<MessageCircle className="w-4 h-4" />}
                                            variant={promo.price === 0 ? "outline" : "primary"}
                                            pill
                                        >
                                            {promo.price === 0 ? "Klaim Promo" : "Pesan Paket Ini"}
                                        </Button>
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Note */}
                <p className="text-center text-sm text-muted font-body mt-10">
                    Harga belum termasuk bahan bakar. Paket dapat disesuaikan dengan kebutuhan.{" "}
                    <a
                        href={generateQuickWhatsAppURL("Halo, saya ingin tanya tentang paket promo.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline"
                    >
                        Hubungi kami
                    </a>{" "}
                    untuk info lebih lanjut.
                </p>
            </div>
        </PageLayout>
    );
}
