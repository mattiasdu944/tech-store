import { FC } from 'react'
import Link from 'next/link'

import { AppBar, IconButton, List, ListItem, Toolbar, Typography, Box } from '@mui/material'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

export const Navbar:FC = () => {
    return (
        <nav>
            <AppBar>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent:'space-between',
                        alignItems: 'center',  
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent:'space-between',
                            alignItems: 'center',
                            gap:'2rem'
                        }}                     
                    >

                        <Link href='/'>
                            <Typography sx={{ color:'primary.main', fontSize:'1.5rem', fontWeight:500 }}>
                                TechStore
                            </Typography>
                        </Link>

                        <List
                            sx={{
                                display: 'flex',
                                justifyContent:'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <ListItem>
                                <Link href='/'>
                                    <Typography>
                                        Inicio
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href='/shop'>
                                    <Typography>
                                        Tienda
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href='/categories'>
                                    <Typography>
                                        Categorias
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href='/about'>
                                    <Typography>
                                        Nosotros
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href='/contact'>
                                    <Typography>
                                        Contacto
                                    </Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent:'space-between',
                            alignItems: 'center',
                            gap:'.5rem'
                        }}
                    >
                        <Link href='/'>
                            <Typography>
                                Login
                            </Typography>
                        </Link>
                        <IconButton>
                            <SearchOutlined/>
                        </IconButton>

                        <IconButton>
                            <ShoppingCartOutlined/>
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
        </nav>
    )
}
