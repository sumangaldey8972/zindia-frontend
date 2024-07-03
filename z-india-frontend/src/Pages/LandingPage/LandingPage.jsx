import Navbar from "../../Components/Navbar/Navbar";
import "../../index.css"
import HomeSection from "../../Components/Home/HomeSection";
import About from "../../Components/About/About";
import { Box } from "@mui/joy";


const LandingPage = () => {
    return (
        <>
            <Navbar />
            <HomeSection />
            <About />
        </>
    )
}

export default LandingPage;
