import React, { useState } from "react";
import { Field, Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";
import { Box, Button, Grid, TextField, Typography, Stack } from "@mui/material";

const PropertySchema = Yup.object().shape({
	project_name: Yup.string().required("Project name is required"),
	area: Yup.string().required("Area is required"),
	city: Yup.string().required("City is required"),
	posted_on: Yup.date().required("Posted on is required"),
	status: Yup.string().required("Status is required"),
	configuration: Yup.string().required("Configuration is required"),
	full_address: Yup.string().required("Full address is required"),
	number_of_floores: Yup.number()
		.required("Number of floors is required")
		.min(1, "Must have at least 1 floor"),
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
	const [imagePreviews, setImagePreviews] = useState([]);

	const handleImageChange = (event, setFieldValue) => {
		const files = Array.from(event.target.files);
		const previews = files.map((file) => URL.createObjectURL(file));
		setFieldValue("images", files);
		setImagePreviews(previews);
	};
	return (
		<>
			<Box sx={{ padding: 1, background: "#00215b", color: "white" }}>
				<h3>Control Panel</h3>
			</Box>
			<Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
				<center>
					<p>Add New Property</p>
				</center>
				<Formik
					initialValues={{
						project_name: "",
						area: "",
						city: "",
						posted_on: "",
						status: "",
						configuration: "",
						images: [],
						full_address: "",
						number_of_floores: "",
						facing: "",
						overlooking: "",
						posess_in: "",
						iframe_url: "",
						places_nearby: [{ icon: "", label: "" }],
						about_propoerty: "",
					}}
					validationSchema={PropertySchema}
					onSubmit={(values, { setSubmitting }) => {
						console.log("Form Values:", values);
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
								<Grid item xs={12}>
									<Field
										name="configuration"
										as={TextField}
										label="Configuration"
										fullWidth
										error={
											touched.configuration && Boolean(errors.configuration)
										}
										helperText={touched.configuration && errors.configuration}
									/>
								</Grid>

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
										type="number"
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
