import { FC } from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { CardPresentation } from './CardPresentation';

export const GridCategories: FC = () => (
    <>
        <Grid container rowGap={2} columnGap={2}>
            <Grid item
                xs={12}
                md={6.7}
                sx={{
                    alignItems: 'center',
                    backgroundColor: 'primary.main',
                    padding: '2rem 1.5rem',
                    borderRadius: 4,
                    display: 'flex',
                    gap: 2
                }}
            >
                <CardPresentation 
                    title={'Mac Studio M1'} 
                    description={'Productos nuevos'} 
                    category={'Computadoras'} 
                    slug={''} 
                    image={'mac-studio-m1_1.webp'}
                    imageStyle={{xs:'5%', md:'47%'}}
                />

            </Grid>

            <Grid
                item xs={12}
                md={5}
                sx={{
                    alignItems: 'center',
                    backgroundColor: 'rgb(20,122,255)',
                    padding: '2rem 1.5rem',
                    borderRadius: 4,
                    display: 'flex',
                    gap: 2
                }}
            >

                <CardPresentation
                    title={'Headphones Ultra Bass'}
                    description={'La mejor calidad'}
                    category={'Auriculares'}
                    slug={'s'}
                    image='headphones_c_1.webp' 
                    imageStyle={{
                        right: '5%',
                    }}
                />
            </Grid>

        </Grid>


    </>
)
