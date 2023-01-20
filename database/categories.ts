export interface ICategory{
    title : string;
    slug : string;
    description : string;
}

interface SeedData {
    categories: ICategory[],
}


export const initialData : SeedData = {
    categories : [
        {
            title       : "Sonido y Musica",
            slug        : "sonido_y_musica",
            description : "Productos de sonido para que puedas reproducir tu musica con la mejor calidad"
        },
        {
            title   : "Celulares, Tablets y Accesorios",
            slug    : "celulares_tablets_y_accesorios",
            description : "Encuentra celulares de ultima generacion y accesorios con la mejor calidad"
        },
        {
            title : "Computadoras y Laptops",
            slug  : "computadoras_y_laptops",
            description : "Encuentra computadoras y laptops de ultima generacion para tu trabajo o escuela."
        },
        {
            title   : "Consolas y Video Juagos",
            slug    : "consolas_y_video_juagos",
            description : "Las mejores consolas y los video juagos mas recientes para que disfrutes."
        }
    ]
}
