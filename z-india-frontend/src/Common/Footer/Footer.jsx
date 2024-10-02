import { Box, Stack, Typography } from "@mui/joy"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from "react-router-dom"

const Footer = () => {

    return (
        <>
            <Stack sx={{
                flexDirection: { sm: 'column', md: 'row' },
            }} >
                <Box sx={{
                    paddingTop: '3rem',
                    width: { sm: '100%', md: '40%' },
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    paddingBottom: '3rem',
                    backgroundColor: '#f45905',
                    paddingRight: '.6rem'
                }} >
                    <Box sx={{
                        padding: '1rem'
                    }} >
                        <Typography level='h1' sx={{
                            color: 'white'
                        }} >
                            Z-INDIA Realty
                        </Typography>

                        <Box>
                            <Typography level="title-sm" sx={{ color: 'white' }} startDecorator={<MapIcon />} >
                                P-66, C.I.T Road, Scheme - XII , Kakurgachi, Kolkata - 700054
                            </Typography>

                            <Typography level="title-sm" sx={{ color: 'white' }}>
                                West Bengal, India
                            </Typography>

                            <Typography level="title-sm" sx={{ color: 'white' }} startDecorator={<EmailIcon />} >
                                manokafabrics@gmail.com
                            </Typography>

                            <Typography level="title-sm" sx={{ color: 'white' }} startDecorator={<LocalPhoneIcon />} >
                                +91 9830643809
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    width: { sm: '100%', md: '60%' },
                    // height: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px',
                    backgroundColor: '#00215b',
                    justifyContent: 'space-between'
                }} >
                    <Box sx={{
                        padding: '.4rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }} >
                        <Typography
                            level="title-lg"
                            sx={{ color: 'white', borderBottom: '2px solid white' }}  >Quick Links</Typography>
                        <Typography
                            level="title-md"
                            sx={{ color: 'white', fontWeight: '400', }}
                            endDecorator={<ArrowOutwardIcon />}
                            component={Link}
                            to={`/${'susmita_appartment_laketown'}`} >Susmita Apartment</Typography>
                        <Typography
                            level="title-md"
                            sx={{ color: 'white', fontWeight: '400' }}
                            endDecorator={<ArrowOutwardIcon />}
                            component={Link}
                            to={`/${'menoka_appartment_laketown'}`} >Menoka Apartment</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        padding: '10px',
                    }} >
                        <Typography level="title-sm" sx={{ color: 'white' }} >
                            2024 Design. All rights reserved
                        </Typography>
                    </Box>
                </Box>
            </Stack>
            <Box sx={{
                textAlign: 'center'
            }} >
                <Typography level="body-sm" fontWeight="600" >Made With ❤️ | Cyrus Web Services.</Typography>
            </Box>
        </>
    )
}

export default Footer