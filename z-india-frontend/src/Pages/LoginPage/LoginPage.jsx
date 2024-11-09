import React from "react";
import { CssBaseline } from "@mui/joy";
import Login from "../../Components/Login/Login";
import NavbarV2 from "../../Common/Navbar/Navbar-v2";
import Sidebar from "../../Common/Sidebar/Sidebar";
import Footer from "../../Common/Footer/Footer";

const LoginPage = () => {
	return (
		<>
			<CssBaseline />
			<NavbarV2 />
			<Sidebar />
			<Login />
			<Footer />
		</>
	);
};
export default LoginPage;
