/**
 * Promo & package data
 * Used on /promo page
 */

export interface PromoPackage {
    id: string;
    title: string;
    description: string;
    price: number;
    duration: string;
    includes: string[];
    highlight?: string;
    image: string;
}

export const PROMO_PACKAGES: PromoPackage[] = [
    {
        id: "wisata-kelud",
        title: "Paket Wisata Gunung Kelud",
        description:
            "Jelajahi keindahan Gunung Kelud dengan armada nyaman. Termasuk sopir berpengalaman yang hafal rute.",
        price: 650000,
        duration: "1 hari (12 jam)",
        includes: [
            "1 unit MPV kapasitas 7 orang",
            "Sopir berpengalaman",
            "Antar-jemput area Pare/Kediri",
            "Air mineral",
        ],
        highlight: "Terpopuler",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    },
    {
        id: "kampung-inggris-tour",
        title: "Paket Kampung Inggris Tour",
        description:
            "Keliling destinasi wisata edukatif Kampung Inggris, Pare. Cocok untuk keluarga dan rombongan.",
        price: 450000,
        duration: "1 hari (8 jam)",
        includes: [
            "1 unit MPV/City Car",
            "Sopir lokal yang hafal area Pare",
            "Antar-jemput stasiun/terminal",
        ],
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80",
    },
    {
        id: "slg-simpang-lima",
        title: "Paket Simpang Lima Gumul",
        description:
            "Kunjungi monumen ikonik Kediri, Simpang Lima Gumul dan sekitarnya dalam satu paket hemat.",
        price: 350000,
        duration: "Setengah hari (6 jam)",
        includes: [
            "1 unit City Car/MPV",
            "Sopir berpengalaman",
            "Antar-jemput area Kediri",
        ],
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    },
    {
        id: "promo-weekend",
        title: "Promo Akhir Pekan",
        description:
            "Diskon 15% untuk sewa setiap Sabtu dan Minggu. Berlaku untuk semua jenis armada.",
        price: 0,
        duration: "Minimal 1 hari",
        includes: [
            "Diskon 15% dari harga normal",
            "Berlaku Sabtu & Minggu",
            "Semua jenis armada",
            "Tidak bisa digabung promo lain",
        ],
        highlight: "Diskon 15%",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    },
    {
        id: "sewa-3-hari",
        title: "Promo Sewa 3 Hari",
        description:
            "Hemat lebih banyak! Sewa minimal 3 hari berturut-turut dan dapatkan diskon spesial.",
        price: 0,
        duration: "Minimal 3 hari",
        includes: [
            "Diskon 10% hari ke-3 dan seterusnya",
            "Berlaku semua hari",
            "Semua jenis armada",
        ],
        highlight: "Diskon 10%",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    },
    {
        id: "paket-minibus",
        title: "Paket Rombongan Minibus",
        description:
            "Solusi perjalanan rombongan hingga 14 orang. Cocok untuk study tour, arisan, atau wisata keluarga besar.",
        price: 900000,
        duration: "1 hari (12 jam)",
        includes: [
            "1 unit Toyota Hiace (14 kursi)",
            "Sopir berpengalaman",
            "Antar-jemput area Pare/Kediri",
            "Air mineral",
        ],
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    },
];
