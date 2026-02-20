/**
 * FAQ data per category
 * Used on /faq page
 */

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQCategory {
    category: string;
    items: FAQItem[];
}

export const FAQ_DATA: FAQCategory[] = [
    {
        category: "Pemesanan",
        items: [
            {
                question: "Bagaimana cara memesan mobil di Jayabaya Trans?",
                answer:
                    "Anda bisa memesan melalui website kami dengan mengisi form booking, lalu kami akan menghubungi Anda via WhatsApp untuk konfirmasi. Alternatifnya, Anda bisa langsung chat WhatsApp ke 0812-1631-2645.",
            },
            {
                question: "Berapa lama proses konfirmasi pesanan?",
                answer:
                    "Proses konfirmasi biasanya membutuhkan waktu 15–30 menit di jam operasional (08.00–21.00 WIB). Di luar jam tersebut, kami akan membalas di pagi hari berikutnya.",
            },
            {
                question: "Apakah bisa memesan mendadak (H-1 atau hari H)?",
                answer:
                    "Bisa, selama unit masih tersedia. Kami sarankan memesan minimal 1 hari sebelumnya agar persiapan lebih matang dan memastikan unit siap.",
            },
            {
                question: "Bagaimana jika ingin membatalkan pesanan?",
                answer:
                    "Pembatalan sebelum 24 jam dari jadwal sewa tidak dikenakan biaya. Pembatalan kurang dari 24 jam dikenakan biaya 50% dari total sewa. DP tidak bisa dikembalikan jika pembatalan dilakukan kurang dari 12 jam.",
            },
        ],
    },
    {
        category: "Syarat Sewa",
        items: [
            {
                question: "Dokumen apa saja yang diperlukan untuk sewa mobil?",
                answer:
                    "Dokumen yang diperlukan: (1) KTP asli dan fotokopi, (2) SIM A yang masih berlaku, (3) Kartu Keluarga atau dokumen pendukung lainnya. Untuk sewa dengan sopir, cukup KTP saja.",
            },
            {
                question: "Apakah ada persyaratan usia minimal untuk menyewa?",
                answer:
                    "Usia minimal penyewa adalah 21 tahun dan memiliki SIM A yang berlaku. Untuk penyewa di bawah 25 tahun, diperlukan dokumen tambahan.",
            },
            {
                question: "Apakah bisa sewa mobil tanpa sopir (lepas kunci)?",
                answer:
                    "Bisa. Untuk sewa lepas kunci, diperlukan KTP asli, SIM A yang berlaku, dan denda jaminan yang akan dikembalikan setelah mobil dikembalikan dalam kondisi baik.",
            },
        ],
    },
    {
        category: "Harga & Pembayaran",
        items: [
            {
                question: "Berapa uang muka (DP) yang diperlukan?",
                answer:
                    "DP minimal 30% dari total biaya sewa. Pembayaran bisa dilakukan melalui transfer bank (BCA, BRI, Mandiri) atau tunai saat pengambilan unit.",
            },
            {
                question: "Apakah harga sudah termasuk bensin?",
                answer:
                    "Tidak. Seluruh biaya bahan bakar ditanggung oleh penyewa. Unit diberikan dalam kondisi tangki terisi, dan harus dikembalikan dalam kondisi yang sama.",
            },
            {
                question: "Apakah ada biaya tambahan yang perlu diketahui?",
                answer:
                    "Biaya tambahan yang mungkin ada: (1) Supir: Rp 150.000–200.000/hari, (2) Luar kota: sesuai kesepakatan, (3) Keterlambatan: Rp 50.000/jam, (4) Kerusakan: sesuai estimasi bengkel.",
            },
        ],
    },
    {
        category: "Operasional",
        items: [
            {
                question: "Apa jam operasional Jayabaya Trans?",
                answer:
                    "Kami buka Senin–Minggu pukul 08.00–21.00 WIB. Untuk pengambilan di luar jam ini bisa diatur dengan pemberitahuan sebelumnya (tambahan biaya mungkin berlaku).",
            },
            {
                question: "Apakah ada layanan antar-jemput unit?",
                answer:
                    "Ada. Layanan antar-jemput tersedia untuk area dalam kota Pare dan Kediri secara gratis. Untuk luar area, biaya disesuaikan dengan jarak.",
            },
            {
                question: "Bagaimana prosedur pengembalian mobil?",
                answer:
                    "Mobil dikembalikan ke garasi kami atau kami yang menjemput sesuai perjanjian. Pengecekan kondisi dilakukan bersama sebelum DP/jaminan dikembalikan.",
            },
        ],
    },
    {
        category: "Kendaraan",
        items: [
            {
                question: "Apakah kondisi kendaraan selalu terawat?",
                answer:
                    "Ya. Seluruh armada kami rutin diservis setiap bulan di bengkel resmi. Sebelum diserahkan kepada penyewa, unit selalu melewati pengecekan standar kami.",
            },
            {
                question: "Bagaimana jika mobil mengalami kerusakan saat disewa?",
                answer:
                    "Segera hubungi kami via WhatsApp. Untuk kerusakan akibat kecelakaan, biaya ditanggung penyewa sesuai estimasi bengkel. Untuk kerusakan mesin non-kelalaian, kami tanggung sepenuhnya.",
            },
            {
                question: "Apakah bisa minta jenis/tipe mobil tertentu?",
                answer:
                    "Tentu bisa. Kami memiliki armada 20+ unit dari berbagai tipe: MPV, SUV, City Car, Sedan, dan Minibus. Hubungi kami untuk memastikan ketersediaan unit yang Anda inginkan.",
            },
        ],
    },
];
