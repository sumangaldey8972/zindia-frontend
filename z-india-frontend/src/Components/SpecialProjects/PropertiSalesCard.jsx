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

export default function PropertyCard() {
  return (
    <Card  sx={{ width: 520, maxWidth: '100%', boxShadow: 'lg', margin:'2rem auto', zIndex:-1 }}>
      <CardOverflow>
        <AspectRatio sx={{ minHeight:100,  backgroundSize:'cover', backgroundPosition:'center', }}>
          <img
            src={susmita_apartment}
            srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
            style={{width:'100%', height:'100%'}}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">Apartment,Delux Apartment, Apartment in Laketown , Kolkata</Typography>
        <Typography
          // href="#product-card"
          level='h3'
          color="neutral"
          textColor="text.primary"
          overlay
          // endDecorator={<ArrowOutwardIcon />}
          sx={{ fontWeight: 'md' , color:'#00215b'}}
        >
          Susmita Apartment in Laketown, Kolkata
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
          Added : 27th Sep 2024
        </Typography>

        <Typography
          level="body-md"
          sx={{ fontWeight: 'xl' }}
        >
          3bhk , 2bhk
        </Typography>

        <Typography level="body-lg"  >
          Address : Plot no - 803, Laketown, Kolkata, 700089
        </Typography>

          <Box sx={{
            display:'flex',
            // border:'1px solid orange',
            gap:4
          }} >
              <Box>
                <Typography>Bedrooms</Typography>
                <Typography startDecorator={<BedIcon/>} >
                   2/3
                </Typography>
              </Box>

              <Box>
                <Typography>Bathrooms</Typography>
                <Typography startDecorator={<BathtubIcon/>} >
                   2
                </Typography>
              </Box>

              <Box>
                <Typography>Area</Typography>
                <Typography startDecorator={<Crop54Icon/>} >
                   1145 sqft, 1421 sqft
                </Typography>
              </Box>
          </Box>
        
      </CardContent>
      <CardOverflow>
        <Button variant="solid" sx={{
          backgroundColor:'#f45905'
        }} size="lg">
          Visit Now
        </Button>
      </CardOverflow>
    </Card>
  );
}
