import React from "react";
import "./style.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup"; // for validation
import { Box, Button, Grid, Stack, Textarea, Typography } from "@mui/joy";

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
	return (
		<>
			<div className="login-container">
				<div className="login-form">
					<h2>Login</h2>
					<Formik
						initialValues={{ email: "", password: "" }}
						validationSchema={LoginSchema}
						onSubmit={(values, { setSubmitting }) => {
							console.log("Login details:", values);
							setSubmitting(false);
						}}
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
									sx={{
										width: "100%",
										backgroundColor: "#f45905",
										borderRadius: "0.5",
										padding: "1rem 2.5rem 1rem 2.5rem",
										fontSize: "1.2rem",
									}}
								>
									Send
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
