import * as React from 'react';
import { Box, IconButton, Stack } from '@mui/joy';
import Typography from '@mui/joy/Typography';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { toggleSidebar } from '../../utils/utlis';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material';
import './NavBar.css'; // Import CSS for animation
import { useNavigate } from 'react-router-dom';


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

export default function NavbarV2() {
    const navigate = useNavigate()
    let navItem = ['Home', 'About Us', 'Services', 'Works', 'Testimonials']

    const handleNavigate = () => {
        navigate('/')
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                top: 0,
                px: 1.5,
                py: 1,
                zIndex: 10000,
                backgroundColor: 'background.body',
                borderBottom: '1px solid',
                borderColor: 'divider',
                position: 'sticky',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <IconButton onClick={handleNavigate} size="sm" variant="soft">
                    <MapsHomeWorkIcon />
                </IconButton>
                <Typography sx={{ fontWeight: 'xl', color: '#00215b', fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)' }}>
                    Z-INDIA REALTY
                </Typography>

            </Box>

            <Stack direction="row" className="stack-slide-in" spacing={3} sx={{
                '& .MuiTypography-root': {
                    color: '#00215b',
                    display: { xs: 'none', sm: 'none', md: 'inline-block' }
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

            <IconButton
                onClick={() => toggleSidebar()}
                variant="outlined"
                color="neutral"
                size="sm"
                sx={{
                    display: { sm: 'block', md: 'none' }
                }}
            >
                <MenuIcon />
            </IconButton>
        </Box >
    );
}
