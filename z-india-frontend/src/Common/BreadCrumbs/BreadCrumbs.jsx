import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Box, Breadcrumbs, Link, Typography } from '@mui/joy';
import { useNavigate } from "react-router-dom"

const BreadCrumbs = () => {

    const navigate = useNavigate()

    const handleNavigate = (route) => {
        navigate(route)
    }

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
                    onClick={() => handleNavigate('/')}
                    aria-label="Home"
                >
                    <HomeRoundedIcon />
                </Link>
                <Link
                    underline="hover"
                    color="neutral"
                    onClick={() => handleNavigate('/')}
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
