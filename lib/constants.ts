/**
 * Site-wide constants: navigation, footer, contact info, metadata
 */

// ─── Navigation Links ───
export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Katalog", href: "/catalog" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/contact" },
] as const;

// ─── Footer Columns ───
export const FOOTER_NAV = {
    navigasi: [
        { label: "Home", href: "/" },
        { label: "Katalog", href: "/catalog" },
        { label: "Perbandingan", href: "/compare" },
        { label: "Promo", href: "/promo" },
        { label: "Area Layanan", href: "/area" },
    ],
    informasi: [
        { label: "Tentang Kami", href: "/about" },
        { label: "FAQ", href: "/faq" },
        { label: "Kontak", href: "/contact" },
        { label: "Syarat & Ketentuan", href: "/syarat" },
    ],
} as const;

// ─── Contact Information ───
export const CONTACT = {
    whatsapp: "081216312645",
    whatsappFormatted: "+62 812-1631-2645",
    whatsappLink: "https://wa.me/6281216312645",
    instagram: "@j.mahiswara_",
    instagramLink: "https://instagram.com/j.mahiswara_",
    address: "Jl. Dr. Sutomo No.3d, Cangkring, Pelem, Kec. Pare, Kabupaten Kediri, Jawa Timur 64213",
    addressShort: "Pare, Kediri",
    operationalHours: "Senin - Minggu, 08:00 - 21:00 WIB",
    email: "info@jayabayatrans.com",
    mapsEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.474542646!2d112.1288!3d-7.7572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785a1b0e7c27ef%3A0x9e45e0369b8c0b0!2sPare%2C%20Kediri%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1",
} as const;

// ─── Site Metadata ───
export const SITE = {
    name: "Jayabaya Trans",
    tagline: "Sewa Mobil Terpercaya di Pare, Kediri",
    description:
        "Jasa sewa mobil terpercaya di Pare, Kediri dan sekitarnya. Armada terawat, harga transparan, siap antar-jemput sekitar Pare.",
    url: "https://jayabayatrans.com",
    founded: 2015,
} as const;

// ─── Why Choose Us Section ───
export const WHY_CHOOSE_US = [
    {
        title: "Pelayanan Ramah",
        description:
            "Tim customer service dan driver kami siap melayani Anda dengan sepenuh hati 24/7.",
        icon: "Headphones" as const,
    },
    {
        title: "Unit Terawat",
        description:
            "Seluruh armada kami rutin diservis di bengkel resmi untuk kenyamanan maksimal.",
        icon: "ShieldCheck" as const,
    },
    {
        title: "Harga Transparan",
        description:
            "Tidak ada biaya tersembunyi. Harga yang Anda lihat adalah harga yang Anda bayar.",
        icon: "BadgeDollarSign" as const,
    },
    {
        title: "Antar Jemput",
        description:
            "Layanan antar jemput unit gratis untuk area dalam Pare",
        icon: "MapPin" as const,
    },
] as const;

// ─── How To Rent Steps ───
export const HOW_TO_RENT = [
    {
        step: 1,
        title: "Pilih Mobil",
        description:
            "Pilih unit mobil yang Anda inginkan melalui website kami lalu hubungi Admin.",
        icon: "CarFront" as const,
    },
    {
        step: 2,
        title: "Booking & DP",
        description:
            "Lakukan pembayaran Down Payment (DP) untuk mengunci estimasi jadwal Anda.",
        icon: "CalendarCheck" as const,
    },
    {
        step: 3,
        title: "Persyaratan",
        description:
            "Siapkan dan kirimkan foto identitas diri (KTP & SIM) yang masih berlaku.",
        icon: "MessageSquare" as const,
    },
    {
        step: 4,
        title: "Mobil Siap",
        description:
            "Pelunasan saat serah terima. Unit siap diantar atau diambil di garasi.",
        icon: "KeyRound" as const,
    },
] as const;

// ─── Testimonials ───
export const TESTIMONIALS = [
    {
        name: "Budi Santoso",
        role: "Wisatawan",
        content:
            "Pelayanan sangat memuaskan. Mobil bersih dan wangi, driver juga sangat sopan dan hafal jalan di Kediri.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
        name: "Siti Aminah",
        role: "Mahasiswa",
        content:
            "Sewa lepas kunci di Jayabaya sangat mudah prosesnya. Harga juga bersaing dibanding tempat lain.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
    },
    {
        name: "Rizky Pratama",
        role: "Guru",
        content:
            "Rekomendasiin banget buat yang mau wisata ke Gunung Kelud. Drivernya asik diajak ngobrol.",
        rating: 4,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
] as const;

// ─── Service Areas ───
export const SERVICE_AREAS = [
    { city: "Pare", distance: "Pusat" },
    { city: "Kediri", distance: "15 km" },
    { city: "Nganjuk", distance: "30 km" },
    { city: "Jombang", distance: "35 km" },
    { city: "Blitar", distance: "40 km" },
    { city: "Tulungagung", distance: "45 km" },
    { city: "Malang", distance: "90 km" },
] as const;

// ─── About Statistics ───
export const ABOUT_STATS = [
    { value: 8, suffix: "+", label: "Tahun Beroperasi" },
    { value: 50, suffix: "+", label: "Unit Armada" },
    { value: 10000, suffix: "+", label: "Pelanggan Puas" },
    { value: 5, suffix: "+", label: "Kota Dilayani" },
] as const;

// ─── Car Filter Options ───
export const CAR_TYPES = ["SUV", "MPV", "Sedan", "City Car", "Minibus"] as const;
export const TRANSMISSIONS = ["Manual", "Matic"] as const;
export const FUEL_TYPES = ["Bensin", "Diesel", "Hybrid"] as const;
export const CAPACITY_OPTIONS = [5, 7, 8, 14] as const;
export const SORT_OPTIONS = [
    { label: "Harga Terendah", value: "price-asc" },
    { label: "Harga Tertinggi", value: "price-desc" },
    { label: "Terbaru", value: "newest" },
    { label: "Terpopuler", value: "popular" },
] as const;
