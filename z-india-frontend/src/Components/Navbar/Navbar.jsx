import { Box, Stack, Typography } from "@mui/joy";
import React from 'react';
import "../../index.css"

const Navbar = () => {

    return (
        <React.Fragment>
            <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{
                backgroundColor: 'white',
                padding: '1rem 1.5rem',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1,
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid lightgrey'
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
                    <Typography level='h4'>Home</Typography>
                    <Typography level='h4'>About Us</Typography>
                    <Typography level='h4'>Services</Typography>
                    <Typography level='h4'>Works</Typography>
                    <Typography level='h4'>Testimonials</Typography>
                </Stack>
            </Stack>
        </React.Fragment>
    )
}

export default Navbar;
