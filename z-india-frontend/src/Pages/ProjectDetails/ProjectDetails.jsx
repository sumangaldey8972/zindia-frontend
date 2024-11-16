import {
	Box,
	Button,
	Chip,
	CssBaseline,
	CssVarsProvider,
	Divider,
	IconButton,
	Stack,
	StyledEngineProvider,
	Typography,
} from "@mui/joy";
import { styles } from "../../styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import main_photo from "../../Assets/Main_photo.jpeg";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CropIcon from "@mui/icons-material/Crop";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import StairsIcon from "@mui/icons-material/Stairs";
import ExploreIcon from "@mui/icons-material/Explore";
import CakeIcon from "@mui/icons-material/Cake";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import MapIcon from "@mui/icons-material/Map";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import AirlinesIcon from "@mui/icons-material/Airlines";
import { useEffect, useState } from "react";
import ContactUs from "../../Components/ContactUs/ContactUs";
import GoogleMapIntegration from "../../Components/ProjectDetails/GoogleMapIntegration";
import NavbarV2 from "../../Common/Navbar/Navbar-v2";
import Sidebar from "../../Common/Sidebar/Sidebar";
import HeaderSection from "../../Common/HeaderSection/HeaderSection";
import Search from "../../Common/Search/Search";
import Footer from "../../Common/Footer/Footer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";

import outside_photo_1 from "../../Assets/outside_view_1.jpg";
import outside_photo_2 from "../../Assets/outside_view_2.jpg";
import inside_1 from "../../Assets/inside_1.jpg";
import inside_2 from "../../Assets/inside_2.jpg";
import inside_3 from "../../Assets/inside_3.jpg";
import { dateFormat } from "../../utils/dateFormat.utils";
import EnquireModal from "../../Common/Modal/EnquireModal";
import {
	FaHospital,
	FaSchool,
	FaShoppingCart,
	FaSubway,
	FaTrain,
} from "react-icons/fa";

