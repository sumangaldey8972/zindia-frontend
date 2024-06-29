import Navbar from "../../Components/Navbar/Navbar";
import LandingPageImage from "../../Assets/zindia_landing_page_image.jpg";

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <img src={LandingPageImage} style={{ width: '100%', position: 'relative', top: 0, left: 0 }} alt="Landing Page" />
        </>
    )
}

export default LandingPage;
