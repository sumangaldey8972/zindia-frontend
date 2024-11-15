import { Box, Breadcrumbs, Button, CssBaseline, CssVarsProvider, Link, Typography } from '@mui/joy'
import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import BreadCrumbs from '../../Common/BreadCrumbs/BreadCrumbs';
import ProjectTabel from './ProjectTable';

const ControPannelVTwo = () => {

    const navigate = useNavigate()

    return (
        <>
            <CssVarsProvider disableTransitionOnChange >
                <Box
                    component="main"
                    className="MainContent"
                    sx={{
                        px: { xs: 2, md: 6 },
                        pt: {
                            xs: 'calc(12px + var(--Header-height))',
                            sm: 'calc(12px + var(--Header-height))',
                            md: 3,
                        },
                        pb: { xs: 2, sm: 2, md: 3 },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        height: '100dvh',
                        gap: 1,
                    }}
                >
                    <BreadCrumbs />
                    <Box
                        sx={{
                            display: 'flex',
                            mb: 1,
                            gap: 1,
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'start', sm: 'center' },
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography level="h2" component="h1" sx={{
                            color: "#01215c"
                        }}  >
                            Project Control Panel
                        </Typography>
                        <Button
                            color="primary"
                            startDecorator={<AddCircleOutlineIcon />}
                            size="sm"
                            sx={{ backgroundColor: '#f45906' }}
                            onClick={() => navigate("/add-item")}
                        >
                            Add a New Property
                        </Button>
                    </Box>
                    <ProjectTabel />
                </Box>
            </CssVarsProvider>
        </>
    )
}

export default ControPannelVTwo
