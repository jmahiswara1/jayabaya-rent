"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, Car } from "lucide-react";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import SectionTitle from "@/components/molecules/SectionTitle";
import BookingForm from "@/components/organisms/BookingForm";
import Button from "@/components/atoms/Button";
import { CONTACT } from "@/lib/constants";
import { staggerContainer, staggerItem, scrollReveal } from "@/lib/animations";

const STEPS = [
    { step: 1, title: "Isi Form", desc: "Lengkapi data diri dan jadwal sewa." },
    { step: 2, title: "Kirim via WA", desc: "Form terkirim otomatis ke WhatsApp kami." },
    { step: 3, title: "Konfirmasi", desc: "Tim kami konfirmasi ketersediaan unit." },
    { step: 4, title: "Unit Siap", desc: "Mobil kami antar atau bisa diambil." },
];

export default function BookingPage() {
    return (
        <PageLayout>
            {/* Hero */}
            <div className="bg-surface border-b border-gray-100 py-14 md:py-20">
                <div className="container-main text-center">
                    <SectionTitle
                        label="Pemesanan"
                        title="Pesan Mobil Sekarang"
                        subtitle="Isi form di bawah dan kami akan segera menghubungi Anda untuk konfirmasi."
                        align="center"
                    />
                </div>
            </div>

            <div className="container-main py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    {/* Left: Steps + Info */}
                    <div className="lg:col-span-2 space-y-8 lg:sticky lg:top-24">
                        {/* Booking steps */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5"
                        >
                            <h3 className="text-base font-bold font-heading text-charcoal">
                                Cara Pemesanan
                            </h3>
                            {STEPS.map((s) => (
                                <motion.div key={s.step} variants={staggerItem} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                                        {s.step}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold font-heading text-charcoal">{s.title}</p>
                                        <p className="text-xs text-muted font-body mt-0.5">{s.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* What's included */}
                        <motion.div
                            {...scrollReveal}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-3"
                        >
                            <h3 className="text-base font-bold font-heading text-charcoal mb-4">
                                Yang Perlu Disiapkan
                            </h3>
                            {[
                                "KTP asli + fotokopi",
                                "SIM A yang berlaku (lepas kunci)",
                                "DP min. 30% dari total",
                                "Konfirmasi jadwal 1 hari sebelum",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2.5 text-sm font-body text-charcoal">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </motion.div>

                        {/* Contact shortcut */}
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 text-center">
                            <Car className="w-8 h-8 text-primary mx-auto mb-3" />
                            <p className="text-sm font-body text-charcoal mb-1">
                                Ingin lihat pilihan mobil dulu?
                            </p>
                            <Link href="/katalog">
                                <Button variant="outline" size="sm" pill className="mt-2">
                                    Lihat Katalog
                                </Button>
                            </Link>
                        </div>

                        {/* Direct WhatsApp */}
                        <div className="text-center">
                            <p className="text-xs text-muted font-body mb-3">Atau langsung hubungi kami:</p>
                            <a
                                href={CONTACT.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline font-body"
                            >
                                <Phone className="w-4 h-4" />
                                {CONTACT.whatsappFormatted}
                            </a>
                        </div>
                    </div>

                    {/* Right: Booking Form */}
                    <div className="lg:col-span-3">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
