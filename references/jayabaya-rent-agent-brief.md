# Jayabaya Rent — AI Agent Project Brief

## 1. Project Overview

**Name:** Jayabaya Rent  
**Type:** Frontend-only multi-page car rental website (no backend, no database)  
**Location:** Pare, Kab. Kediri, Jawa Timur  
**Target Users:** Individu, wisatawan, pelajar Kampung Inggris, pelaku bisnis lokal  
**WhatsApp:** 081216312645  
**Instagram:** @j.mahiswara_  
**Deploy Target:** Vercel  

---

## 2. Tech Stack

| Layer | Tool | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSG, file-based routing, Vercel-native |
| Styling | Tailwind CSS v3 | Utility-first, responsive, no runtime overhead |
| Animation | Framer Motion & GSAP | Declarative, smooth, tree-shakeable,card |
| Icons | Lucide React | Consistent, lightweight SVG icons |
| Images | Next/Image + Unsplash | Auto-optimization, lazy load, placeholder blur |
| Data | `/data/cars.ts` (local JSON) | No backend needed, typed with TypeScript |
| Forms | React Hook Form | Lightweight, controlled form state |
| State (compare) | Zustand | Minimal global state for compare feature |
| Font | Google Fonts: Plus Jakarta Sans + Inter | Modern, Indonesian-friendly, fast CDN |

---

## 3. Design System

### Colors
```
--color-primary    : #E31E24   /* Vivid Red — CTA, accent, highlight */
--color-bg         : #FFFFFF   /* Pure White — main background */
--color-text       : #1A1A1A   /* Charcoal — heading and body */
--color-muted      : #707070   /* Slate Gray — subtext, border, icon */
--color-surface    : #F5F5F5   /* Light Gray — card background */
--color-overlay    : rgba(0,0,0,0.5)
```

### Typography
```
font-heading : 'Plus Jakarta Sans', sans-serif  /* weight: 600, 700, 800 */
font-body    : 'Inter', sans-serif              /* weight: 400, 500 */
```

### Spacing Scale
Use Tailwind default scale. Base unit: 4px.

### Border Radius
- Card: `rounded-2xl`
- Button: `rounded-full` (pill) or `rounded-lg`
- Input: `rounded-lg`

### Shadow
- Card: `shadow-sm hover:shadow-md transition-shadow`
- Floating bar: `shadow-2xl`

---

## 4. Component Architecture (Atomic Design)

```
components/
  atoms/
    Button.tsx          /* variant: primary | outline | ghost | danger */
    Badge.tsx           /* variant: type | transmission | fuel */
    Input.tsx
    Textarea.tsx
    Select.tsx
    Skeleton.tsx
    Divider.tsx
  molecules/
    CarCard.tsx         /* foto, nama, badge, harga, tombol detail+bandingkan */
    FilterBar.tsx       /* filter tipe, transmisi, kapasitas, harga */
    SearchBar.tsx
    SortDropdown.tsx
    TestimonialCard.tsx
    FAQItem.tsx         /* accordion single item */
    StepCard.tsx        /* cara sewa step */
    StatCard.tsx        /* angka statistik about page */
  organisms/
    Navbar.tsx          /* sticky, mobile hamburger, active link highlight */
    Footer.tsx          /* logo, nav, sosmed, copyright */
    HeroSection.tsx
    CarGrid.tsx
    CompareBar.tsx      /* floating, muncul saat 1+ mobil dipilih */
    BookingForm.tsx     /* form + WA redirect */
    CompareTable.tsx
    TermsSection.tsx    /* syarat dan ketentuan */
  layout/
    PageLayout.tsx      /* wraps Navbar + children + Footer */
```

---

## 5. Pages & Features

### `/` — Home
- HeroSection: headline, subheadline, 2 CTA (Lihat Katalog / Pesan Sekarang), background image Unsplash
- SearchBar cepat: pilih tipe mobil, langsung filter ke katalog
- WhyChooseUs: 4 keunggulan (Armada Terawat, Antar-Jemput, Harga Transparan, Siap 24 Jam)
- FeaturedCars: 4 kartu mobil unggulan
- HowToRent: 4 step visual (Pilih Mobil, Hubungi WA, Konfirmasi, Berangkat)
- Testimonials: 3 review pelanggan dengan avatar dan bintang
- CTABanner: background merah, nomor WA besar, tombol pesan
- TermsSection: accordion ringkas syarat dan ketentuan sewa
- Footer

