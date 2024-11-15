import React, { useEffect, useState } from "react";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Chip } from "@mui/joy";
import { dateFormat } from "../../utils/dateFormat.utils";

export default function HeaderSection({ property }) {

	console.log('property', property)

	return (
		<Stack sx={{ mb: 2 }}>
			<Chip
				sx={{
					backgroundColor: "purple",
					color: "white",
				}}
			>
				Featured
			</Chip>
			<Stack
				direction="flex"
				sx={{ justifyContent: "space-between", width: "100%" }}
			>
				<Typography level="h1" sx={{ color: "#00215b" }}>
					{property.project_name} - {property.area}, {property.city}
				</Typography>
				<Typography level="h5" fontWeight="600" color="neutral">
					Posted on - {dateFormat(property.posted_on)} | {property.status}
				</Typography>
			</Stack>
			<Stack
				direction="row"
				sx={{ justifyContent: "space-between", width: "100%" }}
			>
				<Typography level="h4" color="neutral">
					{
						property.configuration.map((prop) => `${prop.bedrooms}bhk`).join(' / ')
					}
					&nbsp; flat available for sale
				</Typography>
			</Stack>
			<Typography level="body-lg" color="neutral">
				Book your next stay at one of our properties at {property.area}, {property.city}
			</Typography>
		</Stack>
	);
}
