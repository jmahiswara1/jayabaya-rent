"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitCompare, Plus, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import SectionTitle from "@/components/molecules/SectionTitle";
import CarGrid from "@/components/organisms/CarGrid";
import CompareTable from "@/components/organisms/CompareTable";
import Button from "@/components/atoms/Button";
import { useCompareStore } from "@/lib/compareStore";
import { cars as allCars } from "@/data/cars";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function ComparePage() {
    const { cars: compareCars, clearAll } = useCompareStore();
    const [isAdding, setIsAdding] = useState(false);

    const hasEnoughCars = compareCars.length >= 2;

    return (
        <PageLayout>
            {/* Hero */}
            <div className="bg-surface border-b border-gray-100 py-14 md:py-20">
                <div className="container-main">
                    <SectionTitle
                        label="Perbandingan"
                        title="Bandingkan Mobil Pilihan Anda"
                        subtitle="Pilih 2–3 mobil untuk dibandingkan secara berdampingan."
                        align="center"
                        rightAction={
                            compareCars.length > 0 ? (
                                <Button
                                    variant="ghost"
                                    leftIcon={<X className="w-4 h-4" />}
                                    onClick={clearAll}
                                    className="text-red-500 hover:bg-red-50"
                                >
                                    Hapus Semua
                                </Button>
                            ) : undefined
                        }
                    />
                </div>
            </div>

            <div className="container-main py-12 md:py-16">
                {/* No cars selected state */}
                {compareCars.length === 0 && !isAdding && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-5">
                            <GitCompare className="w-10 h-10 text-primary/50" />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-charcoal mb-3">
                            Belum ada mobil yang dipilih
                        </h3>
                        <p className="text-muted font-body mb-8 max-w-sm mx-auto">
                            Pilih minimal 2 mobil dari katalog untuk membandingkan spesifikasi secara berdampingan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                                leftIcon={<Plus className="w-4 h-4" />}
                                onClick={() => setIsAdding(true)}
                            >
                                Pilih Mobil untuk Dibandingkan
                            </Button>
                            <Link href="/katalog">
                                <Button variant="outline">Lihat Katalog</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}

                {/* Car picker */}
                <AnimatePresence>
                    {isAdding && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <button
                                    onClick={() => setIsAdding(false)}
                                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors font-body"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Kembali ke perbandingan
                                </button>
                            </div>
                            <p className="text-sm text-muted font-body mb-6">
                                Klik tombol <strong>Bandingkan</strong> pada kartu mobil di bawah untuk menambahkannya.
                                Maks. 3 mobil.
                            </p>
                            <CarGrid cars={allCars} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Compare chips + table */}
                {compareCars.length > 0 && !isAdding && (
                    <div className="space-y-8">
                        {/* Selected chips */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-3"
                        >
                            {compareCars.map((car) => (
                                <motion.div
                                    key={car.id}
                                    variants={staggerItem}
                                    className="flex items-center gap-2 bg-white border border-primary/30 rounded-full px-4 py-2 text-sm font-medium font-body shadow-sm"
                                >
                                    <span>{car.name}</span>
                                </motion.div>
                            ))}
                            {compareCars.length < 3 && (
                                <button
                                    onClick={() => setIsAdding(true)}
                                    className="flex items-center gap-2 border-2 border-dashed border-gray-300 rounded-full px-4 py-2 text-sm text-muted hover:border-primary hover:text-primary transition-colors font-body"
                                >
                                    <Plus className="w-4 h-4" />
                                    Tambah mobil
                                </button>
                            )}
                        </motion.div>

                        {/* Compare Table */}
                        {hasEnoughCars ? (
                            <CompareTable />
                        ) : (
                            <div className="text-center py-10 bg-surface rounded-2xl border border-gray-100">
                                <p className="text-muted font-body">
                                    Pilih minimal <strong>2 mobil</strong> untuk melihat tabel perbandingan.
                                </p>
                                <Button
                                    variant="outline"
                                    leftIcon={<Plus className="w-4 h-4" />}
                                    onClick={() => setIsAdding(true)}
                                    className="mt-4"
                                >
                                    Tambah Mobil
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </PageLayout>
    );
}
