import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';


export default function Footer() {
    const [color, setColor] = React.useState('neutral');
    const { t, i18n } = useTranslation();
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
                © 2024 {t("welcome")}. All rights reserved.
            </Typography>
        </Sheet>
    );
}
