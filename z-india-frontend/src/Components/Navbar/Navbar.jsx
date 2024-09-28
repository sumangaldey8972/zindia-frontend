import { Box, IconButton, Stack, Typography } from "@mui/joy";
import React from 'react';
import "../../index.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

const theme = createTheme({
    typography: {
        h4: {
            position: 'relative',
            display: 'inline-block',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            fontFamily: 'Noto Sans',
            '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: -2,
                height: 2,
                width: '0%',
                backgroundColor: 'currentColor',
                transition: 'width 0.3s ease-in-out',
            },
            '&:hover::after': {
                width: '100%',
            },
        },
    },
});

const Navbar = () => {

    let navItem = ['Home', 'About Us', 'Services', 'Works', 'Testimonials']

    return (
        <React.Fragment>
            <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{
                backgroundColor: 'white',
                padding: '1rem 1.5rem',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 9,
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid lightgrey',
                // display: { xs: 'none', sm: 'none', md: 'flex' }
                display: 'flex'
            }} >
                <Box>
                    <Typography level='h1' sx={{
                        color: '#00215b'
                    }} >Z-INDIA</Typography>
                </Box>

                <Stack direction="row" spacing={3} sx={{
                    '& .MuiTypography-root': {
                        color: '#00215b',
                    }
                }}>
                    {/* {
                        navItem.map((el) => (
                            <Typography level='h4' key={el} sx={{
                                cursor: 'pointer'
                            }} >{el}</Typography>
                        ))
                    } */}

                    <ThemeProvider theme={theme}>
                        {navItem.map((el, index) => (
                            <Typography level="h4" key={index}>
                                {el}
                            </Typography>
                        ))}
                    </ThemeProvider>

                </Stack>
            </Stack>
        </React.Fragment>
    )
}

export default Navbar;
