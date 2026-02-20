"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Instagram, MapPin, Clock, Send } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionTitle from "@/components/molecules/SectionTitle";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import Button from "@/components/atoms/Button";
import { CONTACT } from "@/lib/constants";
import { generateWhatsAppURL } from "@/lib/whatsapp";
import { scrollReveal } from "@/lib/animations";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const url = generateWhatsAppURL({
            nama: name,
            hp: "",
            namaMobil: "",
            tanggalMulai: "",
            tanggalSelesai: "",
            durasi: 0,
            layanan: "",
            supir: false,
            catatan: message,
            totalEstimasi: 0,
        });
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const contactItems = [
        {
            icon: Phone,
            label: "WhatsApp",
            value: CONTACT.whatsappFormatted,
            href: CONTACT.whatsappLink,
        },
        {
            icon: Instagram,
            label: "Instagram",
            value: CONTACT.instagram,
            href: CONTACT.instagramLink,
        },
        {
            icon: MapPin,
            label: "Alamat",
            value: CONTACT.address,
            href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`,
        },
        {
            icon: Clock,
            label: "Jam Operasional",
            value: CONTACT.operationalHours,
            href: null,
        },
    ];

    return (
        <PageLayout>
            {/* Hero */}
            <div className="bg-surface border-b border-gray-100 py-14 md:py-20">
                <div className="container-main text-center">
                    <SectionTitle
                        label="Kontak"
                        title="Hubungi Kami"
                        subtitle="Ada pertanyaan atau ingin memesan? Kami siap membantu Anda."
                        align="center"
                    />
                </div>
            </div>

            <div className="container-main py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Contact Info + Map */}
                    <div className="space-y-8">
                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactItems.map((item) => {
                                const Icon = item.icon;
                                const content = (
                                    <div className="p-5 bg-white border border-gray-100 rounded-2xl hover:border-primary/30 hover:shadow-sm transition-all">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <p className="text-xs text-muted font-body mb-1">{item.label}</p>
                                        <p className="text-sm font-semibold text-charcoal font-heading leading-snug">
                                            {item.value}
                                        </p>
                                    </div>
                                );
                                return item.href ? (
                                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                                        {content}
                                    </a>
                                ) : (
                                    <div key={item.label}>{content}</div>
                                );
                            })}
                        </div>

                        {/* Google Maps Embed */}
                        <motion.div
                            variants={scrollReveal}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={scrollReveal.viewport}
                            transition={scrollReveal.transition}
                            className="w-full h-72 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                        >
                            <iframe
                                src={CONTACT.mapsEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Jayabaya Trans di Pare, Kediri"
                            />
                        </motion.div>
                    </div>

                    {/* Right: Quick Message Form */}
                    <div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold font-heading text-charcoal mb-2">
                                Kirim Pesan Cepat
                            </h3>
                            <p className="text-sm text-muted font-body mb-6">
                                Isi form berikut dan kami akan menghubungi Anda via WhatsApp.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-charcoal font-body mb-1.5">
                                        Nama Lengkap
                                    </label>
                                    <Input
                                        placeholder="Masukkan nama Anda"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-charcoal font-body mb-1.5">
                                        Pesan
                                    </label>
                                    <Textarea
                                        placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    fullWidth
                                    leftIcon={<Send className="w-4 h-4" />}
                                    disabled={!name || !message}
                                >
                                    Kirim via WhatsApp
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
