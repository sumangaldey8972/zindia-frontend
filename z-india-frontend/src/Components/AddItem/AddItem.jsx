import React, { useState, useEffect } from "react";
import { Field, Form, Formik, FieldArray } from "formik";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../apiConfig/api";
import {
	FaAirbnb,
	FaHome,
	FaHospital,
	FaPlane,
	FaSchool,
	FaShoppingCart,
	FaTrain,
	FaTrash,
} from "react-icons/fa"; // Import icons from react-icons
import { FaTrainSubway } from "react-icons/fa6";
import {
	Box,
	Stack,
	TextField,
	Grid,
	Typography,
	MenuItem,
	// Select,
	// FormControl,
	InputLabel,
	FormHelperText,
} from "@mui/material";
import {
	FormControl,
	FormLabel,
	Input,
	Option,
	Select,
	Button,
} from "@mui/joy";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const PropertySchema = Yup.object().shape({
	project_name: Yup.string().required("Project name is required"),
	sub_heading: Yup.string().required("Sub Heading is required"),
	area: Yup.string().required("Area is required"),
	city: Yup.string().required("City is required"),
	posted_on: Yup.date().required("Posted on is required"),
	status: Yup.string().required("Status is required"),
	// configuration: Yup.string().required("Configuration is required"),
	configuration: Yup.array().of(
		Yup.object().shape({
			bedrooms: Yup.number().required("Number of bedrooms is required"),
			balcony: Yup.number().required("Number of balconies is required"),
			total_size: Yup.number().required("Mention total size")
		})
	),
	places_nearby: Yup.array().of(
		Yup.object().shape({
			icon: Yup.string().required("Icon is required"),
			label: Yup.string().required("Label is required"),
		})
	),
	full_address: Yup.string().required("Full address is required"),
	number_of_floores: Yup.string().required("Number of floores is required"),
	// length: Yup.number().required("Length is required"),
	// width: Yup.number().required("Width is required"),
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
	const [loading, setLoading] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const [imagePreviews, setImagePreviews] = useState([]);
	const [images, setImages] = useState(null);
	const [formData, setFormData] = useState({
		project_name: "",
		sub_heading: "",
		area: "",
		city: "",
		posted_on: "",
		status: "",
		configuration: [],
		places_nearby: [],
		images: [],
		full_address: "",
		number_of_floores: "",
		// length: "",
		// width: "",
		facing: "",
		overlooking: "",
		posess_in: "",
		iframe_url: "",
		places_nearby: [],
		about_propoerty: "",
		// Add other fields as necessary
	});
	const iconOptions = [
		{ label: "School", value: "school", icon: <FaSchool /> },
		{ label: "Shopping", value: "shopping_cart", icon: <FaShoppingCart /> },
		{ label: "Airport", value: "airport", icon: <FaPlane /> },
		{ label: "Hospital", value: "hospital", icon: <FaHospital /> },
		{ label: "Metro", value: "metro", icon: <FaTrainSubway /> },
		{
			label: "Railway Station",
			value: "railway_station",
			icon: <FaTrain />,
		},
		// Add more icons as needed
	];
	const handleImageChange = (event, setFieldValue) => {
		const files = Array.from(event.target.files);
		// console.log(files);
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
				sub_heading: project.sub_heading || "",
				area: project.area || "",
				city: project.city || "",
				posted_on: project.posted_on
					? new Date(project.posted_on).toISOString().split("T")[0]
					: "",
				status: project.status || "",
				configuration: project.configuration || [],
				images: project.images || [],
				full_address: project.full_address || "",
				number_of_floores: project.number_of_floores || "",
				// length: project.length || "",
				// width: project.width || "",
				facing: project.facing || "",
				overlooking: project.overlooking || "",
				posess_in: project.posess_in
					? new Date(project.posess_in).toISOString().split("T")[0]
					: "",
				iframe_url: project.iframe_url || "",
				places_nearby: project.places_nearby || [],
				about_propoerty: project.about_propoerty || "",
			});
			setImages(project.images);
			const previews = project.images?.map((img) => {
				// Convert binary data to base64 string
				return `data:${img.mimeType};base64,${img.data}`;
			});

			// Set the previews in state
			setImagePreviews(previews);
		}
	}, [location.state]);
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

	const convertToFormData = (
		data,
		formData = new FormData(),
		parentKey = ""
	) => {
		for (const key in data) {
			if (key == "configuration" || key == "places_nearby" || key == "images") {
				continue;
			}
			if (data.hasOwnProperty(key)) {
				const value = data[key];
				const newKey = parentKey ? `${parentKey}[${key}]` : key;

				if (Array.isArray(value)) {
					// Handle arrays
					value.forEach((item, index) => {
						convertToFormData(item, formData, `${newKey}[${index}]`);
					});
				} else if (
					value &&
					typeof value === "object" &&
					!(value instanceof File)
				) {
					// Handle nested objects
					convertToFormData(value, formData, newKey);
				} else {
					// Handle regular fields
					formData.append(newKey, value);
				}
			}
		}
		formData.append("configuration", JSON.stringify(data.configuration));
		formData.append("places_nearby", JSON.stringify(data.places_nearby));
		for (let i = 0; i < data.images.length; i++) {
			formData.append("images", data.images[i]);
		}
		return formData;
	};

	const handleFormValue = async (values, isEdit) => {
		setLoading(true);
		console.log(values);
		const formData = convertToFormData(values);
		for (let [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}

		if (isEdit) {
			try {
				const response = await axios.put(
					`${base_url}/project/edit?project_id=${location.state.project._id}`,
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
						},
						withCredentials: true,
					}
				);
				console.log(response);
				setLoading(false);
				navigate("/control-panel");
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				const response = await axios.post(`${base_url}/project`, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
					withCredentials: true,
				});
				console.log(response);
				setLoading(false);
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
			<Box sx={{ maxWidth: 1000, margin: "auto", padding: 2 }}>
				<center>
					{/* <p>
						{location.state?.project ? "Edit Property" : "Add New Property"}
					</p> */}
					<Typography level="h1" sx={{
						color: "#01215c",
						fontSize: '1.3rem',
						fontWeight: '600'
					}}  >
						{location.state?.project ? "Edit Property" : "Add New Property"}
					</Typography>
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
								<Grid item xs={12} sm={6}>
									<Field
										name="project_name"
										as={Input}
										label="Project Name"
										fullWidth
										error={touched.project_name && Boolean(errors.project_name)}
										placeholder="Enter project name"
									// helperText={touched.project_name && errors.project_name}
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.project_name && errors.project_name}
									</FormHelperText>
								</Grid>
								{/* Sub Heading */}
								<Grid item xs={12} sm={6}>
									<Field
										name="sub_heading"
										as={Input}
										label="Sub Heading"
										fullWidth
										error={touched.sub_heading && Boolean(errors.sub_heading)}
										placeholder="Enter Sub Heading"
									// helperText={touched.sub_heading && errors.sub_heading}
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.sub_heading && errors.sub_heading}
									</FormHelperText>
								</Grid>

								{/* Area */}
								<Grid item xs={12} sm={6}>
									<Field
										name="area"
										as={Input}
										label="Area"
										fullWidth
										error={touched.area && Boolean(errors.area)}
										// helperText={touched.area && errors.area}
										placeholder="Enter Area Name"
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.area && errors.area}
									</FormHelperText>
								</Grid>

								{/* City */}
								<Grid item xs={12} sm={6}>
									<Field
										name="city"
										as={Input}
										label="City"
										fullWidth
										error={touched.city && Boolean(errors.city)}
										placeholder="Enter City"
									// helperText={touched.city && errors.city}
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.city && errors.city}
									</FormHelperText>
								</Grid>

								{/* Status */}
								<Grid item xs={12} sm={6}>
									<Field
										name="status"
										as={Input}
										label="Status"
										fullWidth
										error={touched.status && Boolean(errors.status)}
										helperText={touched.status && errors.status}
										placeholder="Enter Status"
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.status && errors.status}
									</FormHelperText>
								</Grid>

								{/* Full Address */}
								<Grid item xs={12} sm={6}>
									<Field
										name="full_address"
										as={Input}
										placeholder="Enter Full Address"
										label="Full Address"
										fullWidth
										multiline
										rows={2}
										error={touched.full_address && Boolean(errors.full_address)}
										helperText={touched.full_address && errors.full_address}
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.full_address && errors.full_address}
									</FormHelperText>
								</Grid>

								{/* Number of Floors */}
								<Grid item xs={12} sm={6}>
									<Field
										name="number_of_floores"
										as={Input}
										label="Number of Floors"
										placeholder="Enter Number of floores"
										fullWidth
										error={
											touched.number_of_floores &&
											Boolean(errors.number_of_floores)
										}
										helperText={
											touched.number_of_floores && errors.number_of_floores
										}
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.number_of_floores && errors.number_of_floores}
									</FormHelperText>
								</Grid>
								{/* Dimensions */}
								{/* <Grid item xs={12} sm={6}>
									<Field
										name="length"
										as={Input}
										placeholder="Enter Length (in Sqft)"
										label="Length (in Sqft)"
										fullWidth
										error={touched.length && Boolean(errors.length)}
										helperText={touched.length && errors.length}
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.length && errors.length}
									</FormHelperText>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Field
										name="width"
										as={Input}
										label="Width (in Sqft)"
										placeholder="Enter Width in (Sqft)"
										fullWidth
										error={touched.width && Boolean(errors.width)}
										helperText={touched.width && errors.width}
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.width && errors.width}
									</FormHelperText>
								</Grid> */}

								{/* Facing */}
								<Grid item xs={12} sm={6}>
									<Field
										name="facing"
										as={Input}
										label="Facing"
										placeholder="Enter Facing"
										fullWidth
										error={touched.facing && Boolean(errors.facing)}
										helperText={touched.facing && errors.facing}
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.facing && errors.facing}
									</FormHelperText>
								</Grid>

								{/* Overlooking */}
								<Grid item xs={12} sm={6}>
									<Field
										name="overlooking"
										as={Input}
										label="Overlooking"
										placeholder="Enter Overlooking"
										fullWidth
										error={touched.overlooking && Boolean(errors.overlooking)}
										helperText={touched.overlooking && errors.overlooking}
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.overlooking && errors.overlooking}
									</FormHelperText>
								</Grid>

								{/* Iframe URL */}
								<Grid item xs={12} sm={6}>
									<Field
										name="iframe_url"
										as={Input}
										label="Iframe URL"
										placeholder="Enter Iframe Url"
										fullWidth
										error={touched.iframe_url && Boolean(errors.iframe_url)}
										helperText={touched.iframe_url && errors.iframe_url}
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.iframe_url && errors.iframe_url}
									</FormHelperText>
								</Grid>

								{/* Possess In */}
								<Grid item xs={12} sm={6}>
									<Field
										name="posess_in"
										as={Input}
										label="Possess In"
										type="date"
										fullWidth
										InputLabelProps={{ shrink: true }}
										error={touched.posess_in && Boolean(errors.posess_in)}
										helperText={touched.posess_in && errors.posess_in}
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.posess_in && errors.posess_in}
									</FormHelperText>
								</Grid>

								{/* Posted On */}
								<Grid item xs={12} sm={6}>
									<Field
										name="posted_on"
										as={Input}
										label="Posted On"
										type="date"
										fullWidth
										InputLabelProps={{ shrink: true }}
										error={touched.posted_on && Boolean(errors.posted_on)}
									// helperText={touched.posted_on && errors.posted_on}
									/>
									<FormHelperText style={{ color: "red" }}>
										{touched.posted_on && errors.posted_on}
									</FormHelperText>
								</Grid>

								{/* About Property */}
								<Grid item xs={12} sm={6}>
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
								<Grid item xs={12} sm={6}>
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

								{/* Configuration */}
								<Grid item xs={12} sm={6}>
									<Box
										sx={{
											width: "100%",
										}}
									>
										<Typography>Configurations</Typography>
										<FieldArray
											name="configuration"
											render={(arrayHelpers) => (
												<>
													{values.configuration &&
														values.configuration.length > 0 ? (
														values.configuration.map((config, index) => (
															<Grid container spacing={2} key={index} sx={{ alignItems: 'center' }}>
																<Grid item xs={3}>
																	<Field
																		type="number"
																		name={`configuration[${index}].bedrooms`}
																		as={Input}
																		label="Bedrooms"
																		placeholder="Bedrooms"
																		value={
																			config?.bedrooms === undefined
																				? ""
																				: config?.bedrooms
																		} // Set empty string if undefined
																		fullWidth
																		error={
																			touched.configuration?.[index]
																				?.bedrooms &&
																			Boolean(
																				errors.configuration?.[index]?.bedrooms
																			)
																		}
																		helperText={
																			touched.configuration?.[index]
																				?.bedrooms &&
																			errors.configuration?.[index]?.bedrooms
																		}
																	/>
																	<FormHelperText style={{ color: "red" }}>
																		{touched.configuration?.[index]?.bedrooms &&
																			errors.configuration?.[index]?.bedrooms}
																	</FormHelperText>
																</Grid>
																<Grid item xs={3}>
																	<Field
																		type="number"
																		name={`configuration[${index}].balcony`}
																		as={Input}
																		label="Balcony"
																		placeholder="Balcony"
																		fullWidth
																		value={
																			config?.balcony === undefined
																				? ""
																				: config?.balcony
																		} // Set empty string if undefined
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
																	<FormHelperText style={{ color: "red" }}>
																		{touched.configuration?.[index]?.balcony &&
																			errors.configuration?.[index]?.balcony}
																	</FormHelperText>
																</Grid>
																<Grid item xs={4}>
																	<Field
																		type="number"
																		name={`configuration[${index}].total_size`}
																		as={Input}
																		label="Total Size"
																		placeholder="Enter total size"
																		fullWidth
																		value={
																			config?.total_size === undefined
																				? ""
																				: config?.total_size
																		} // Set empty string if undefined
																		error={
																			touched.configuration?.[index]?.total_size &&
																			Boolean(
																				errors.configuration?.[index]?.total_size
																			)
																		}
																		helperText={
																			touched.configuration?.[index]?.total_size &&
																			errors.configuration?.[index]?.total_size
																		}
																	/>
																	<FormHelperText style={{ color: "red" }}>
																		{touched.configuration?.[index]?.total_size &&
																			errors.configuration?.[index]?.total_size}
																	</FormHelperText>
																</Grid>

																{/* Button to remove the configuration */}
																<Grid item xs={2}>
																	<Button
																		size="sm"
																		color="danger"
																		onClick={() => arrayHelpers.remove(index)}
																	>
																		<DeleteIcon />
																	</Button>
																</Grid>
															</Grid>
														))
													) : (
														<Typography>
															No configurations added yet.
														</Typography>
													)}

													{/* Button to add new configuration */}
													<Grid item xs={12}>
														<Button
															variant="outlined"
															color="primary"
															onClick={() =>
																arrayHelpers.push({
																	bedrooms: 0,
																	balcony: 0,
																})
															}
															startDecorator={<AddCircleOutlineIcon />}
														>
															Add More Configuration
														</Button>
													</Grid>
												</>
											)}
										/>
									</Box>
								</Grid>
								{/* Places Nearby */}
								<Grid item xs={12} sm={6}>
									<Box
										sx={{
											width: "100%",
										}}
									>
										<Typography>Places Nearby</Typography>
										<FieldArray
											name="places_nearby"
											render={(arrayHelpers) => (
												<>
													{values.places_nearby &&
														values.places_nearby.length > 0 ? (
														values.places_nearby.map((place, index) => (
															<Grid container spacing={2} key={index}>
																<Grid item xs={5}>
																	{/* Icon Dropdown */}

																	<FormControl
																		fullWidth
																		error={
																			touched.places_nearby?.[index]?.icon &&
																			Boolean(
																				errors.places_nearby?.[index]?.icon
																			)
																		}
																	>
																		<Select
																			placeholder="Select a place"
																			required
																			sx={{ minWidth: 200 }}
																			label="Icon"
																			value={place.icon || ""}
																			onChange={(e, newValue) => {
																				console.log("check icon", newValue);
																				arrayHelpers.replace(index, {
																					...place,
																					icon: newValue,
																				});
																			}}
																		>
																			{iconOptions.map((icon) => (
																				<Option
																					key={icon.value}
																					value={icon.value}
																				>
																					{icon.icon} {icon.label}
																				</Option>
																			))}
																		</Select>
																		<FormHelperText>
																			{touched.places_nearby?.[index]?.icon &&
																				errors.places_nearby?.[index]?.icon}
																		</FormHelperText>
																	</FormControl>

																	{/* <FormControl
																		fullWidth
																		error={
																			touched.places_nearby?.[index]?.icon &&
																			Boolean(errors.places_nearby?.[index]?.icon)
																		}
																	>
																		<InputLabel>Icon</InputLabel>
																		<Select
																			label="Icon"
																			value={place.icon || ""}
																			onChange={(e) =>
																				arrayHelpers.replace(index, {
																					...place,
																					icon: e.target.value,
																				})
																			}
																		>
																			{iconOptions.map((icon) => (
																				<MenuItem
																					key={icon.value}
																					value={icon.value}
																				>
																					<Grid
																						container
																						alignItems="center"
																						spacing={1}
																					>
																						<Grid item>{icon.icon}</Grid>
																						<Grid item>{icon.label}</Grid>
																					</Grid>
																				</MenuItem>
																			))}
																		</Select>
																		<FormHelperText>
																			{touched.places_nearby?.[index]?.icon &&
																				errors.places_nearby?.[index]?.icon}
																		</FormHelperText>
																	</FormControl> */}
																</Grid>
																<Grid item xs={5}>
																	<Field
																		name={`places_nearby[${index}].label`}
																		as={Input}
																		label="Label"
																		placeholder="Enter label"
																		fullWidth
																		error={
																			touched.places_nearby?.[index]?.label &&
																			Boolean(
																				errors.places_nearby?.[index]?.label
																			)
																		}
																		helperText={
																			touched.places_nearby?.[index]?.label &&
																			errors.places_nearby?.[index]?.label
																		}
																	/>
																	<FormHelperText style={{ color: "red" }}>
																		{touched.places_nearby?.[index]?.label &&
																			errors.places_nearby?.[index]?.label}
																	</FormHelperText>
																</Grid>

																{/* Button to remove the place */}
																<Grid item xs={2}>
																	<Button
																		color="danger"
																		onClick={() => arrayHelpers.remove(index)}
																	>
																		<FaTrash />
																	</Button>
																</Grid>
															</Grid>
														))
													) : (
														<Typography>No places added yet.</Typography>
													)}

													{/* Button to add new place */}
													<Grid item xs={12}>
														<Button
															variant="outlined"
															color="primary"
															onClick={() =>
																arrayHelpers.push({
																	icon: "",
																	label: "",
																})
															}
															startDecorator={<AddCircleOutlineIcon />}
														>
															Add More Place
														</Button>
													</Grid>
												</>
											)}
										/>
									</Box>
								</Grid>
							</Grid>

							<Stack direction="row" spacing={2} mt={3}>
								<Button
									type="submit"
									sx={{ backgroundColor: "#01215c" }}
									loading={loading}
								>
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
