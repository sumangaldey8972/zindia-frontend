import React from "react";
import "./style.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup"; // for validation
import { Box, Button, Grid, Stack, Textarea, Typography } from "@mui/joy";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom";
import Snackbars from "../../Common/ToastMessage/ToastMessage";
import { base_url } from "../../apiConfig/api";

// Define validation schema using Yup
const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: Yup.string()
		.required("Password is required")
		.min(6, "Password must be at least 6 characters"),
});

const Login = () => {
	// API call function
	const [toastMessage, setToastMessage] = React.useState({
		bool: false,
		message: "",
		status: "",
	});
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setToastMessage({
			bool: false,
			message: toastMessage.message,
			status: toastMessage.status,
		});
	};
	const navigate = useNavigate();
	const handleSubmit = async (values, { setSubmitting, setErrors }) => {
		try {
			const response = await axios.post(
				`${base_url}/auth/sign-in`,
				{
					email_address: values.email,
					password: values.password,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			console.log("API Response:", response.data);
			const token = JSON.stringify(response.data.user);
			localStorage.setItem("authToken", token);
			setToastMessage({
				bool: response.data.status,
				message: response.data.message,
				status: "success",
			});
			navigate("/control-panel");
		} catch (error) {
			console.error("API Error:", error);
			setToastMessage({
				bool: true,
				message: error.response.data.message,
				status: "error",
			});

			// Handle error, for example, show an error message
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<Snackbars
				status={toastMessage.status}
				message={toastMessage.message}
				open={toastMessage.bool}
				handleClose={handleClose}
			/>
			<div className="login-container">
				<div className="login-form">
					<h2>ADMIN LOGIN</h2>
					<Formik
						initialValues={{ email: "", password: "" }}
						validationSchema={LoginSchema}
						onSubmit={handleSubmit}
					>
						{({ errors, touched, isSubmitting }) => (
							<Form>
								{/* Email Field */}
								<div>
									<label htmlFor="email">Email</label>
									<Field
										type="email"
										name="email"
										placeholder="Enter your email"
									/>
									{errors.email && touched.email ? (
										<div className="error-message">{errors.email}</div>
									) : null}
								</div>

								{/* Password Field */}
								<div>
									<label htmlFor="password">Password</label>
									<Field
										type="password"
										name="password"
										placeholder="Enter your password"
									/>
									{errors.password && touched.password ? (
										<div className="error-message">{errors.password}</div>
									) : null}
								</div>

								{/* Submit Button */}
								<Button
									type="submit"
									disabled={isSubmitting}
									sx={{
										width: "100%",
										backgroundColor: "#f45905",
										borderRadius: "0.5",
										padding: "1rem 2.5rem 1rem 2.5rem",
										fontSize: "1.2rem",
									}}
								>
									{isSubmitting ? "Loading..." : "Login"}
								</Button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
};

export default Login;
