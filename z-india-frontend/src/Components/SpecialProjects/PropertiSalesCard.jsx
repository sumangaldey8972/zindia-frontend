import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/joy";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import Crop54Icon from "@mui/icons-material/Crop54";
import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
	const {
		project_name,
		area,
		city,
		posted_on,
		configuration,
		full_address,
		number_of_floores,
		facing,
		overlooking,
		images,
		_id,
	} = property;

	const propertyImage = images?.[0] || require("../../Assets/Main_photo.jpeg");

	return (
		<Card
			sx={{
				width: { xs: 300, md: 420 }, // Reduced width
				maxWidth: "100%",
				boxShadow: "md",
				margin: "1.5rem auto", // Smaller margin
				padding: 1, // Reduced padding
			}}
		>
			<CardOverflow>
				<AspectRatio sx={{ minWidth: 180 }}>
					{" "}
					{/* Reduced image area */}
					<img
						src={propertyImage}
						alt={`${project_name} image`}
						loading="lazy"
						style={{ objectFit: "cover" }} // Ensures image fills without overflow
					/>
				</AspectRatio>
			</CardOverflow>
			<CardContent sx={{ padding: 1 }}>
				{" "}
				{/* Reduced content padding */}
				<Typography level="body-xs">{`${project_name}, ${area}, ${city}`}</Typography>
				<Typography
					level="h5" // Smaller headline level
					color="neutral"
					textColor="text.primary"
					overlay
					sx={{ fontWeight: "medium", color: "#00215b" }}
				>
					{project_name} in {area}, {city}
				</Typography>
				<Typography
					level="body-sm" // Smaller font size
					sx={{ mt: 0.5, fontWeight: "md" }}
					endDecorator={
						<Chip component="span" size="sm" variant="soft" color="success">
							attractive price
						</Chip>
					}
				>
					Added: {new Date(posted_on).toLocaleDateString()}
				</Typography>
				<Typography level="body-sm" sx={{ fontWeight: "medium" }}>
					{configuration.map(
						(config, index) =>
							`${config.bedrooms} BHK${
								index < configuration.length - 1 ? ", " : ""
							}`
					)}
				</Typography>
				<Typography level="body-sm">Address: {full_address}</Typography>
				<Box sx={{ display: "flex", gap: 2, mt: 1 }}>
					<Box>
						<Typography level="body-xs">Bedrooms</Typography>
						<Typography startDecorator={<BedIcon />} level="body-sm">
							{configuration.map((config) => config.bedrooms).join("/")}
						</Typography>
					</Box>

					<Box>
						<Typography level="body-xs">Bathrooms</Typography>
						<Typography startDecorator={<BathtubIcon />} level="body-sm">
							{configuration.reduce((sum, config) => sum + config.balcony, 0)}
						</Typography>
					</Box>

					<Box>
						<Typography level="body-xs">Area</Typography>
						<Typography startDecorator={<Crop54Icon />} level="body-sm">
							{property.area_size || "N/A"} sqft
						</Typography>
					</Box>
				</Box>
			</CardContent>

			<CardOverflow>
				<Button
					component={Link}
					to="/:name"
					state={{ property }}
					variant="solid"
					sx={{
						backgroundColor: "#f45905",
						fontSize: "0.875rem",
						padding: "0.5rem 1rem",
					}} // Smaller font and padding
					size="md" // Medium size
				>
					Visit Now
				</Button>
			</CardOverflow>
		</Card>
	);
}
