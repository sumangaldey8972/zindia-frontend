import React from "react";
import { CssBaseline } from "@mui/joy";
import Login from "../../Components/Login/Login";
import NavbarV2 from "../../Common/Navbar/Navbar-v2";
import Sidebar from "../../Common/Sidebar/Sidebar";
import Footer from "../../Common/Footer/Footer";
import LoginVTwo from "../../Components/Login/LoginVTwo";

const LoginPage = () => {
	return (
		<>
			<CssBaseline />
			<NavbarV2 />
			<Sidebar />
			<LoginVTwo />
			{/* <Footer /> */}
		</>
	);
};
export default LoginPage;