const ProjectDetails = () => {
	// Scroll to top on component mount
	const location = useLocation();
	const { property } = location.state;
	const images = [];
	const [open, setOpen] = useState(false);

	const [flat_name, set_flat_name] = useState("");

	const iconMapping = {
		airport: <AirlinesIcon />,
		metro: <FaSubway />,
		school: <FaSchool />,
		shopping_cart: <FaShoppingCart />,
		hospital: <FaHospital />,
		railway_station: <FaTrain />,
	};

	useEffect(() => {
		set_flat_name(window.location.href.split("/")[3]);
	}, [window.location.href]);

	const [showMore, setShowMore] = useState(false);
	const description = property?.about_propoerty || "No description available.";

	const lines = description.split("\n").filter(Boolean);
	const visibleLines = lines.slice(0, 2).join("\n");

	useEffect(() => {
		document.title = "Susmita Apartmasdfent - Laketown";
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<CssBaseline />
			<NavbarV2 />
			<Sidebar />
			<EnquireModal open={open} setOpen={setOpen} />
			{flat_name == "menoka_appartment_laketown" ? (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						gap: "1rem",
						alignItems: "center",
					}}
				>
					<Typography
						sx={{
							fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
							color: "#00215b",
						}}
					>
						Stay tuned , will be available soon..
					</Typography>
					<Typography
						component={Link}
						to="/"
						sx={{
							fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)",
							color: "#00215b",
						}}
						startDecorator={
							<KeyboardBackspaceIcon
								sx={{
									fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)",
									color: "#00215b",
								}}
							/>
						}
					>
						Go Back
					</Typography>
				</Box>
			) : (
				<Box
					component="main"
					sx={{
						height: "calc(100vh - 55px)",
						margin: "auto",
					}}
				>
					<Stack
						sx={{
							backgroundColor: "background.surface",
							px: { xs: 2, md: 4 },
							py: 2,
							borderBottom: "1px solid",
							borderColor: "divider",
						}}
					>
						<HeaderSection property={property} />
						<Search />
					</Stack>

					<Stack
						sx={{
							padding: "1rem",
							display: "flex",
							alignItems: "flex-end",
							marginTop: "1rem",
						}}
					>
						<Button
							variant="solid"
							color="primary"
							sx={{
								backgroundColor: "#f45905",
								fontSize: "1.5rem",
							}}
							onClick={() => setOpen(true)}
						>
							What are you waiting for ? Contact Now
						</Button>
					</Stack>

					<Container maxWidth="lg" sx={{ padding: 1 }}>
						<Grid container spacing={2} sx={{ height: "100%" }}>
							<Grid item xs={12} sm={6} sx={{ height: "100%" }}>
								<Chip
									startDecorator={<AccessAlarmIcon />}
									sx={{ color: "white", backgroundColor: "purple", mb: 1 }}
								>
									4 people already contacted this week
								</Chip>
								<Box
									sx={{
										bgcolor: "primary.main",
										// color: 'white',
										// padding: 1,
										textAlign: "center",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										height: "50%",
										border: "2px solid #ffd7c1",
										borderRadius: "1rem",
										flexGrow: 1,
										overflow: "hidden",
										position: "relative",
									}}
								>
									{/* <img src={main_photo} alt="" style={{
                    width: '50%',
                    height: 'auto',
                    maxHeight: '100%',
                    // objectFit: 'cover'
                  }} /> */}

									<Carousel
										showArrows={false}
										showStatus={false}
										showThumbs={false}
										stopOnHover={false}
										showIndicators={true}
										autoPlay={true}
										axis="horizontal"
										verticalSwipe="natural"
										interval={4000}
										transitionTime={800}
										swipeScrollTolerance={100}
										swipeable={true}
										emulateTouch={true}
										infiniteLoop={true}
										useKeyboardArrows={true}
										//   width={300}
										dynamicHeight={true}
									>
										{property.images.map((img, index) => (
											<div key={index}>
												<img
													src={`data:${img.mimeType};base64,${img.data}`}
													alt={`Slide ${index + 1}`}
													style={{
														height: "420px",
														width: "100%",
														objectFit: "contain",
														borderRadius: "1rem",
													}}
												/>
											</div>
										))}
									</Carousel>
								</Box>
							</Grid>
							<Grid item xs={12} sm={6} sx={{ height: "100%" }}>
								<Box
									sx={{
										bgcolor: "#ffe9de",
										padding: 2,
										textAlign: "center",
										borderRadius: "1rem",
										textAlign: "center",
										display: "flex",
										flexDirection: "column",
										gap: "3rem",
										height: "100%",
										// border: '1px solid teal',
									}}
								>
									<Stack
										direction="row"
										justifyContent="space-between"
										sx={{
											padding: 1,
										}}
									>
										<Box>
											<Typography
												level="title-md"
												color="neutral"
												fontWeight="400"
												startDecorator={<ImportContactsIcon />}
											>
												Area
											</Typography>
											<Typography level="body-md" fontWeight="600">
												{property.area}
											</Typography>
										</Box>

										<Box
											sx={{
												display: "flex",
												alignItems: "flex-end",
												flexDirection: "column",
											}}
										>
											<Typography
												level="title-md"
												color="neutral"
												fontWeight="400"
												startDecorator={<StairsIcon />}
											>
												Configuration
											</Typography>
											{property.configuration?.map((config) => (
												<Typography
													key={config._id}
													level="body-md"
													fontWeight="600"
												>
													{config.bedrooms} bedroom
													{config.bedrooms > 1 ? "s" : ""}, {config.balcony}{" "}
													balcony{config.balcony > 1 ? "s" : ""}
												</Typography>
											))}
										</Box>
									</Stack>

									<Stack
										direction="row"
										justifyContent="space-between"
										sx={{
											padding: 1,
										}}
									>
										<Box>
											<Typography
												level="title-md"
												color="neutral"
												fontWeight="400"
												startDecorator={<ImportContactsIcon />}
											>
												Address
											</Typography>
											<Typography level="body-md" fontWeight="600">
												{property.full_address}
											</Typography>
										</Box>

										<Box
											sx={{
												display: "flex",
												alignItems: "flex-end",
												flexDirection: "column",
											}}
										>
											<Typography
												level="title-md"
												color="neutral"
												fontWeight="400"
												startDecorator={<StairsIcon />}
											>
												Floors
											</Typography>
											<Typography level="body-md" fontWeight="600">
												{property.number_of_floores}
											</Typography>
										</Box>
									</Stack>

									<Stack
										direction="row"
										justifyContent="space-between"
										sx={{
											padding: 1,
										}}
									>
										<Box>
											<Typography
												level="title-md"
												color="neutral"
												fontWeight="400"
												startDecorator={<ExploreIcon />}
											>
												Facing
											</Typography>
											<Typography level="body-md" fontWeight="600">
												{property.facing}
											</Typography>
										</Box>

										<Box
											sx={{
												display: "flex",
												alignItems: "flex-end",
												flexDirection: "column",
											}}
										>
											<Typography
												level="title-md"
												color="neutral"
												fontWeight="400"
												startDecorator={<DoorSlidingIcon />}
											>
												Overlooking
											</Typography>
											<Typography level="body-md" fontWeight="600">
												{property.overlooking}
											</Typography>
										</Box>
									</Stack>

									<Stack
										direction="row"
										justifyContent="space-between"
										sx={{
											padding: 1,
										}}
									>
										<Box>
											<Typography
												level="title-md"
												color="neutral"
												fontWeight="400"
												startDecorator={<CakeIcon />}
											>
												Posession in
											</Typography>
											<Typography level="body-md" fontWeight="600">
												{dateFormat(property.posess_in)}
											</Typography>
										</Box>

										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
											}}
										>
											<Typography
												level="title-md"
												color="neutral"
												fontWeight="400"
												startDecorator={<StorefrontIcon />}
											>
												Nearby Places
											</Typography>
											<Box
												sx={{
													display: "flex",
													justifyContent: "space-between",
												}}
											>
												{property.places_nearby.map((place) => (
													<Box
														key={place._id}
														sx={{
															display: "flex",
															alignItems: "center",
															gap: "0.5rem",
															cursor: "pointer",
														}}
														title={place.label} // This will show the label on hover
													>
														{iconMapping[place.icon] || <StorefrontIcon />}
													</Box>
												))}
											</Box>
										</Box>
									</Stack>
								</Box>
							</Grid>
						</Grid>
						<Divider sx={{ mt: "2rem" }} />
					</Container>

					<GoogleMapIntegration iframeUrl={property.iframe_url} />
					<Container
						maxWidth="lg"
						sx={{
							padding: 2,
							mt: "3rem",
							border: "2px solid #ffe9de",
							borderRadius: ".8rem",
						}}
					>
						<Box>
							<Stack
								sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
							>
								<Box>
									<img
										src="https://static.99acres.com/universalapp/img/landmarkGroup.png"
										alt=""
									/>
								</Box>
								<Box>
									<Typography level="h3" fontWeight="600">
										Places Nearby
									</Typography>

									<Typography level="body-md" color="neutral">
										{property.area} {property.city}
									</Typography>
								</Box>
							</Stack>
						</Box>

						<Box>
							<Stack
								gap={2}
								mt={2}
								sx={{
									flexDirection: { sm: "column", md: "row" },
									alignItems: "flex-start",
								}}
							>
								{property.places_nearby.map((place) => (
									<Box
										key={place._id}
										sx={{
											border: "2px solid  #ffd7c1",
											padding: ".7rem",
											borderRadius: ".7rem",
										}}
									>
										<Typography
											startDecorator={
												place.icon === "airport" ? (
													<AirlinesIcon />
												) : place.icon === "metro" ? (
													<DirectionsTransitIcon />
												) : place.icon === "school" ? (
													<FaSchool />
												) : place.icon === "shopping_cart" ? (
													<FaShoppingCart />
												) : place.icon === "hospital" ? (
													<FaHospital />
												) : place.icon === "railway_station" ? (
													<FaTrain />
												) : (
													<MapIcon />
												)
											}
											level="body-lg"
											color="neutral"
											fontWeight="600"
										>
											{place.label}
										</Typography>
									</Box>
								))}
							</Stack>
						</Box>
					</Container>

					<Container maxWidth="lg" sx={{ padding: 2, mt: "3rem" }}>
						<Box>
							<Typography level="title-lg" color="neutral">
								About Property
							</Typography>
							<Typography level="body-md" color="neutral">
								{property.full_address}
							</Typography>
							<Box>
								<Typography
									variant="body1"
									style={{ whiteSpace: "pre-line", display: "inline" }}
								>
									{showMore ? description : visibleLines}
								</Typography>

								{lines.length > 3 && (
									<Button
										variant="text"
										onClick={() => setShowMore(!showMore)}
										sx={{
											display: "inline",
											padding: 0,
											minWidth: "auto",
											marginLeft: "5px",
											verticalAlign: "baseline",
											textTransform: "none",
										}}
									>
										{showMore ? "Show Less" : "more.."}
									</Button>
								)}
							</Box>
						</Box>
					</Container>

					{/* <Container
						maxWidth="lg"
						sx={{
							padding: 2,
							mt: "3rem",
							border: "2px solid #ffe9de",
							borderRadius: ".8rem",
						}}
					>
						<Box>
							<Stack
								sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
							>
								<Box>
									<img
										src="https://static.99acres.com/universalapp/img/landmarkGroup.png"
										alt=""
									/>
								</Box>
								<Box>
									<Typography level="h3" fontWeight="600">
										Places Nearby
									</Typography>

									<Typography level="body-md" color="neutral">
										Bidhannagar, VIP Road, Ester Metropolitan Bypass road
									</Typography>
								</Box>
							</Stack>
						</Box>

						<Box>
							<Stack
								gap={2}
								mt={2}
								sx={{
									flexDirection: { sm: "column", md: "row" },
									alignItems: "flex-start",
								}}
							>
								<Box
									sx={{
										border: "2px solid  #ffd7c1",
										padding: ".7rem",
										borderRadius: ".7rem",
									}}
								>
									<Typography
										startDecorator={<MapIcon />}
										level="body-lg"
										color="neutral"
										fontWeight="600"
									>
										{" "}
										Bidhannagar{" "}
									</Typography>
								</Box>
								<Box
									sx={{
										border: "2px solid  #ffd7c1",
										padding: ".7rem",
										borderRadius: ".7rem",
									}}
								>
									<Typography
										startDecorator={<DirectionsTransitIcon />}
										level="body-lg"
										color="neutral"
										fontWeight="600"
									>
										{" "}
										Dumdum Metro{" "}
									</Typography>
								</Box>
								<Box
									sx={{
										border: "2px solid  #ffd7c1",
										padding: ".7rem",
										borderRadius: ".7rem",
									}}
								>
									<Typography
										startDecorator={<DirectionsTransitIcon />}
										level="body-lg"
										color="neutral"
										fontWeight="600"
									>
										{" "}
										Belgachia Metro{" "}
									</Typography>
								</Box>
								<Box
									sx={{
										border: "2px solid  #ffd7c1",
										padding: ".7rem",
										borderRadius: ".7rem",
									}}
								>
									<Typography
										startDecorator={<AirlinesIcon />}
										level="body-lg"
										color="neutral"
										fontWeight="600"
									>
										{" "}
										Airport 6km{" "}
									</Typography>
								</Box>
							</Stack>
						</Box>
					</Container>

					<Container maxWidth="lg" sx={{ padding: 2, mt: "3rem" }}> 
						<Box>
							<Typography level="title-lg" color="neutral">
								About Property
							</Typography>
							<Typography level="body-md" color="neutral">
								Address : PLOT NO-803, LAKE TOWN, BLOCK-A, KOLKATA-700089
							</Typography>
							<Box>
								<Typography
									variant="body1"
									style={{ whiteSpace: "pre-line", display: "inline" }}
								>
									{showMore ? description : visibleLines}
								</Typography>

								{lines.length > 3 && (
									<Button
										variant="text"
										onClick={() => setShowMore(!showMore)}
										sx={{
											display: "inline",
											padding: 0,
											minWidth: "auto",
											marginLeft: "5px",
											verticalAlign: "baseline",
											textTransform: "none",
										}}
									>
										{showMore ? "Show Less" : "more.."}
									</Button>
								)}
							</Box>
						</Box>
					</Container> */}

					<ContactUs />
					<Footer />
				</Box>
			)}
		</>
	);
};

export default ProjectDetails;
