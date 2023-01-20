import Link from 'next/link';

import { Box, Typography, Button } from '@mui/material';
import { FC } from 'react';

interface Props{
    title: string;
    images: string[];
    slug: string;
    category: string;
}

export const HeroBanner:FC<Props> = ({ title, images, slug, category }) => {

    return (
        <Box
            sx={{
                backgroundColor:'secondary.main',
                padding:'3rem',
                borderRadius:4,
                boxShadow:'0 .5rem .5rem rgba(0,0,0,.1)',
                display: 'flex',
                flexDirection:{ xs: 'column-reverse', md: 'row'},
                alignItems:'center',
                justifyContent:'space-between',
                mb:'2rem'
            }}
        >
            <Box maxWidth='550px'>
                <Typography sx={{ fontWeight:700, fontSize:'1.5rem' }}>{ title }</Typography>
                <Typography sx={{ fontWeight:700, fontSize:{xs:'2rem',sm:'4rem'} }}>{ category.toLocaleUpperCase() }</Typography>
                <Typography sx={{ 
                    color:'info.main', 
                    fontWeight:'800', 
                    fontSize:{ xs:'2.5rem', sm:'5rem', lg:'6rem', xl:'9rem'},
                    textTransform:'uppercase',
                }}>
                    Oferta
                </Typography>

                <Link href='/'>
                    <Button>
                        Comprar producto
                    </Button>
                </Link>
            </Box>

            <Box>
                <img 
                    src={`/assets/${ images[0] }`} 
                    alt='product'
                />
            </Box>

        </Box>

    )
}
