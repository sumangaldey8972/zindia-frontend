import { CssBaseline } from "@mui/joy";
import NavbarV2 from "../../Common/Navbar/Navbar-v2";
import Sidebar from "../../Common/Sidebar/Sidebar";
import AboutHeadingSection from "../../Components/About/AboutHeadingSection";
import AboutMidSection from "../../Components/About/AboutMidSection";
import AboutLowerMidSection from "../../Components/About/AboutLowerMidSection";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Common/Footer/Footer";

const AboutSection = () => {
  return (
    <>
      <CssBaseline />
      <NavbarV2 />
      <Sidebar />

      <AboutHeadingSection />

      <AboutMidSection />

      <AboutLowerMidSection />

      <ContactUs />

      <Footer />
    </>
  );
};

export default AboutSection;
