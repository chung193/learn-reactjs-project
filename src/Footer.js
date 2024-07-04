import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/material/Typography';


export default function Footer() {
    const [color, setColor] = React.useState('neutral');
    return (
        <Sheet
            variant="solid"
            invertedColors
            sx={{
                flexGrow: 1,
                p: 2,
            }}
        >

            <Typography variant="body2" gutterBottom>
                © 2024 John Doe. All rights reserved.
            </Typography>
        </Sheet>
    );
}
