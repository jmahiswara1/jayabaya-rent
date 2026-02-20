import { FileText, Shield, CreditCard, AlertTriangle, Car, Phone } from "lucide-react";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import SectionTitle from "@/components/molecules/SectionTitle";
import Button from "@/components/atoms/Button";
import { generateQuickWhatsAppURL } from "@/lib/whatsapp";

const SECTIONS = [
    {
        icon: FileText,
        title: "Dokumen yang Dibutuhkan",
        items: [
            "KTP asli dan fotokopi yang masih berlaku",
            "SIM A yang masih berlaku (untuk sewa lepas kunci)",
            "Kartu Keluarga (KK) sebagai dokumen pendukung",
            "Dokumen lain yang diminta sesuai kebutuhan",
            "Penyewa yang bukan WNI wajib menunjukkan paspor dan KITAS/KITAP",
        ],
    },
    {
        icon: Car,
        title: "Aturan Penggunaan Kendaraan",
        items: [
            "Kendaraan tidak boleh digunakan untuk kegiatan ilegal",
            "Kapasitas penumpang tidak boleh melebihi kapasitas resmi kendaraan",
            "Penyewa bertanggung jawab penuh atas kondisi kendaraan selama masa sewa",
            "Memodifikasi kendaraan dalam bentuk apapun tidak diperbolehkan",
            "Merokok di dalam kendaraan dilarang keras",
            "Perjalanan luar kota (lebih dari 100 km dari Pare) wajib konfirmasi lebih dahulu",
            "Kendaraan harus dikembalikan ke garasi kami atau sesuai perjanjian",
        ],
    },
    {
        icon: CreditCard,
        title: "Kebijakan DP dan Pembayaran",
        items: [
            "DP minimal 30% dari total biaya sewa wajib dibayarkan saat konfirmasi",
            "Metode pembayaran: Transfer Bank (BCA, BRI, Mandiri) atau tunai",
            "Pelunasan dilakukan saat pengambilan kendaraan",
            "DP tidak dapat dikembalikan jika pembatalan dilakukan kurang dari 12 jam sebelum jadwal",
            "Harga belum termasuk bahan bakar — diserahkan dalam kondisi tangki penuh dan wajib dikembalikan penuh",
            "Biaya sopir: Rp 150.000–200.000 per hari (jika menggunakan layanan sopir)",
        ],
    },
    {
        icon: Shield,
        title: "Kebijakan Pembatalan",
        items: [
            "Pembatalan lebih dari 24 jam sebelum jadwal: Tidak ada biaya",
            "Pembatalan 12–24 jam sebelum jadwal: Dikenakan biaya 25% dari total sewa",
            "Pembatalan kurang dari 12 jam: Dikenakan biaya 50% dari total sewa",
            "Tidak hadir tanpa konfirmasi (no-show): Dikenakan biaya 100%",
            "Khusus peak season (Lebaran, Natal, Tahun Baru): Kebijakan pembatalan lebih ketat",
        ],
    },
    {
        icon: AlertTriangle,
        title: "Denda Keterlambatan & Kerusakan",
        items: [
            "Keterlambatan pengembalian: Rp 50.000 per jam dari waktu yang disepakati",
            "Kerusakan akibat kelalaian penyewa: ditanggung penyewa penuh sesuai estimasi bengkel",
            "Kerusakan mesin akibat bukan kelalaian penyewa: ditanggung Jayabaya Trans",
            "Kehilangan kunci atau aksesori: dikenakan biaya penggantian",
            "Ban bocor (bukan akibat kecelakaan): ditanggung bersama 50:50",
            "Kecelakaan: penyewa wajib melapor ke pihak kepolisian dan segera menghubungi kami",
            "Kendaraan hilang akibat kelalaian: penyewa bertanggung jawab penuh atas kerugian",
        ],
    },
];

export default function SyaratPage() {
    const waUrl = generateQuickWhatsAppURL("Halo, saya ingin bertanya tentang syarat sewa mobil.");

    return (
        <PageLayout>
            {/* Hero */}
            <div className="bg-surface border-b border-gray-100 py-14 md:py-20">
                <div className="container-main text-center">
                    <SectionTitle
                        label="Syarat & Ketentuan"
                        title="Ketentuan Sewa Kendaraan"
                        subtitle="Harap baca dan pahami syarat dan ketentuan berikut sebelum melakukan pemesanan."
                        align="center"
                    />
                </div>
            </div>

            <div className="container-main py-12 md:py-16 max-w-4xl">
                <div className="space-y-8">
                    {SECTIONS.map((section, idx) => {
                        const Icon = section.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-lg font-bold font-heading text-charcoal">{section.title}</h2>
                                </div>
                                <ul className="space-y-2.5">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-body text-charcoal">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Last Updated */}
                <p className="text-xs text-muted font-body text-center mt-8">
                    Terakhir diperbarui: Februari 2025. Syarat dan ketentuan dapat berubah sewaktu-waktu.
                </p>

                {/* CTA */}
                <div className="mt-12 text-center bg-surface rounded-2xl py-10 px-6 border border-gray-100">
                    <h3 className="text-lg font-bold font-heading text-charcoal mb-3">
                        Ada yang perlu ditanyakan?
                    </h3>
                    <p className="text-sm text-muted font-body mb-6">
                        Tim kami siap menjelaskan lebih detail melalui WhatsApp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href={waUrl} target="_blank" rel="noopener noreferrer">
                            <Button leftIcon={<Phone className="w-4 h-4" />} pill>
                                Tanya via WhatsApp
                            </Button>
                        </a>
                        <Link href="/katalog">
                            <Button variant="outline" pill>
                                Lihat Katalog Mobil
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
