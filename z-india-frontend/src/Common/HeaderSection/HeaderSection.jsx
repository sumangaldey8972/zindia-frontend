import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { Chip } from '@mui/joy';

export default function HeaderSection() {
    return (
        <Stack sx={{ mb: 2 }}>
            <Chip sx={{
                backgroundColor: 'purple',
                color: 'white'
            }} >
                Featured
            </Chip>
            <Stack direction="flex" sx={{ justifyContent: 'space-between', width: '100%' }}>
                <Typography level="h1" sx={{ color: '#00215b' }} >Susmita Apartment - Laketown , Kolkata</Typography>
                <Typography level="h5" fontWeight="600" color='neutral' >Posted on - 27th Sep 2024 | under contstruction</Typography>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: 'space-between', width: '100%' }}>
                <Typography level="h4" color="neutral">2bhk / 3bhk flat available for sale</Typography>
            </Stack>
            <Typography level="body-lg" color="neutral">
                Book your next stay at one of our properties at Laketown, Kolkata
            </Typography>
        </Stack>
    );
}
