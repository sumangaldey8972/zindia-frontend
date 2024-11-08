import { CssBaseline } from "@mui/joy";
import React from "react";
import NavbarV2 from "../../Common/Navbar/Navbar-v2";
import Sidebar from "../../Common/Sidebar/Sidebar";
import HeadingTestimonialsSection from "../../Components/Testmonials/HeadingTestimonialsSection";
import TestimonialCard from "../../Components/Testmonials/TestimonialCard";
import Footer from "../../Common/Footer/Footer";

const TestimonalsPage = () => {
	return (
		<>
			<CssBaseline />
			<NavbarV2 />
			<Sidebar />

			<HeadingTestimonialsSection />

			<TestimonialCard />
			<Footer />
		</>
	);
};

export default TestimonalsPage;
