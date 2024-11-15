import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';

export default function CardSkeleton() {
    return (
        <Card variant="outlined" sx={{ width: { xs: 350, md: 520 }, maxWidth: '100%', boxShadow: 'lg', margin: '2rem auto', }}>
            <AspectRatio ratio="21/9">
                <Skeleton variant="overlay">
                    <img
                        alt=""
                        src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    />
                </Skeleton>
            </AspectRatio>

            <Typography>
                <Skeleton>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries.
                </Skeleton>
            </Typography>
            <Typography>
                <Skeleton>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries.
                </Skeleton>
            </Typography>
            <Typography>
                <Skeleton>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries.
                </Skeleton>
            </Typography>
            <Typography>
                <Skeleton>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries.
                </Skeleton>
            </Typography>
            <Typography>
                <Skeleton>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries.
                </Skeleton>
            </Typography>
        </Card>
    );
}
