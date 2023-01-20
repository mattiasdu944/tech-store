import { FC } from 'react';

import { Typography, Box, Button } from '@mui/material';

interface Props{
    title: string;
    description: string;
    category: string;
    slug : string;
    image: string;
    imageStyle? : object;
}

export const CardPresentation: FC<Props> = ({ title, description, category, slug, image, imageStyle }) => {
    return (
        <>
            <Box zIndex={2}>
                <Typography color='info.main'>
                    { description }
                </Typography>
                <Typography sx={{
                    color: 'info.main',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '1rem'
                }}>
                    { title }
                </Typography>
                <Typography
                    sx={{
                        color: 'rgba(255, 255, 255, 0.3)',
                        fontSize: {xs:'2rem', sm:'2.5rem', md:'3rem'},
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        mb: 2,

                    }}
                >
                    { category }
                </Typography>
                <Button
                    sx={{
                        backgroundColor: 'info.main',
                        color: 'primary.main',
                        ":hover": {
                            backgroundColor: '#fefefe',
                            transition: 'all 0.3s ease-in-out'
                        }
                    }}
                >
                    Buscar
                </Button>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    width: { xs: '40%', md: '20%' },
                    right: imageStyle,
                }}
            >
                <img src={`/assets/${ image }`} alt="Product" />
            </Box>
        </>
    )
}
