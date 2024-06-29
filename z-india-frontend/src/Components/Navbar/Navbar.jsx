import { Box, Stack, Typography } from "@mui/joy";
import React from 'react';

const Navbar = () => {
    return (
        <React.Fragment>
            <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{
                backgroundColor: 'none',
                padding: '2rem 2rem',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1,
            }} >
                <Box>
                    <Typography level='h1'>ZINDIA</Typography>
                </Box>

                <Stack direction="row" spacing={3}>
                    <Typography level='h6'>Home</Typography>
                    <Typography level='h6'>About Us</Typography>
                    <Typography level='h6'>Services</Typography>
                    <Typography level='h6'>Works</Typography>
                    <Typography level='h6'>Testimonials</Typography>
                </Stack>
            </Stack>
        </React.Fragment>
    )
}

export default Navbar;
