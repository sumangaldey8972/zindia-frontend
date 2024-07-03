import { Box, Button, Stack, Typography } from "@mui/joy"

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const About = () => {
    return (
        <>
            <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" sx={{
                position: 'absolute',
                top: '80rem',
                width: 'full'
            }} >
                <Box sx={{
                    width: '35%',
                }} >
                    <img src="https://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/02/Images-1-600x712.jpg" alt="" style={{ width: '100%', }} />
                </Box>
                <Box sx={{
                    width: '40%',
                }}>
                    <Box>
                        <Typography level="body-sm" sx={{
                            color: '#f45905',
                            fontWeight: '700',
                            fontSize: '.9rem',
                            marginBottom: '.9rem'
                        }} textTransform="uppercase" >
                            About Us
                        </Typography>

                        <Typography level="h1" sx={{
                            color: '#16213e',
                            fontWeight: '700',
                            lineHeight: '3.3rem',
                            marginBottom: '.9rem',
                            fontSize: '3rem'
                        }} >
                            With our knowledge <br /> we guarente success
                        </Typography>

                        <Typography level="h5" sx={{
                            color: '#00215b',
                            fontWeight: '900',
                            marginBottom: '.9rem'
                        }} >
                            Professional Construction Management for Successful Outcomes
                        </Typography>

                        <Typography>
                            At <b> Z-india </b>, our extensive construction expertise guarantees
                            project success with top-notch quality and reliability. Our
                            seasoned professionals use innovative techniques and industry
                            best practices to ensure timely, budget-friendly completion.
                            Trust us for comprehensive solutions that transform visions
                            into reality and drive sustainable growth. Experience expert
                            craftsmanship and exceptional service with Z-india
                        </Typography>
                        <br />
                        <Button sx={{
                            backgroundColor: '#f45905',
                            padding: '1rem',
                            fontSize: '1rem',
                            borderRadius: '0',
                        }} endDecorator={<ArrowRightAltIcon />} >
                            Learn more
                        </Button>
                    </Box>

                </Box>
            </Stack>
        </>
    )
}

export default About