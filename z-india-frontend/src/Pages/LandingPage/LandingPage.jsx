import Navbar from "../../Components/Navbar/Navbar";
import "../../index.css"
import HomeSection from "../../Components/Home/HomeSection";
import About from "../../Components/About/About";
import { Box, Typography } from "@mui/joy";


const LandingPage = () => {
    return (
        <>
            <Navbar />
            <HomeSection />
            <About />

            <Box sx={{
                display: { xs: 'block', sm: 'block', md: 'none' }
            }} >
                <Typography level="title-lg" textAlign="center" >
                    Open this link into your laptop or desktop
                </Typography>
            </Box>
        </>
    )
}

export default LandingPage;
