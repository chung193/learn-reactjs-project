import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

export default function Loading() {
    return (
        <Box sx={{ width: '100%' }}>
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
        </Box>
    );
}
