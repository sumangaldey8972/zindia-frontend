import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import AboutSection from "../Pages/AboutSection/AboutSection";
import TestimonalsPage from "../Pages/TestimonalsPage/TestimonalsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";

const AllRoutes = () => {
	return (
		<>
			{/* <Navbar /> */}
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/:name" element={<ProjectDetails />} />
				<Route path="/about-us" element={<AboutSection />} />
				<Route path="/testimonals" element={<TestimonalsPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</>
	);
};

export default AllRoutes;
