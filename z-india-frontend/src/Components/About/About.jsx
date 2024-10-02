import { Box, Button, Stack, Typography } from "@mui/joy"

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SpecialProject from "../SpecialProjects/SpecialProjects";
import ContactUs from "../ContactUs/ContactUs";
import { keyframes } from "@emotion/react";
import useIntersectionObserver from "../../Hooks/InterSectionObserver";
import { useEffect } from "react";
import Footer from "../../Common/Footer/Footer";


const fadeInLeft = keyframes`
    0% {
        transform : translateX(-100%);
        opacity: 0;
    }
    100% {
        transform : translateX(0%);
        opacity: 1;
    }
`;


const fadeInRight = keyframes`
    0% {
        transform : translateX(100%);
        opacity: 0;
    }
    100% {
        transform : translateX(0%);
        opacity: 1;
    }
`;


const About = () => {
    const [ref, hasIntersected] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <>
            <Box ref={ref} sx={{
                position: 'absolute',
                top: { xs: '95rem', md: '90rem' },
                width: { sm: '100%', md: 'full' },
                margin: 'auto',
                // display: { xs: 'none', sm: 'none', md: 'block' }
                // border: '1px solid red'
            }}>
                <Stack spacing={3} sx={{
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >
                    <Box sx={{
                        width: { xs: '70%', md: '35%' },
                        margin: 'auto',
                        // animation: hasIntersected ? `${fadeInLeft} .9s ease-out` : 'none'

                    }} >
                        <img src="https://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/02/Images-1-600x712.jpg" alt="" style={{ width: '100%', }} />
                    </Box>
                    <Box sx={{
                        width: { sm: '70%', md: '40%' },
                        animation: hasIntersected ? `${fadeInRight} .9s ease-out` : 'none',
                        padding: '1rem',
                        // border: '1px solid green'
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
                <SpecialProject />
                <ContactUs />
                <Footer />
            </Box>
        </>
    )
}

export default About