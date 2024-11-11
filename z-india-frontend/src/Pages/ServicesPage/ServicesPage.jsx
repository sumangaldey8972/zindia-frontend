import Services from "../../Components/Services/Services";
import Footer from "../../Common/Footer/Footer";
import React from "react";
import NavbarV2 from "../../Common/Navbar/Navbar-v2";
import Sidebar from "../../Common/Sidebar/Sidebar";
const ServicesPage = () => {
	return (
		<>
			<NavbarV2 />
			<Sidebar />
			<Services />
			<Footer />
		</>
	);
};
export default ServicesPage;
