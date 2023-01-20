export interface IProduct {
    // _id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    title: string;
    category: number;
    // TODO: agregar createdAt y updatedAt
    // createdAt: string;
    // updatedAt: string;
}

interface SeedData {
    products: IProduct[],
}

export const initialData: SeedData = {
    products: [
        {
            description: 'Auriculares deportivos',
            images: [
                'earphones_a_1.webp',
                'earphones_a_2.webp',
                'earphones_a_3.webp',
                'earphones_a_4.webp'
            ],
            inStock: 30,
            price: 20.0,
            slug: 'auriculares_deportivos_axios',
            title: 'Auriculares Deportivos Axios',
            category: 1
        },
        {
            description: 'Auriculares deportivos',
            images: [
                'earphones_b_1.webp',
                'earphones_b_2.webp',
            ],
            inStock: 30,
            price: 30.5,
            slug: 'auriculares_inalambricos_axios',
            title: 'Auriculares Inalambricos Axios',
            category: 1
        },
        {
            description: 'Auriculares deportivos',
            images: [
                'earphones_c_1.webp',
                'earphones_c_2.webp',
            ],
            inStock: 30,
            price: 70.0,
            slug: 'auriculares_inalambricos_deportivos_axios',
            title: 'Auriculares Inalambricos Deportivos Axios',
            category: 1
        },
        {
            description: 'Auriculares Gamer',
            images: [
                'headphones_a_1.webp',
                'headphones_a_2.webp',
            ],
            inStock: 30,
            price: 70.0,
            slug: 'auriculares_gamer_axios',
            title: 'Auriculares Gamer Axios',
            category: 1
        },
        {
            description: 'Auriculares Extra Bass',
            images: [
                'headphones_b_1.webp',
                'headphones_b_2.webp',
            ],
            inStock: 10,
            price: 100.0,
            slug: 'auriculares_extra_bajos_axios',
            title: 'Auriculares Extra Bajos Axios',
            category: 1
        },
        {
            description: 'Auriculares Extra Bass',
            images: [
                'headphones_c_1.webp',
                'headphones_c_2.webp',
            ],
            inStock: 10,
            price: 420.0,
            slug: 'auriculares_extra_bajos_inalambricos',
            title: 'Auriculares Extra Bajos Inalambricos',
            category: 1
        },
        {
            description: 'iPhone 13 Pro llega manteniendo el diseño de su predecesor. Con una pantalla OLED de 6.1 pulgadas con tasa de refresco variable de hasta 120Hz, el iPhone 13 Pro cuenta con el procesador A15 Bionic con opciones de 128GB, 256GB, 512GB, y 1TB. La cámara trasera es cuádruple, con tres lentes de 12MP que funcionan como wide, ultrawide y telefoto, más un sensor LiDAR para información de profundidad, con estabilización óptica de imagen, zoom, 3x y captura de video en formato ProRes. La cámara selfie es ultrawide de 12MP. El iPhone 13 Pro completa sus características con carga rápida por cable e inalámbrica, parlantes stereo, resistencia al polvo y agua, y corre iOS 15.',
            images: [
                'iphone-13-pro_1.webp',
            ],
            inStock: 40,
            price: 6020.0,
            slug: 'iphone_13_pro',
            title: 'IPhone 13 Pro',
            category: 2
        },
        {
            description: 'iPhone 14 Pro debuta este año con una pantalla OLED de 6.1 pulgadas con funcionalidad always-on y un nuevo notch que se integra a las notificaciones llamado Isla Dinámica. El iPhone 14 Pro utiliza el nuevo procesador Apple A16 Bionic con almacenamiento de hasta 1TB y cuenta con una cámara triple posterior con sensor principal de 48MP estabilizado, junto con una cámara ultrawide de 12MP y un sensor telefoto de 12MP con zoom óptico 3x. Las características del iPhone 14 Pro se completan con unos parlantes stereo, carga inalámbrica, resistencia al polvo y agua, sistema de mensajería de emergencia por satélite y corre el nuevo iOS 16.',
            images: [
                'iphone-14-pro_1.webp',
                'iphone-14-pro_2.webp',
            ],
            inStock: 40,
            price: 6020.0,
            slug: 'iphone_14_pro',
            title: 'IPhone 14 Pro',
            category: 2
        },
        {
            description: 'Con tamaño de pantalla: la pantalla HD de 1,75 pulgadas con un dial cuadrado presenta una experiencia táctil capacitiva completa para que pueda tomar el control sin esfuerzo. Procesador: con su procesador apollo 3 blue plus preciso y de gama alta, las transiciones y la interfaz de usuario serán más suaves y mejores que cualquier cosa que haya experimentado. Carga ASAP: ¡el reloj de carga rápida te permite tomar el control total de tu tiempo! Diseño y carátulas del reloj: el diseño delgado de metal de primera calidad y las múltiples carátulas del reloj con opciones personalizables ayudan a combinar su OOTD todos los días.',
            images: [
                'watch_1.webp',
                'watch_2.webp',
            ],
            inStock: 15,
            price: 320.0,
            slug: 'reloj_inteligente_procesador_apollo_3_Plus',
            title:'Reloj Inteligente Procesador Apollo 3 Plus',
            category: 2
        },
        {
            description: 'El nuevo Apple MacBook Air te da una gran potencia de uso gracias a su nuevo chipset M2 de diez núcleos, desarrollado con tecnología mejorada de 5 nanómetros, capaz de admitir hasta 24 GB de memoria unificada. Es un 18% más rápida que el chip anterior. Además, posee una capacidad de memoria de 8 GB de RAM y con una capacidad de 256GB.',
            images: [
                'macbook-air-m2_1.webp',
                'macbook-air-m2_2.webp',
            ],
            inStock: 10,
            price: 6000.0,
            slug: 'macbook_air_m2',
            title: 'Macbook Air M2',
            category: 3
        },
        {
            description: 'El Mac Studio es el primer ordenador de Apple en estrenar el chip M1 Ultra, que supera en rendimiento al M1 Max. Cuenta con 20 núcleos de CPU y con 64 núcleos de GPU, y en Cupertino aseguran que supera con creces las capacidades del Mac Pro más potente.',
            images: [
                'mac-studio-m1_1.webp',
                'mac-studio-m1_2.webp',
            ],
            inStock: 10,
            price: 12000.0,
            slug: 'mac_studio_m1_m2',
            title: 'Mac Studio M1',
            category: 3
        },
        {
            description: '¡Sumérgete en la realidad virtual! Con Oculus Quest 2, unas gafas de realidad virtual versátiles podrás jugar, entrenar, ver tus contenidos favoritos y disfrutar de muchas más actividades con tus amigos o familiares. Si quieres conocer más detalles de estos lentes, en esta nota del Experto Hiraoka te contamos cómo sacarle el máximo provecho al Oculus Quest 2 y obtener una experiencia de realidad virtual increíble.',
            images: [
                'oculus-quest-2_1.webp',
                'oculus-quest-2_2.webp',
            ],
            inStock: 10,
            price: 9000.0,
            slug: 'oculus_quest_2',
            title: 'Oculus Quest 2',
            category: 4
        },
        {
            description: 'El sistema PS4 se basa en un potente procesador diseñado especialmente para él, con ocho núcleos y un procesador gráfico de gama alta que permite 1,84 TFLOPS con 8 GB de memoria GDDR5 ultrarrápida.',
            images: [
                'playstation-4_1.webp',
                'playstation-4_2.webp',
            ],
            inStock: 10,
            price: 2500.0,
            slug: 'playStation_4_slim',
            title:'PlayStation 4 Slim',
            category: 4
        },
        {
            description: 'La PlayStation 5 es una consola de última generación, con un rendimiento potente y diseñada para brindar la mejor experiencia gamer.',
            images: [
                'playstation-5_1.webp',
                'playstation-5_2.webp',
            ],
            inStock: 10,
            price: 5000.0,
            slug: 'playstation_5',
            title:'PlayStation 5',
            category: 4
        },
    ]
}