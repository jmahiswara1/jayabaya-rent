"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Star } from "lucide-react";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import SectionTitle from "@/components/molecules/SectionTitle";
import Button from "@/components/atoms/Button";
import { SERVICE_AREAS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const DESTINATIONS = [
    {
        name: "Gunung Kelud",
        description: "Gunung berapi aktif dengan kawah indah dan pemandangan alam spektakuler.",
        distance: "25 km dari Pare",
        rating: 4.8,
        image: "gunung-kelud",
    },
    {
        name: "Simpang Lima Gumul",
        description: "Monumen megah kebanggan kota Kediri, mirip Arc de Triomphe Paris.",
        distance: "15 km dari Pare",
        rating: 4.6,
        image: "slg",
    },
    {
        name: "Gua Selomangleng",
        description: "Gua bersejarah peninggalan Kerajaan Kadiri, dikelilingi hutan asri.",
        distance: "12 km dari Pare",
        rating: 4.5,
        image: "gua",
    },
    {
        name: "Kampung Inggris",
        description: "Pusat kursus bahasa Inggris terbesar di Indonesia, berlokasi di Pare.",
        distance: "Pusat Kota",
        rating: 4.7,
        image: "kampung-inggris",
    },
    {
        name: "Air Terjun Irenggolo",
        description: "Air terjun cantik di lereng Gunung Kelud, cocok untuk piknik keluarga.",
        distance: "30 km dari Pare",
        rating: 4.4,
        image: "air-terjun",
    },
    {
        name: "Candi Penataran",
        description: "Kompleks candi Hindu terbesar di Jawa Timur, warisan Kerajaan Majapahit.",
        distance: "40 km dari Pare",
        rating: 4.6,
        image: "candi",
    },
];

const EXTRA_COSTS = [
    { area: "Kediri Kota", extra: "Gratis" },
    { area: "Nganjuk", extra: "Rp 50.000" },
    { area: "Jombang", extra: "Rp 75.000" },
    { area: "Blitar", extra: "Rp 100.000" },
    { area: "Tulungagung", extra: "Rp 100.000" },
    { area: "Malang", extra: "Rp 200.000" },
];

export default function AreaPage() {
    return (
        <PageLayout>
            {/* Hero */}
            <div className="bg-surface border-b border-gray-100 py-14 md:py-20">
                <div className="container-main text-center">
                    <SectionTitle
                        label="Area Layanan"
                        title="Kami Melayani Seluruh Wilayah Kediri"
                        subtitle="Dari Pare hingga kota-kota sekitar, kami siap mengantarkan Anda ke mana pun."
                        align="center"
                    />
                </div>
            </div>

            <div className="container-main py-12 md:py-16 space-y-16">
                {/* Service Areas */}
                <div>
                    <h2 className="text-2xl font-bold font-heading text-charcoal mb-8 flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-primary" />
                        Kota yang Kami Layani
                    </h2>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
                    >
                        {SERVICE_AREAS.map((area) => (
                            <motion.div
                                key={area.city}
                                variants={staggerItem}
                                className="bg-white border border-gray-100 rounded-2xl p-4 text-center hover:border-primary/30 hover:shadow-sm transition-all"
                            >
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                                    <Navigation className="w-5 h-5" />
                                </div>
                                <p className="text-sm font-bold font-heading text-charcoal">{area.city}</p>
                                <p className="text-xs text-muted font-body mt-1">{area.distance}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Extra Costs */}
                <div>
                    <h2 className="text-2xl font-bold font-heading text-charcoal mb-8 flex items-center gap-3">
                        <Car className="w-6 h-6 text-primary" />
                        Biaya Antar Luar Kota
                    </h2>
                    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                        <table className="w-full text-sm font-body">
                            <thead className="bg-surface">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold text-charcoal">Tujuan</th>
                                    <th className="px-6 py-4 text-left font-semibold text-charcoal">Biaya Tambahan</th>
                                    <th className="px-6 py-4 text-left font-semibold text-charcoal hidden md:table-cell">Keterangan</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {EXTRA_COSTS.map((row) => (
                                    <tr key={row.area} className="hover:bg-surface/50 transition-colors">
                                        <td className="px-6 py-4 text-charcoal font-medium">{row.area}</td>
                                        <td className="px-6 py-4">
                                            <span className={`font-bold ${row.extra === "Gratis" ? "text-green-600" : "text-primary"}`}>
                                                {row.extra}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-muted hidden md:table-cell">Per hari, satu arah</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-muted font-body mt-3">
                        * Biaya antar luar kota dapat berubah. Konfirmasi terlebih dahulu sebelum pemesanan.
                    </p>
                </div>

                {/* Destinations */}
                <div>
                    <h2 className="text-2xl font-bold font-heading text-charcoal mb-8 flex items-center gap-3">
                        <Star className="w-6 h-6 text-primary" />
                        Destinasi Wisata Populer
                    </h2>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {DESTINATIONS.map((dest, idx) => (
                            <motion.div
                                key={idx}
                                variants={staggerItem}
                                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-card transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold font-heading text-charcoal">{dest.name}</h3>
                                    <div className="flex items-center gap-1 text-yellow-400 text-sm font-medium shrink-0 ml-2">
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        {dest.rating}
                                    </div>
                                </div>
                                <p className="text-sm text-muted font-body leading-relaxed mb-4">{dest.description}</p>
                                <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                                    <MapPin className="w-3.5 h-3.5" />
                                    {dest.distance}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA */}
                <div className="text-center bg-surface rounded-2xl py-12 px-6 border border-gray-100">
                    <h3 className="text-xl font-bold font-heading text-charcoal mb-3">
                        Siap Menjelajah Kediri?
                    </h3>
                    <p className="text-muted font-body mb-6">
                        Hubungi kami untuk merencanakan perjalanan Anda bersama Jayabaya Trans.
                    </p>
                    <Link href="/catalog">
                        <Button pill>Lihat Armada Kami</Button>
                    </Link>
                </div>
            </div>
        </PageLayout>
    );
}
