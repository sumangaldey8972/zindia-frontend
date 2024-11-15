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
import { MdBedroomParent } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { MdBathtub } from "react-icons/md";

export default function PropertyCard({ property }) {
	const {
		project_name,
		area,
		city,
		posted_on,
		configuration,
		full_address,
		images,
	} = property;

	// If there is an image, format it for display; otherwise, use a placeholder
	const propertyImage = images?.[0]
		? `data:${images[0].mimeType};base64,${images[0].data}`
		: require("../../Assets/Main_photo.jpeg");

	return (
		<Card
			sx={{
				width: { xs: 300, md: 420 },
				maxWidth: "100%",
				boxShadow: "md",
				margin: "1.5rem auto",
				padding: 1,
			}}
		>
			<CardOverflow>
				<AspectRatio
					ratio="16/9"
					sx={{ minWidth: 180, maxHeight: 180, overflow: "hidden" }}
				>
					<img
						src={propertyImage}
						alt={`${project_name} image`}
						loading="lazy"
						style={{
							objectFit: "cover",
							width: "100%",
							height: "100%",
						}}
					/>
				</AspectRatio>
			</CardOverflow>
			<CardContent sx={{ padding: 1 }}>
				<Typography
					level="h5"
					color="neutral"
					textColor="text.primary"
					overlay
					sx={{ fontWeight: "medium", color: "#00215b" }}
				>
					{project_name} in {area}, {city}
				</Typography>
				<Typography
					level="body-sm"
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
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 2,
						justifyContent: "space-around",
					}}
				>
					<Typography level="body-sm">
						<IoBed />
						{configuration.map(
							(config, index) =>
								`${config.bedrooms}${
									index < configuration.length - 1 ? "/" : ""
								}`
						)}
					</Typography>
					<Typography>
						<MdBathtub />
					</Typography>
					<Typography level="body-sm">Area: {area}</Typography>
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
					}}
					size="md"
				>
					Visit Now
				</Button>
			</CardOverflow>
		</Card>
	);
}
