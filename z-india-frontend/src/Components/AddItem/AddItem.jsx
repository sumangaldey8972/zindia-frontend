import React, { useState, useEffect } from "react";
import { Field, Form, Formik, FieldArray } from "formik";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import {
	Box,
	Button,
	Grid,
	TextField,
	Typography,
	Stack,
	unstable_ClassNameGenerator,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../apiConfig/api";

const PropertySchema = Yup.object().shape({
	project_name: Yup.string().required("Project name is required"),
	area: Yup.string().required("Area is required"),
	city: Yup.string().required("City is required"),
	posted_on: Yup.date().required("Posted on is required"),
	status: Yup.string().required("Status is required"),
	// configuration: Yup.string().required("Configuration is required"),
	configuration: Yup.array().of(
		Yup.object().shape({
			bedrooms: Yup.number().required("Number of bedrooms is required"),
			balcony: Yup.number().required("Number of balconies is required"),
		})
	),
	full_address: Yup.string().required("Full address is required"),
	number_of_floores: Yup.string().required("Number of floores is required"),
	facing: Yup.string().required("Facing direction is required"),
	overlooking: Yup.string().required("Overlooking information is required"),
	posess_in: Yup.date().required("Possession date is required"),
	iframe_url: Yup.string()
		.url("Invalid URL format")
		.required("Iframe URL is required"),
	about_propoerty: Yup.string().required("About property is required"),
	images: Yup.array().min(1, "At least one image is required"),
});

const AddItem = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [imagePreviews, setImagePreviews] = useState([]);
	const [formData, setFormData] = useState({
		project_name: "",
		area: "",
		city: "",
		posted_on: "",
		status: "",
		configuration: {
			bedrooms: "", // Adjust as needed
			bathrooms: "", // Adjust as needed
			balcony: "",
		},
		images: [],
		full_address: "",
		number_of_floores: "",
		facing: "",
		overlooking: "",
		posess_in: "",
		iframe_url: "",
		places_nearby: [{ icon: "", label: "" }],
		about_propoerty: "",
		// Add other fields as necessary
	});

	const handleImageChange = (event, setFieldValue) => {
		const files = Array.from(event.target.files);
		const previews = files.map((file) => URL.createObjectURL(file));
		setFieldValue("images", files);
		setImagePreviews(previews);
	};

	useEffect(() => {
		if (location.state?.project) {
			const project = location.state.project;
			console.log(project);
			// Pre-populate the form with project data
			setFormData({
				project_name: project.project_name || "",
				area: project.area || "",
				city: project.city || "",
				posted_on: project.posted_on || "",
				status: project.status || "",
				configuration: project.configuration || [
					{
						bedrooms: "",
						balcony: "",
					},
				],
				images: project.images || [],
				full_address: project.full_address || "",
				number_of_floores: project.number_of_floores || "",
				facing: project.facing || "",
				overlooking: project.overlooking || "",
				posess_in: project.posess_in || "",
				iframe_url: project.iframe_url || "",
				places_nearby: project.places_nearby || [{ icon: "", label: "" }],
				about_propoerty: project.about_propoerty || "",
			});
			setImagePreviews(
				project.images
					? project.images.map((img) => URL.createObjectURL(img))
					: []
			);
		}
	}, [location.state]);
	const handleLogout = async () => {
		try {
			// Make an API call to destroy the session
			const response = await axios.delete(`http://localhost:8080/session`); // Update with your API endpoint
			if (response.status === 200) {
				// Successfully logged out, navigate to login page
				navigate("/login");
			}
		} catch (error) {
			console.error("Logout failed", error);
			// Handle error (e.g., show an alert or message)
		}
	};

	const handleFormValue = async (values, isEdit) => {
		if (isEdit) {
			try {
				const response = await axios.put(
					`${base_url}/project/edit?project_id=${location.state.project._id}`,
					values,
					{
						headers: {
							"Content-Type": "multipart/form-data",
						},
						withCredentials: true,
					}
				);
				console.log(response);
				navigate("/control-panel");
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				const response = await axios.post(`${base_url}/project`, values, {
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				});
				console.log(response);
				navigate("/control-panel");
			} catch (err) {
				console.log(err);
			}
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
			<Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
				<center>
					<p>
						{location.state?.project ? "Edit Property" : "Add New Property"}
					</p>
				</center>
				<Formik
					initialValues={formData}
					validationSchema={PropertySchema}
					enableReinitialize={true} // Add this line
					onSubmit={(values, { setSubmitting }) => {
						console.log("Form Values:", values);
						handleFormValue(values, location.state?.project ? true : false);
						setSubmitting(false);
					}}
				>
					{({ values, setFieldValue, errors, touched, isSubmitting }) => (
						<Form>
							<Grid container spacing={2}>
								{/* Project Name */}
								<Grid item xs={12}>
									<Field
										name="project_name"
										as={TextField}
										label="Project Name"
										fullWidth
										error={touched.project_name && Boolean(errors.project_name)}
										helperText={touched.project_name && errors.project_name}
									/>
								</Grid>

								{/* Area */}
								<Grid item xs={12}>
									<Field
										name="area"
										as={TextField}
										label="Area"
										fullWidth
										error={touched.area && Boolean(errors.area)}
										helperText={touched.area && errors.area}
									/>
								</Grid>

								{/* City */}
								<Grid item xs={12}>
									<Field
										name="city"
										as={TextField}
										label="City"
										fullWidth
										error={touched.city && Boolean(errors.city)}
										helperText={touched.city && errors.city}
									/>
								</Grid>

								{/* Posted On */}
								<Grid item xs={12}>
									<Field
										name="posted_on"
										as={TextField}
										label="Posted On"
										type="date"
										fullWidth
										InputLabelProps={{ shrink: true }}
										error={touched.posted_on && Boolean(errors.posted_on)}
										helperText={touched.posted_on && errors.posted_on}
									/>
								</Grid>

								{/* Status */}
								<Grid item xs={12}>
									<Field
										name="status"
										as={TextField}
										label="Status"
										fullWidth
										error={touched.status && Boolean(errors.status)}
										helperText={touched.status && errors.status}
									/>
								</Grid>

								{/* Configuration */}
								<Box
									sx={{
										marginLeft: 2,
										paddingTop: 2,
										width: "98%",
									}}
								>
									<Typography sx={{ marginBottom: 1 }}>
										Configurations
									</Typography>
									<FieldArray
										name="configuration"
										render={(arrayHelpers) => (
											<>
												{values.configuration &&
												values.configuration.length > 0 ? (
													values.configuration.map((config, index) => (
														<Grid
															container
															spacing={2}
															key={index}
															sx={{ marginTop: 1 }}
														>
															<Grid item xs={4}>
																<Field
																	name={`configuration[${index}].bedrooms`}
																	as={TextField}
																	label="Bedrooms"
																	fullWidth
																	error={
																		touched.configuration?.[index]?.bedrooms &&
																		Boolean(
																			errors.configuration?.[index]?.bedrooms
																		)
																	}
																	helperText={
																		touched.configuration?.[index]?.bedrooms &&
																		errors.configuration?.[index]?.bedrooms
																	}
																/>
															</Grid>
															<Grid item xs={4}>
																<Field
																	name={`configuration[${index}].balcony`}
																	as={TextField}
																	label="Balcony"
																	fullWidth
																	error={
																		touched.configuration?.[index]?.balcony &&
																		Boolean(
																			errors.configuration?.[index]?.balcony
																		)
																	}
																	helperText={
																		touched.configuration?.[index]?.balcony &&
																		errors.configuration?.[index]?.balcony
																	}
																/>
															</Grid>

															{/* Button to remove the configuration */}
															<Grid item xs={4}>
																<Button
																	variant="outlined"
																	color="error"
																	onClick={() => arrayHelpers.remove(index)} // Use arrayHelpers to remove item
																>
																	Delete
																</Button>
															</Grid>
														</Grid>
													))
												) : (
													<Typography>No configurations added yet.</Typography>
												)}

												{/* Button to add new configuration */}
												<Grid item xs={12} mt={2}>
													<Button
														variant="outlined"
														color="primary"
														onClick={() =>
															arrayHelpers.push({
																bedrooms: "",
																bathrooms: "",
																balcony: "",
															})
														}
													>
														Add More Configuration
													</Button>
												</Grid>
											</>
										)}
									/>
								</Box>

								{/* Full Address */}
								<Grid item xs={12}>
									<Field
										name="full_address"
										as={TextField}
										label="Full Address"
										fullWidth
										multiline
										rows={2}
										error={touched.full_address && Boolean(errors.full_address)}
										helperText={touched.full_address && errors.full_address}
									/>
								</Grid>

								{/* Number of Floors */}
								<Grid item xs={12}>
									<Field
										name="number_of_floores"
										as={TextField}
										label="Number of Floors"
										fullWidth
										error={
											touched.number_of_floores &&
											Boolean(errors.number_of_floores)
										}
										helperText={
											touched.number_of_floores && errors.number_of_floores
										}
									/>
								</Grid>

								{/* Facing */}
								<Grid item xs={12}>
									<Field
										name="facing"
										as={TextField}
										label="Facing"
										fullWidth
										error={touched.facing && Boolean(errors.facing)}
										helperText={touched.facing && errors.facing}
									/>
								</Grid>

								{/* Overlooking */}
								<Grid item xs={12}>
									<Field
										name="overlooking"
										as={TextField}
										label="Overlooking"
										fullWidth
										error={touched.overlooking && Boolean(errors.overlooking)}
										helperText={touched.overlooking && errors.overlooking}
									/>
								</Grid>

								{/* Possess In */}
								<Grid item xs={12}>
									<Field
										name="posess_in"
										as={TextField}
										label="Possess In"
										type="date"
										fullWidth
										InputLabelProps={{ shrink: true }}
										error={touched.posess_in && Boolean(errors.posess_in)}
										helperText={touched.posess_in && errors.posess_in}
									/>
								</Grid>

								{/* Iframe URL */}
								<Grid item xs={12}>
									<Field
										name="iframe_url"
										as={TextField}
										label="Iframe URL"
										fullWidth
										error={touched.iframe_url && Boolean(errors.iframe_url)}
										helperText={touched.iframe_url && errors.iframe_url}
									/>
								</Grid>

								{/* About Property */}
								<Grid item xs={12}>
									<Field
										name="about_propoerty"
										as={TextField}
										label="About Property"
										fullWidth
										multiline
										rows={4}
										error={
											touched.about_propoerty && Boolean(errors.about_propoerty)
										}
										helperText={
											touched.about_propoerty && errors.about_propoerty
										}
									/>
								</Grid>

								{/* Images FieldArray */}
								<Grid item xs={12}>
									<Typography variant="h6">Upload Images</Typography>
									<input
										type="file"
										multiple
										accept="image/jpeg, image/png"
										onChange={(event) =>
											handleImageChange(event, setFieldValue)
										}
									/>
									<Grid container spacing={2} mt={1}>
										{imagePreviews.map((preview, index) => (
											<Grid item xs={4} key={index}>
												<img
													src={preview}
													alt={`Preview ${index + 1}`}
													style={{ width: "100%", borderRadius: 4 }}
												/>
											</Grid>
										))}
									</Grid>
									{touched.images && errors.images && (
										<Typography color="error">{errors.images}</Typography>
									)}
								</Grid>
							</Grid>

							<Stack direction="row" spacing={2} mt={3}>
								<Button type="submit" variant="contained" color="primary">
									Submit
								</Button>
								<Button type="reset" variant="outlined">
									Reset
								</Button>
							</Stack>
						</Form>
					)}
				</Formik>
			</Box>
		</>
	);
};

export default AddItem;
