import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import AboutSection from "../Pages/AboutSection/AboutSection";
import TestimonalsPage from "../Pages/TestimonalsPage/TestimonalsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import AddItem from "../Components/AddItem/AddItem";
import PrivateRoute from "./PrivateRoute"; // Your PrivateRoute component
import ControlPanelPage from "../Pages/ControlPanelPage/ControlPanelPage";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";

const AllRoutes = () => {
	return (
		<>
			{/* <Navbar /> */}
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/:name" element={<ProjectDetails />} />
				<Route path="/about-us" element={<AboutSection />} />
				<Route path="/testimonals" element={<TestimonalsPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/add-item"
					element={
						<PrivateRoute>
							<AddItem />
						</PrivateRoute>
					}
				/>
				<Route
					path="/control-panel"
					element={
						<PrivateRoute>
							<ControlPanelPage />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	);
};

export default AllRoutes;
