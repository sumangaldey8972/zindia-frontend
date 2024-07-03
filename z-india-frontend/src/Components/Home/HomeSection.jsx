import React from "react";
import { Box, Button, Stack, Typography } from "@mui/joy";
import { keyframes } from "@emotion/react";
import LandingPageImage from "../../Assets/zindia_landing_page_image.jpg";
import "../../index.css";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const HomeSection = () => {

    let homeArr = [
        { image: "https://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/03/engineer.svg", heading: "General Contract", subheading: "Comprehensive Construction Solutions for Your Every Building Need." },
        { image: "https://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/03/ruler.svg", heading: "Project Planning", subheading: "Detailed Roadmaps for Efficient and Effective Project Execution." },
        { image: "https://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/03/measuring-tool.svg", heading: "Refurbishment", subheading: "Enhancing Aesthetics and Functionality with Quality Refurbishment." }
    ]

    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <img
                    src={LandingPageImage}
                    style={{ width: '100%', display: 'block' }}
                    alt="Landing Page"
                />
                <Box sx={{
                    position: 'absolute',
                    top: '15rem',
                    left: '3rem',
                    animation: `${fadeIn} 2s ease-out`,
                }} >
                    <Typography
                        level="h1"
                        sx={{
                            fontSize: 'clamp(3rem, 5vw, 3rem)',
                            color: 'white',
                            fontWeight: '600',
                        }}
                    >
                        Welcome to Z-india : Building Excellence
                    </Typography>
                    <Typography
                        level="h4"
                        sx={{
                            color: 'white',
                            fontWeight: '500',
                            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)'
                        }}
                    >
                        Delivering exceptional quality and innovation in every construction project we undertake.
                    </Typography>
                    <br />
                    <Button sx={{
                        backgroundColor: '#f45905',
                        padding: '1.6rem',
                        fontSize: '1.5rem',
                        borderRadius: '0',
                    }} >
                        Enquire Now
                    </Button>
                </Box>

                <Stack direction="row" sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '40rem',
                    right: '10rem',
                }} >
                    <Box sx={{
                        background: '#00215b',
                        padding: '4rem 2.5rem 4rem',
                    }} >
                        <Typography level="h1" sx={{
                            color: 'white',
                            fontSize: '4.5rem',
                        }} >
                            59
                        </Typography>
                        <Typography sx={{
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: '500',
                        }} >
                            Completed Projects
                        </Typography>
                    </Box>
                    <Box sx={{
                        background: '#f45905',
                        padding: '4rem 2.5rem 4rem',
                    }} >
                        <Typography level="h1" sx={{
                            color: 'white',
                            fontSize: '4.5rem',
                        }} >
                            25+
                        </Typography>
                        <Typography sx={{
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: '500',
                        }} >
                            Years of Experience
                        </Typography>
                    </Box>
                    <Box sx={{
                        borderTop: '8px solid #00215b',
                        paddingTop: '3rem',
                        paddingLeft: '2.5rem',
                        paddingBottom: '5rem',
                        paddingRight: '2.5rem',
                        width: '40%',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        background: 'white'
                    }} >
                        <Box sx={{
                            marginBottom: '2rem'
                        }} >
                            <Typography level="h3" sx={{
                                fontSize: 'clamp(2rem, 2vw, 1.2rem)',
                                maxWidth: '300px',
                                fontWeight: '700',
                                color: '#00215b'
                            }} >
                                We Construct and Manage Places and Infrastructures
                            </Typography>
                        </Box>

                        <Stack direction="column" spacing={4} >
                            {
                                homeArr?.map((el) => (
                                    <Stack key={el.heading} direction="row" spacing={2} >
                                        <Box>
                                            <img src={el.image} alt="" />
                                        </Box>
                                        <Box>
                                            <Typography level="title-lg" sx={{
                                                color: '#00215b',
                                                fontWeight: '600'
                                            }} >{el.heading}</Typography>
                                            <Typography level="body-sm" >{el.subheading}</Typography>
                                        </Box>
                                    </Stack>
                                ))
                            }
                        </Stack>
                    </Box>
                </Stack>
            </Box>

        </>
    );
}

export default HomeSection;
