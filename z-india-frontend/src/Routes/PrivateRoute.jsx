// import { Navigate, useLocation } from "react-router-dom";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { base_url } from "../apiConfig/api";

// const PrivateRoute = ({ children }) => {
// 	const location = useLocation();
// 	const [checkSession, setCheckSession] = useState(null); // null indicates loading state

// 	const getCheckSession = async () => {
// 		try {
// 			const response = await axios.get(`${base_url}/session`, {
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				withCredentials: true,
// 			});
// 			setCheckSession(response.data.status); // Set true/false based on API response
// 			console.log("Session Check Response:", response);
// 		} catch (err) {
// 			console.log("Session Check Error:", err);
// 			setCheckSession(false); // Set to false if there's an error
// 		}
// 	};

// 	useEffect(() => {
// 		getCheckSession();
// 	}, []); // Run only once on component mount

// 	// Show loading state or redirect based on session check
// 	if (checkSession === null) return <div>Loading...</div>; // Add a loading message or spinner here

// 	return checkSession ? (
// 		children
// 	) : (
// 		<Navigate to="/login" state={{ from: location }} replace />
// 	);
// };

// export default PrivateRoute;

import { Navigate, useLocation } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ children }) => {
	const location = useLocation();

	const isAuthenticated = () => {
		const user = localStorage.getItem("user");
		return user !== null; // User is authenticated if data is present
	};

	return isAuthenticated() ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default PrivateRoute;
