import React from "react";
import {
	Box,
	Typography,
	Button,
	Grid,
	Card,
	CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import HouseIcon from "@mui/icons-material/House";
import BusinessIcon from "@mui/icons-material/Business";
import SearchIcon from "@mui/icons-material/Search";

// Import the image from the assets folder
import HeroImage from "../../Assets/about-us-heading-photo.jpg"; // Adjust path as necessary

const HeroSection = styled(Box)({
	padding: "4rem 2rem",
	textAlign: "center",
	color: "#fff",
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundImage: `url(${HeroImage})`, // Use imported image
	position: "relative", // This is important for positioning the overlay
});
const HeroText = styled(Typography)({
	textShadow:
		"0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8)", // Glow effect
	zIndex: 1,
	position: "relative",
});
const Overlay = styled(Box)({
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	background: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
});

const ServiceCard = ({ icon, title, description }) => (
	<Card sx={{ boxShadow: "lg", textAlign: "center", padding: "2rem" }}>
		<Box sx={{ fontSize: "3rem", color: "#f45905" }}>{icon}</Box>
		<Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
			{title}
		</Typography>
		<Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
			{description}
		</Typography>
		<Button variant="outlined" sx={{ mt: 2 }}>
			Learn More
		</Button>
	</Card>
);

const Services = () => {
	return (
		<Box>
			{/* Hero Section */}
			<HeroSection>
				<Overlay />
				<HeroText variant="h2" gutterBottom>
					Our Expert Real Estate Services
				</HeroText>
				<HeroText variant="h5" gutterBottom>
					Tailored solutions for your real estate needs
				</HeroText>
				<Button variant="contained" color="primary" sx={{ mt: 2 }}>
					Explore Our Services
				</Button>
			</HeroSection>

			{/* Introduction Section */}
			<Box p={4} textAlign="center">
				<Typography variant="h4" gutterBottom>
					Why Choose Us?
				</Typography>
				<Typography
					variant="body1"
					color="textSecondary"
					maxWidth="600px"
					mx="auto"
				>
					At Z-INDIA REALTY, we provide comprehensive services for buying,
					selling, and renting properties. Our dedicated team ensures a smooth,
					hassle-free experience every time.
				</Typography>
			</Box>

			{/* Services List Section */}
			<Box p={4} bgcolor="#f9f9f9">
				<Typography variant="h4" align="center" gutterBottom>
					Our Services
				</Typography>
				<Grid container spacing={3} justifyContent="center">
					<Grid item xs={12} sm={4}>
						<ServiceCard
							icon={<HouseIcon />}
							title="Property Buying"
							description="Find the perfect property with expert advice and guidance."
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ServiceCard
							icon={<BusinessIcon />}
							title="Property Selling"
							description="Sell your property quickly with our proven strategies."
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ServiceCard
							icon={<SearchIcon />}
							title="Property Rental"
							description="Find ideal rental properties with a wide selection."
						/>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Services;
