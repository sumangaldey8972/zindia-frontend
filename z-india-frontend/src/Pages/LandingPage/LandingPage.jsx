import Navbar from "../../Components/Navbar/Navbar";
import "../../index.css"
import HomeSection from "../../Components/Home/HomeSection";
import About from "../../Components/About/About";
import { Box, CssBaseline, Typography } from "@mui/joy";
import NavbarV2 from "../../Components/Navbar/Navbar-v2";
import Sidebar from "../../Components/Sidebar/Sidebar";


const LandingPage = () => {
    return (
        <>
            {/* <Navbar /> */}
            <CssBaseline />
            <NavbarV2 />
            <Sidebar />
            <HomeSection />
            <About />
        </>
    )
}

export default LandingPage;
