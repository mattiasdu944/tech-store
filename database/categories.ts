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
            title       : "Auriculares",
            slug        : "Auriculares",
            description : "Productos de sonido para que puedas reproducir tu musica con la mejor calidad"
        },
        {
            title   : "Smartphones",
            slug    : "smartphones",
            description : "Encuentra celulares de ultima generacion y accesorios con la mejor calidad"
        },
        {
            title : "Computadoras",
            slug  : "computadoras",
            description : "Encuentra computadoras y laptops de ultima generacion para tu trabajo o escuela."
        },
        {
            title   : "Consolas",
            slug    : "consolas",
            description : "Las mejores consolas y los video juagos mas recientes para que disfrutes."
        }
    ]
}