### `/catalog` — Katalog Mobil
- FilterBar: tipe (SUV / MPV / City Car / Sedan / Minibus), transmisi (Manual / Matic), kapasitas, range harga slider
- SearchBar: cari nama mobil (debounced)
- SortDropdown: Harga Terendah, Harga Tertinggi, Terbaru, Terpopuler
- CarGrid: semua 20 mobil dalam responsive grid (1 / 2 / 3 kolom)
- CarCard: foto, nama, badge tipe + transmisi, kapasitas, harga/hari, tombol Detail + Bandingkan
- CompareBar (floating): muncul saat 1 mobil dipilih, tampil di bottom, maks 3 mobil
- EmptyState: ilustrasi + teks jika filter kosong

### `/catalog/[slug]` — Detail Mobil
- Breadcrumb: Home > Katalog > Nama Mobil
- Galeri: foto utama + 3-4 thumbnail (bisa klik untuk ganti foto utama)
- Nama, badge tipe dan transmisi
- Harga per hari, keterangan inklusif/eksklusif BBM
- Spesifikasi tabel: merek, tahun, kapasitas, bahan bakar, AC, transmisi, bagasi
- Fasilitas ikon: AC, Musik, GPS, Charger USB
- Syarat Sewa: KTP, SIM A, DP 30%, tidak untuk luar kota tanpa konfirmasi
- Tombol Aksi: Pesan via WhatsApp + Tambah ke Perbandingan
- RelatedCars: 3 mobil serupa tipe/harga mirip

### `/compare` — Perbandingan Mobil
- Slot 2–3 mobil (tambah/hapus)
- CompareTable: baris foto, nama, harga, tipe, transmisi, kapasitas, bahan bakar, fasilitas, tahun
- Highlight diff: baris yang berbeda diberi background merah muda tipis
- Tombol Pesan di bawah masing-masing kolom
- EmptyState: panduan cara tambah mobil dari katalog

### `/booking` — Form Pemesanan
- Pilihan mobil (auto-terisi jika dari detail, atau dropdown pilih manual)
- Data pemesan: nama lengkap, nomor HP
- Detail sewa: tanggal mulai, tanggal selesai, durasi otomatis terhitung
- Layanan: Ambil sendiri / Antar ke lokasi (input alamat muncul kondisional)
- Supir: Ya / Tidak
- Catatan tambahan: textarea
- Ringkasan pesanan: nama mobil, durasi, estimasi harga
- Tombol Kirim: generate pesan WA terformat dan redirect ke `wa.me/6281216312645`
- TermsSection: syarat dan ketentuan lengkap di bawah form

### `/about` — Tentang Kami
- Hero singkat: foto garasi/armada, tagline Jayabaya Rent
- Cerita singkat: deskripsi rental, visi, nilai
- Statistik: Tahun Berdiri, Jumlah Armada, Pelanggan, Kota Dilayani
- Area Layanan: daftar kota (Kediri, Pare, Nganjuk, Jombang, Blitar, Tulungagung, Malang)
- Galeri armada: 6 foto grid
- CTA ke katalog

### `/faq` — FAQ
- Accordion per kategori: Pemesanan, Syarat Sewa, Harga & Pembayaran, Operasional, Kendaraan
- CTA bawah: "Masih ada pertanyaan? Hubungi via WhatsApp"

### `/contact` — Kontak
- Info kontak: WA (klik buka WA), Instagram (link @j.mahiswara_), alamat Pare Kediri
- Jam operasional
- Embed Google Maps lokasi Pare, Kediri
- Form cepat: nama + pesan → redirect WA

