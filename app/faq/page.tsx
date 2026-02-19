"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionTitle from "@/components/molecules/SectionTitle";
import FAQItem from "@/components/molecules/FAQItem";
import Button from "@/components/atoms/Button";
import { FAQ_DATA } from "@/data/faq";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { generateQuickWhatsAppURL } from "@/lib/whatsapp";

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].category);

    const activeItems = FAQ_DATA.find((c) => c.category === activeCategory)?.items ?? [];
    const waUrl = generateQuickWhatsAppURL("Halo, saya punya pertanyaan tentang sewa mobil.");

    return (
        <PageLayout>
            {/* Hero */}
            <div className="bg-surface border-b border-gray-100 py-14 md:py-20">
                <div className="container-main text-center">
                    <SectionTitle
                        label="Tanya Jawab"
                        title="Pertanyaan yang Sering Ditanyakan"
                        subtitle="Temukan jawaban atas pertanyaan umum seputar sewa mobil di Jayabaya Rent."
                        align="center"
                    />
                </div>
            </div>

            <div className="container-main py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Category Tabs (Desktop: left sidebar, Mobile: top scroll) */}
                    <aside className="lg:w-56 shrink-0">
                        <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                            {FAQ_DATA.map((cat) => (
                                <button
                                    key={cat.category}
                                    onClick={() => setActiveCategory(cat.category)}
                                    className={`shrink-0 px-4 py-2.5 text-sm font-medium rounded-lg text-left transition-colors
                    ${activeCategory === cat.category
                                            ? "bg-primary text-white"
                                            : "bg-surface text-charcoal hover:bg-gray-100"
                                        }`}
                                >
                                    {cat.category}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* FAQ Items */}
                    <motion.div
                        key={activeCategory}
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 space-y-3"
                    >
                        {activeItems.map((item, idx) => (
                            <motion.div key={idx} variants={staggerItem}>
                                <FAQItem question={item.question} answer={item.answer} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center bg-surface rounded-2xl py-12 px-6 border border-gray-100">
                    <h3 className="text-xl font-bold font-heading text-charcoal mb-3">
                        Masih ada pertanyaan?
                    </h3>
                    <p className="text-muted font-body mb-6">
                        Tim kami siap membantu Anda melalui WhatsApp kapan saja.
                    </p>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer">
                        <Button leftIcon={<Phone className="w-4 h-4" />} pill>
                            Hubungi via WhatsApp
                        </Button>
                    </a>
                </div>
            </div>
        </PageLayout>
    );
}
