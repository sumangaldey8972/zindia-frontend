import "../../index.css"
import HomeSection from "../../Components/Home/HomeSection";
import About from "../../Components/About/About";
import { Box, CssBaseline, Typography } from "@mui/joy";
import NavbarV2 from "../../Common/Navbar/Navbar-v2";
import Sidebar from "../../Common/Sidebar/Sidebar";


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
