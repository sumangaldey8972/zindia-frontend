import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import AboutSection from "../Pages/AboutSection/AboutSection";

const AllRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:name" element={<ProjectDetails />} />
        <Route path="/about-us" element={<AboutSection />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
