/**
 * Car data — 20 vehicles for Jayabaya Rent fleet
 * All components must import car data from this file
 */

export interface Car {
    id: string;
    slug: string;
    name: string;
    brand: string;
    year: number;
    type: "SUV" | "MPV" | "Sedan" | "City Car" | "Minibus";
    transmission: "Manual" | "Matic";
    fuel: "Bensin" | "Diesel" | "Hybrid";
    capacity: number;
    pricePerDay: number;
    images: string[];
    specs: {
        engine: string;
        ac: boolean;
        luggage: string;
        music: boolean;
        gps: boolean;
        usbCharger: boolean;
    };
    description: string;
    featured: boolean;
    popular: boolean;
}

export const cars: Car[] = [
    {
        id: "1",
        slug: "toyota-avanza-2022-manual",
        name: "Toyota Avanza 2022",
        brand: "Toyota",
        year: 2022,
        type: "MPV",
        transmission: "Manual",
        fuel: "Bensin",
        capacity: 7,
        pricePerDay: 350000,
        images: [
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
        ],
        specs: {
            engine: "1.3L Dual VVT-i",
            ac: true,
            luggage: "Sedang",
            music: true,
            gps: false,
            usbCharger: true,
        },
        description:
            "MPV keluarga andalan dengan konsumsi BBM irit. Cocok untuk perjalanan dalam kota dan luar kota dengan kapasitas 7 penumpang.",
        featured: true,
        popular: true,
    },
    {
        id: "2",
        slug: "toyota-avanza-2022-matic",
        name: "Toyota Avanza 2022",
        brand: "Toyota",
        year: 2022,
        type: "MPV",
        transmission: "Matic",
        fuel: "Bensin",
        capacity: 7,
        pricePerDay: 380000,
        images: [
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
        ],
        specs: {
            engine: "1.3L Dual VVT-i CVT",
            ac: true,
            luggage: "Sedang",
            music: true,
            gps: false,
            usbCharger: true,
        },
        description:
            "Versi matic dari Avanza untuk kenyamanan berkendara di segala kondisi jalan. Transmisi otomatis yang halus dan responsif.",
        featured: false,
        popular: true,
    },
    {
        id: "3",
        slug: "toyota-innova-reborn-manual",
        name: "Toyota Innova Reborn",
        brand: "Toyota",
        year: 2021,
        type: "MPV",
        transmission: "Manual",
        fuel: "Diesel",
        capacity: 7,
        pricePerDay: 550000,
        images: [
            "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
            "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
        ],
        specs: {
            engine: "2.4L Diesel",
            ac: true,
            luggage: "Besar",
            music: true,
            gps: true,
            usbCharger: true,
        },
        description:
            "MPV premium dengan mesin diesel bertenaga. Kabin luas dan nyaman untuk perjalanan jarak jauh. Pilihan favorit untuk rombongan keluarga.",
        featured: true,
        popular: true,
    },
    {
        id: "4",
        slug: "toyota-innova-reborn-matic",
        name: "Toyota Innova Reborn",
        brand: "Toyota",
        year: 2021,
        type: "MPV",
        transmission: "Matic",
        fuel: "Diesel",
        capacity: 7,
        pricePerDay: 600000,
        images: [
            "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
            "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
        ],
        specs: {
            engine: "2.4L Diesel AT",
            ac: true,
            luggage: "Besar",
            music: true,
            gps: true,
            usbCharger: true,
        },
        description:
            "Innova Reborn versi otomatis — kombinasi tenaga diesel dan kenyamanan transmisi matic. Ideal untuk wisata dan perjalanan bisnis.",
        featured: false,
        popular: false,
    },
    {
        id: "5",
        slug: "toyota-rush-2021",
        name: "Toyota Rush 2021",
        brand: "Toyota",
        year: 2021,
        type: "SUV",
        transmission: "Matic",
        fuel: "Bensin",
        capacity: 7,
        pricePerDay: 450000,
        images: [
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
            "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
        ],
        specs: {
            engine: "1.5L Dual VVT-i",
            ac: true,
            luggage: "Sedang",
            music: true,
            gps: false,
            usbCharger: true,
        },
        description:
            "SUV tangguh untuk segala medan. Ground clearance tinggi cocok untuk jalanan pedesaan dan wisata alam di sekitar Kediri.",
        featured: false,
        popular: true,
    },
    {
        id: "6",
        slug: "toyota-fortuner-2020",
        name: "Toyota Fortuner 2020",
        brand: "Toyota",
        year: 2020,
        type: "SUV",
        transmission: "Matic",
        fuel: "Diesel",
        capacity: 7,
        pricePerDay: 800000,
        images: [
            "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
            "https://images.unsplash.com/photo-1606611013016-969c19ba27aa?w=800&q=80",
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
            "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80",
        ],
        specs: {
            engine: "2.4L VN Turbo Diesel",
            ac: true,
            luggage: "Besar",
            music: true,
            gps: true,
            usbCharger: true,
        },
        description:
            "SUV premium kelas atas dengan performa mesin diesel turbo. Fitur lengkap, kabin mewah, cocok untuk perjalanan eksekutif dan VIP.",
        featured: true,
        popular: true,
    },
    {
        id: "7",
        slug: "toyota-hiace-premio",
        name: "Toyota Hiace Premio",
        brand: "Toyota",
        year: 2020,
        type: "Minibus",
        transmission: "Manual",
        fuel: "Diesel",
        capacity: 14,
        pricePerDay: 900000,
        images: [
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
            "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
        ],
        specs: {
            engine: "2.8L Diesel",
            ac: true,
            luggage: "Sangat Besar",
            music: true,
            gps: true,
            usbCharger: true,
        },
        description:
            "Minibus premium untuk rombongan besar. Kapasitas 14 penumpang dengan kursi nyaman. Ideal untuk trip wisata, study tour, dan acara keluarga.",
        featured: false,
        popular: false,
    },
    {
        id: "8",
        slug: "daihatsu-xenia-2022-manual",
        name: "Daihatsu Xenia 2022",
        brand: "Daihatsu",
        year: 2022,
        type: "MPV",
        transmission: "Manual",
        fuel: "Bensin",
        capacity: 7,
        pricePerDay: 330000,
        images: [
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&q=80",
            "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&q=80",
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
        ],
        specs: {
            engine: "1.3L DOHC",
            ac: true,
            luggage: "Sedang",
            music: true,
            gps: false,
            usbCharger: false,
        },
        description:
            "MPV ekonomis dengan harga sewa terjangkau. Cocok untuk mahasiswa dan budget traveler yang butuh kendaraan keluarga.",
        featured: false,
        popular: false,
    },
    {
        id: "9",
        slug: "daihatsu-xenia-2022-matic",
        name: "Daihatsu Xenia 2022",
        brand: "Daihatsu",
        year: 2022,
        type: "MPV",
        transmission: "Matic",
        fuel: "Bensin",
        capacity: 7,
        pricePerDay: 360000,
        images: [
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&q=80",
            "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&q=80",
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
        ],
        specs: {
            engine: "1.3L DOHC CVT",
            ac: true,
            luggage: "Sedang",
            music: true,
            gps: false,
            usbCharger: true,
        },
        description:
            "Versi otomatis Xenia — nyaman untuk berkendara di dalam kota. Pilihan hemat dengan fitur yang memadai.",
        featured: false,
        popular: false,
    },
    {
        id: "10",
        slug: "honda-brio-2021",
        name: "Honda Brio 2021",
        brand: "Honda",
        year: 2021,
        type: "City Car",
        transmission: "Matic",
        fuel: "Bensin",
        capacity: 5,
        pricePerDay: 280000,
        images: [
            "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
            "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
            "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
        ],
        specs: {
            engine: "1.2L i-VTEC",
            ac: true,
            luggage: "Kecil",
            music: true,
            gps: false,
            usbCharger: true,
        },
        description:
            "City car lincah dan irit BBM. Sempurna untuk jelajah kota Pare dan Kampung Inggris. Parkir mudah di mana saja.",
        featured: true,
        popular: true,
    },
    {
        id: "11",
        slug: "honda-jazz-2020",
        name: "Honda Jazz 2020",
        brand: "Honda",
        year: 2020,
        type: "City Car",
        transmission: "Matic",
        fuel: "Bensin",
        capacity: 5,
        pricePerDay: 320000,
        images: [
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
            "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80",
            "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
            "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=800&q=80",
        ],
        specs: {
            engine: "1.5L i-VTEC",
            ac: true,
            luggage: "Sedang",
            music: true,
            gps: false,
            usbCharger: true,
        },
        description:
            "Hatchback sporty dengan kabin fleksibel Ultra Seat. Bagasi luas untuk ukuran city car, cocok untuk pasangan muda atau solo traveler.",
        featured: false,
        popular: false,
    },
    {
        id: "12",
        slug: "honda-cr-v-2021",
        name: "Honda CR-V 2021",
        brand: "Honda",
        year: 2021,
        type: "SUV",
        transmission: "Matic",
        fuel: "Bensin",
        capacity: 5,
        pricePerDay: 650000,
        images: [
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
            "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
        ],
        specs: {
            engine: "1.5L VTEC Turbo",
            ac: true,
            luggage: "Besar",
            music: true,
            gps: true,
            usbCharger: true,
        },
        description:
            "SUV Honda premium dengan mesin turbo bertenaga. Fitur keselamatan Honda Sensing lengkap. Nyaman untuk perjalanan keluarga kecil.",
        featured: false,
        popular: false,
    },
    {
        id: "13",
        slug: "mitsubishi-xpander-2022",
        name: "Mitsubishi Xpander 2022",
        brand: "Mitsubishi",
        year: 2022,
        type: "MPV",
        transmission: "Matic",
        fuel: "Bensin",
        capacity: 7,
        pricePerDay: 480000,
        images: [
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
            "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80",
            "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        ],
        specs: {
            engine: "1.5L MIVEC",
            ac: true,
            luggage: "Besar",
            music: true,
            gps: false,
            usbCharger: true,
        },
        description:
            "MPV modern dengan desain crossover. Ground clearance tinggi dan kabin lapang. Favorit keluarga muda Indonesia.",
        featured: false,
        popular: true,
    },
    {
        id: "14",
        slug: "mitsubishi-pajero-sport",
        name: "Mitsubishi Pajero Sport",
        brand: "Mitsubishi",
        year: 2020,
        type: "SUV",
        transmission: "Matic",
        fuel: "Diesel",
        capacity: 7,
        pricePerDay: 900000,
        images: [
            "https://images.unsplash.com/photo-1606611013016-969c19ba27aa?w=800&q=80",
            "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
            "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80",
        ],
        specs: {
            engine: "2.4L DI-D Turbo Diesel",
            ac: true,
            luggage: "Besar",
            music: true,
            gps: true,
            usbCharger: true,
        },
        description:
            "SUV tangguh kelas premium dengan Super Select 4WD. Mesin diesel bertenaga untuk segala medan. Cocok untuk adventure dan perjalanan VIP.",
        featured: true,
        popular: false,
    },
    {
        id: "15",
        slug: "suzuki-ertiga-2022-manual",
        name: "Suzuki Ertiga 2022",
        brand: "Suzuki",
        year: 2022,
        type: "MPV",
        transmission: "Manual",
        fuel: "Bensin",
        capacity: 7,
        pricePerDay: 320000,
        images: [
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
        ],
        specs: {
            engine: "1.5L K15B",
            ac: true,
            luggage: "Sedang",
            music: true,
            gps: false,
            usbCharger: false,
        },
        description:
            "MPV Suzuki yang terkenal irit dan handal. Harga sewa ekonomis untuk budget terbatas tanpa mengorbankan kenyamanan.",
        featured: false,
        popular: false,
    },
    {
        id: "16",
        slug: "suzuki-ertiga-2022-matic",
        name: "Suzuki Ertiga 2022",
        brand: "Suzuki",
        year: 2022,
        type: "MPV",
        transmission: "Matic",
        fuel: "Bensin",
        capacity: 7,
        pricePerDay: 350000,
        images: [
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
        ],
        specs: {
            engine: "1.5L K15B AT",
            ac: true,
            luggage: "Sedang",
            music: true,
            gps: false,
            usbCharger: true,
        },
        description:
            "Ertiga versi otomatis — kombinasi irit dan nyaman. Pilihan cerdas untuk sewa harian dengan transmisi otomatis.",
        featured: false,
        popular: false,
    },
    {
        id: "17",
        slug: "suzuki-xl7-2021",
        name: "Suzuki XL7 2021",
        brand: "Suzuki",
        year: 2021,
        type: "SUV",
        transmission: "Matic",
        fuel: "Bensin",
        capacity: 7,
        pricePerDay: 420000,
        images: [
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
            "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
        ],
        specs: {
            engine: "1.5L K15B",
            ac: true,
            luggage: "Sedang",
            music: true,
            gps: false,
            usbCharger: true,
        },
        description:
            "SUV crossover Suzuki dengan tampilan gagah dan harga bersahabat. Ground clearance tinggi untuk jalanan Jawa Timur.",
        featured: false,
        popular: false,
    },
    {
        id: "18",
        slug: "nissan-serena-2020",
        name: "Nissan Serena 2020",
        brand: "Nissan",
        year: 2020,
        type: "MPV",
        transmission: "Matic",
        fuel: "Bensin",
        capacity: 8,
        pricePerDay: 550000,
        images: [
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
            "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
            "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
        ],
        specs: {
            engine: "2.0L MR20DD",
            ac: true,
            luggage: "Besar",
            music: true,
            gps: true,
            usbCharger: true,
        },
        description:
            "MPV premium Nissan dengan pintu geser otomatis. Kabin super luas untuk 8 penumpang. Pengalaman berkendara layaknya first class.",
        featured: false,
        popular: false,
    },
    {
        id: "19",
        slug: "toyota-veloz-2022",
        name: "Toyota Veloz 2022",
        brand: "Toyota",
        year: 2022,
        type: "MPV",
        transmission: "Matic",
        fuel: "Bensin",
        capacity: 7,
        pricePerDay: 400000,
        images: [
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
        ],
        specs: {
            engine: "1.5L Dual VVT-i CVT",
            ac: true,
            luggage: "Sedang",
            music: true,
            gps: false,
            usbCharger: true,
        },
        description:
            "MPV sporty dari Toyota — versi premium Avanza dengan fitur TSS. Desain modern dan performa tangguh untuk keluarga aktif.",
        featured: false,
        popular: true,
    },
    {
        id: "20",
        slug: "hyundai-stargazer-2022",
        name: "Hyundai Stargazer 2022",
        brand: "Hyundai",
        year: 2022,
        type: "MPV",
        transmission: "Matic",
        fuel: "Bensin",
        capacity: 7,
        pricePerDay: 420000,
        images: [
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
            "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80",
            "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        ],
        specs: {
            engine: "1.5L Smartstream IVT",
            ac: true,
            luggage: "Sedang",
            music: true,
            gps: false,
            usbCharger: true,
        },
        description:
            "MPV futuristik dari Hyundai dengan desain khas Korea. Fitur keselamatan Hyundai SmartSense dan kabin modern yang Instagram-worthy.",
        featured: false,
        popular: false,
    },
];

/**
 * Get featured cars for homepage
 */
export function getFeaturedCars(): Car[] {
    return cars.filter((car) => car.featured);
}

/**
 * Get a car by its slug
 */
export function getCarBySlug(slug: string): Car | undefined {
    return cars.find((car) => car.slug === slug);
}

/**
 * Get related cars by type, excluding the current car
 */
export function getRelatedCars(currentId: string, type: string, limit: number = 3): Car[] {
    return cars
        .filter((car) => car.id !== currentId && car.type === type)
        .slice(0, limit);
}

/**
 * Get all unique car types
 */
export function getCarTypes(): string[] {
    return Array.from(new Set(cars.map((car) => car.type)));
}
