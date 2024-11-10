import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ControlPanel from "../../Components/ControlPanel/ControlPanel";
import axios from "axios";
import { base_url } from "../../apiConfig/api";

const ControlPanelPage = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			// Make an API call to destroy the session
			const response = await axios.delete(`${base_url}/session`); // Update with your API endpoint
			if (response.status === 200) {
				// Successfully logged out, navigate to login page
				navigate("/login");
			}
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
				<Button variant="outlined" color="secondary" onClick={handleLogout}>
					Logout
				</Button>
			</Box>
			<ControlPanel />
		</>
	);
};

export default ControlPanelPage;
