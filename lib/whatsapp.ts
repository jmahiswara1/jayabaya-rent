/**
 * WhatsApp booking URL generator
 * All WA redirect logic lives here — no other file should construct WA URLs
 */

const WA_NUMBER = "6281216312645";

interface BookingData {
    nama: string;
    hp: string;
    namaMobil: string;
    tanggalMulai: string;
    tanggalSelesai: string;
    durasi: number;
    layanan: "Ambil Sendiri" | string; // "Antar ke: {alamat}"
    supir: boolean;
    catatan: string;
    totalEstimasi: number;
}

/**
 * Generates a formatted WhatsApp booking message
 */
function formatBookingMessage(data: BookingData): string {
    const formattedTotal = new Intl.NumberFormat("id-ID").format(
        data.totalEstimasi
    );

    return `Halo Jayabaya Trans, saya ingin menyewa kendaraan:

Nama     : ${data.nama}
No. HP   : ${data.hp}
Mobil    : ${data.namaMobil}
Mulai    : ${data.tanggalMulai}
Selesai  : ${data.tanggalSelesai}
Durasi   : ${data.durasi} hari
Layanan  : ${data.layanan}
Supir    : ${data.supir ? "Ya" : "Tidak"}
Catatan  : ${data.catatan || "-"}

Estimasi : Rp ${formattedTotal}

Mohon konfirmasinya. Terima kasih.`;
}

/**
 * Generates a full WhatsApp URL with encoded booking message
 */
export function generateWhatsAppURL(data: BookingData): string {
    const message = formatBookingMessage(data);
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a simple WhatsApp URL with a custom message
 * For quick contact forms (Contact page, CTA buttons)
 */
export function generateQuickWhatsAppURL(message: string): string {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a WhatsApp URL for a specific car inquiry
 */
export function generateCarInquiryURL(carName: string): string {
    const message = `Halo Jayabaya Trans, saya tertarik dengan ${carName}. Apakah unit tersedia? Mohon infonya. Terima kasih.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type { BookingData };
