import { ShopLayout } from '@/layouts'
import { GridCategories, HeroBanner } from '@/components/home'
import { initialData } from '@/database/products';


const HomePage = () => {

    const { products } = initialData;

    return (
        <ShopLayout 
            title={'Techo Store | Inicio'} 
            description={'Encuentra Computadoras, Laptops, Celulares, Tablets y mas de los mejores accesorios de tecnologia solo en Tech Store al mejor precio.'}
        >
            <HeroBanner
                title={products[0].title}
                images={ products[0].images }
                slug={ products[0].slug }
                category={ 'computadoras' }
            />

            <GridCategories/>

        </ShopLayout>
    )
}

export default HomePage