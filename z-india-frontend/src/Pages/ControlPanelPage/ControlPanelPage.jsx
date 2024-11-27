import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import ControlPanel from "../../Components/ControlPanel/ControlPanel";
import axios from "axios";
import { base_url } from "../../apiConfig/api";
import ControPannelVTwo from "../../Components/ControlPanel/ControPannelVTwo";

const ControlPanelPage = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			// Make an API call to destroy the session
			// const response = await axios.delete(`${base_url}/session`); // Update with your API endpoint
			// if (response.status === 200) {
			// 	// Successfully logged out, navigate to login page
			// 	navigate("/login");
			// }
			localStorage.removeItem("user");
			console.log("User logged out successfully!");
			navigate("/login");
		} catch (error) {
			console.error("Logout failed", error);
			// Handle error (e.g., show an alert or message)
		}
	};

	return (
		<>
			<Box
				sx={{
					padding: 1,
					background: "#00215b",
					color: "white",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography variant="h6">Control Panel</Typography>
				<Button variant="outlined" color="warning" onClick={handleLogout}>
					LOGOUT
				</Button>
			</Box>
			{/* <ControlPanel /> */}
			<ControPannelVTwo />
		</>
	);
};

export default ControlPanelPage;
