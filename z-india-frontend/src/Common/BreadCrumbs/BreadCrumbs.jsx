import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Box, Breadcrumbs, Link, Typography } from '@mui/joy';

const BreadCrumbs = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Breadcrumbs
                size="sm"
                aria-label="breadcrumbs"
                separator={<ChevronRightRoundedIcon fontSize="sm" />}
                sx={{ pl: 0 }}
            >
                <Link
                    underline="none"
                    color="neutral"
                    href="#some-link"
                    aria-label="Home"
                >
                    <HomeRoundedIcon />
                </Link>
                <Link
                    underline="hover"
                    color="neutral"
                    href="#some-link"
                    sx={{ fontSize: 12, fontWeight: 500 }}
                >
                    Home
                </Link>
                <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
                    Control Panel
                </Typography>
            </Breadcrumbs>
        </Box>
    )
}

export default BreadCrumbs