### `/promo` — Promo & Paket
- Paket wisata: Gua Selomangleng, Simpang Lima Gumul, Kampung Inggris tour
- Promo weekend, diskon sewa 3+ hari
- Setiap paket ada tombol pesan WA

### `/area` — Area Layanan
- Peta visual cakupan area
- Daftar kota + jarak dari Pare
- Destinasi wisata populer sekitar Kediri
- Biaya tambahan antar luar kota

### `/syarat` — Syarat & Ketentuan
- Dokumen yang dibutuhkan
- Aturan penggunaan kendaraan
- Kebijakan pembatalan dan DP
- Denda keterlambatan dan kerusakan

---

## 6. Animation Rules (Framer Motion)

```
Page transition   : fade + slide up (y: 20 -> 0, opacity: 0 -> 1, duration: 0.4s)
Card entrance     : stagger children 0.08s, fade + slide up
Hero text         : slide up per line, stagger 0.15s
Navbar            : fade in on mount, background blur on scroll
CompareBar        : slide up from bottom (AnimatePresence)
Accordion FAQ     : height animate + opacity (useAnimation)
Button hover      : scale 1.03, transition 0.2s ease
Button tap        : scale 0.97
Image hover       : scale 1.05 inside overflow-hidden container
Scroll reveal     : whileInView, once: true, viewport threshold 0.15
Counter stat      : count-up animation on enter viewport
```

**Rules:**
- Semua durasi antara 0.2s–0.5s, tidak ada yang lebih dari 0.6s
- Gunakan `ease: [0.25, 0.46, 0.45, 0.94]` (ease-out cubic) sebagai default
- Hindari layout animation pada list besar (gunakan AnimatePresence dengan `mode="popLayout"` hanya pada CompareBar)
- Animasi tidak boleh memblokir interaksi (selalu `pointer-events: auto` setelah mount)

---

## 7. Data Mobil (20 Kendaraan)

Simpan di `/data/cars.ts`, type `Car` dengan field:

```typescript
interface Car {
  id: string
  slug: string
  name: string
  brand: string
  year: number
  type: 'SUV' | 'MPV' | 'Sedan' | 'City Car' | 'Minibus'
  transmission: 'Manual' | 'Matic'
  fuel: 'Bensin' | 'Diesel' | 'Hybrid'
  capacity: number
  pricePerDay: number
  images: string[]        // Unsplash URLs
  specs: {
    engine: string
    ac: boolean
    luggage: string
    music: boolean
    gps: boolean
    usbCharger: boolean
  }
  description: string
  featured: boolean
  popular: boolean
}
```

**Daftar 20 Mobil:**

| No | Nama | Tipe | Transmisi | Kapasitas | Harga/Hari |
|---|---|---|---|---|---|
| 1 | Toyota Avanza 2022 | MPV | Manual | 7 | Rp 350.000 |
| 2 | Toyota Avanza 2022 | MPV | Matic | 7 | Rp 380.000 |
| 3 | Toyota Innova Reborn | MPV | Manual | 7 | Rp 550.000 |
| 4 | Toyota Innova Reborn | MPV | Matic | 7 | Rp 600.000 |
| 5 | Toyota Rush 2021 | SUV | Matic | 7 | Rp 450.000 |
| 6 | Toyota Fortuner 2020 | SUV | Matic | 7 | Rp 800.000 |
| 7 | Toyota Hiace Premio | Minibus | Manual | 14 | Rp 900.000 |
| 8 | Daihatsu Xenia 2022 | MPV | Manual | 7 | Rp 330.000 |
| 9 | Daihatsu Xenia 2022 | MPV | Matic | 7 | Rp 360.000 |
| 10 | Honda Brio 2021 | City Car | Matic | 5 | Rp 280.000 |
| 11 | Honda Jazz 2020 | City Car | Matic | 5 | Rp 320.000 |
| 12 | Honda CR-V 2021 | SUV | Matic | 5 | Rp 650.000 |
| 13 | Mitsubishi Xpander 2022 | MPV | Matic | 7 | Rp 480.000 |
| 14 | Mitsubishi Pajero Sport | SUV | Matic | 7 | Rp 900.000 |
| 15 | Suzuki Ertiga 2022 | MPV | Manual | 7 | Rp 320.000 |
| 16 | Suzuki Ertiga 2022 | MPV | Matic | 7 | Rp 350.000 |
| 17 | Suzuki XL7 2021 | SUV | Matic | 7 | Rp 420.000 |
| 18 | Nissan Serena 2020 | MPV | Matic | 8 | Rp 550.000 |
| 19 | Toyota Veloz 2022 | MPV | Matic | 7 | Rp 400.000 |
| 20 | Hyundai Stargazer 2022 | MPV | Matic | 7 | Rp 420.000 |

