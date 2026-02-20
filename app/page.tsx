"use client";

import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/organisms/HeroSection";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import HowItWorksSection from "@/components/organisms/HowItWorksSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import CtaBanner from "@/components/organisms/CtaBanner";
import CarGrid from "@/components/organisms/CarGrid";
import SectionTitle from "@/components/molecules/SectionTitle";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedCars } from "@/data/cars";

export default function Home() {
  const featuredCars = getFeaturedCars();

  return (
    <PageLayout fullBleed>
      <HeroSection />

      <FeaturesSection />

      {/* Featured Cars Section */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <SectionTitle
            label="Armada Pilihan"
            title="Mobil Favorit Pelanggan"
            subtitle="Pilihan mobil terpopuler dengan performa terbaik untuk perjalanan Anda."
            align="left"
            rightAction={
              <Link href="/katalog" className="hidden md:block">
                <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Lihat Semua Mobil
                </Button>
              </Link>
            }
          />

          <div className="mt-12">
            <CarGrid cars={featuredCars} />
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/katalog">
              <Button variant="outline" fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
                Lihat Semua Mobil
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <HowItWorksSection />

      <TestimonialsSection />

      <CtaBanner />
    </PageLayout>
  );
}
