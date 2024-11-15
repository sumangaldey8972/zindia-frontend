import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/joy';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Crop54Icon from '@mui/icons-material/Crop54';
import susmita_apartment from "../../Assets/Main_photo.jpeg"
import { Link } from 'react-router-dom'
import { dateFormat } from '../../utils/dateFormat.utils';

export default function PropertyCard({ property }) {
	console.log('property card', property)

	const {
		project_name,
		sub_heading,
		area,
		city,
		posted_on,
		configuration,
		full_address,
		length,
		width,
		images
	} = property

	const propertyImage = images?.[0]
		? `data:${images[0].mimeType};base64,${images[0].data}`
		: require("../../Assets/Main_photo.jpeg");

	return (
		<Card sx={{ width: { xs: 350, md: 520 }, maxWidth: '100%', boxShadow: 'lg', margin: '2rem auto', }}>
			<CardOverflow>
				<AspectRatio sx={{ minWidth: 200 }}>
					<img
						src={propertyImage}
						srcSet={propertyImage}
						loading="lazy"
						alt=""
					/>
				</AspectRatio>
			</CardOverflow>
			<CardContent>
				<Typography level="body-xs">{sub_heading}</Typography>
				<Typography
					// href="#product-card"
					level='h3'
					color="neutral"
					textColor="text.primary"
					overlay
					// endDecorator={<ArrowOutwardIcon />}
					sx={{ fontWeight: 'md', color: '#00215b' }}
				>
					{project_name} in {area}, {city}
				</Typography>

				<Typography
					level="body-md"
					sx={{ mt: 1, fontWeight: 'xl' }}
					endDecorator={
						<Chip component="span" size="sm" variant="soft" color="success">
							attractive price
						</Chip>
					}
				>
					Added : {dateFormat(posted_on)}
				</Typography>

				<Typography
					level="body-md"
					sx={{ fontWeight: 'xl' }}
				>

					{configuration.map((prop) => `${prop.bedrooms}bhk`).join(' , ')}
				</Typography>

				<Typography level="body-lg"  >
					Address : {full_address}
				</Typography>

				<Box sx={{
					display: 'flex',
					// border:'1px solid orange',
					gap: 4
				}} >
					<Box>
						<Typography>Bedrooms</Typography>
						<Typography startDecorator={<BedIcon />} >
							{configuration.map((prop) => prop.bedrooms).join('/')}
						</Typography>
					</Box>

					<Box>
						<Typography>Bathrooms</Typography>
						<Typography startDecorator={<BathtubIcon />} >
							2
						</Typography>
					</Box>

					<Box>
						<Typography>Area</Typography>
						<Typography startDecorator={<Crop54Icon />} >
							{length} sqft, {width} sqft
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
					}}
					size="md"
				>
					Visit Now
				</Button>
			</CardOverflow>
		</Card>
	);
}