Gambar: Unsplash URL per mobil `?w=800&q=80`, query: `toyota avanza`, `suv car`, `minibus`, `city car`, `mpv car`.

---

## 8. WhatsApp Booking Generator

Format pesan yang di-generate saat submit form:

```
Halo Jayabaya Rent, saya ingin menyewa kendaraan:

Nama     : {nama}
No. HP   : {hp}
Mobil    : {namaMobil}
Mulai    : {tanggalMulai}
Selesai  : {tanggalSelesai}
Durasi   : {durasi} hari
Layanan  : {ambilSendiri | Antar ke: alamat}
Supir    : {Ya | Tidak}
Catatan  : {catatan}

Estimasi : Rp {totalEstimasi}

Mohon konfirmasinya. Terima kasih.
```

Encode dengan `encodeURIComponent` lalu buka:
`https://wa.me/6281216312645?text={encodedMessage}`

---

## 9. Navbar & Footer

**Navbar:**
- Logo kiri: icon mobil + teks "Jayabaya Rent" (merah)
- Links: Home, Catalog, About, FAQ, Contact
- CTA kanan: tombol "Booking" (primary, pill)
- Mobile: hamburger menu, drawer slide dari kanan
- Perilaku scroll: background transparan di hero → blur + border bawah saat scroll > 80px
- Active link: garis bawah merah atau teks merah

**Footer:**
- Kolom 1: Logo + deskripsi singkat + sosmed icon (WA, IG)
- Kolom 2: Navigasi (Home, Catalog, Compare, Promo, Area)
- Kolom 3: Info (About, FAQ, Contact, Syarat & Ketentuan)
- Kolom 4: Kontak (no WA, IG, alamat, jam buka)
- Bottom bar: copyright Jayabaya Rent + tahun

---

## 10. Rules & Code Standards

**Wajib diikuti:**
- Clean code, reusable, atomic design pattern seperti struktur di atas
- Tidak ada emoji di dalam kode (JSX, TS, CSS)
- Setiap komponen punya satu tanggung jawab tunggal
- Tidak ada inline style, semua melalui Tailwind class
- Semua teks UI dalam Bahasa Indonesia
- Semua gambar wajib ada `alt` attribute deskriptif
- Tidak ada `any` type di TypeScript
- File penamaan: PascalCase untuk komponen, camelCase untuk utils/hooks
- Setiap halaman import `PageLayout` yang sudah wraps Navbar + Footer
- Data mobil tidak di-hardcode langsung di komponen, selalu import dari `/data/cars.ts`
- Tombol WA selalu gunakan fungsi `generateWhatsAppURL()` dari `/lib/whatsapp.ts`
- Gunakan `next/image` untuk semua gambar, tidak pernah `<img>` biasa
- Semua animasi Framer Motion menggunakan nilai dari `/lib/animations.ts` (konstanta terpusat)
- Filter dan search di katalog menggunakan URL params (`?type=SUV&q=avanza`) agar shareable
- Referensi UI per halaman ada di folder `/references/` — gunakan sebagai panduan isi dan layout, bukan copy exact, tetap konsisten dengan design system Jayabaya Rent

**Folder Structure:** `app/` (semua route), `components/` (atoms/molecules/organisms/layout), `data/cars.ts`, `lib/` (animations.ts, whatsapp.ts, utils.ts), `public/images/`, `references/` (referensi UI per halaman — panduan isi dan layout, bukan copy exact, tetap konsisten dengan design system Jayabaya Rent).
