import { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '@/components/ui';


interface Props{
    title : string;
    description : string;
    children : JSX.Element;
}

export const ShopLayout:FC<Props> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <title>{title}</title>
            </Head>

            <Navbar/>

            <main>
                { children }
            </main>
        
        </>
    )
}
