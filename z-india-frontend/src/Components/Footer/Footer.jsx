import { Box, Stack, Typography } from "@mui/joy"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';

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
                    // height: '100px', // set an explicit height to ensure the flexbox behavior works as expected
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    padding: '10px',
                    backgroundColor: '#00215b'
                }} >
                    <Typography level="title-sm" sx={{ color: 'white' }} >
                        2024 Design. All rights reserved
                    </Typography>
                </Box>
            </Stack>
        </>
    )
}

export default Footer