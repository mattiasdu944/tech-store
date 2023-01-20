import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },

    palette: {
        mode: 'light',

        primary: {
            main: 'rgb(245,45,55)'
        },
        secondary: {
            main: 'rgb(220, 220, 220)'
        },

        info: {
            main: '#fff'
        },
        
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    top: 0,
                    position: 'sticky',
                },
            }
        },

        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    position: 'sticky',
                    top: '0px',
                },
            }
        },

        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 30,
                    fontWeight: 700
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 500
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600
                },
                root:{
                    color: 'rgba(0,0,0)',
                    lineHeight: 1.2
                }
            }
        },


        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'medium',
                disableElevation: true,
                color: 'info'
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '2rem',
                    backgroundColor: 'rgb(245,45,55)',
                    color: '#fefefe',
                    padding:'.75rem 1.5rem',
                    ":hover": {
                        backgroundColor: 'rgb(221,41,50)',
                        transition: 'all 0.3s ease-in-out'
                    }
                }
            }
        },


        MuiCard: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
                    borderRadius: '10px',
                }
            }
        }

    }
});