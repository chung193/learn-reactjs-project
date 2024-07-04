import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import ToggleColorMode from './components/ToggleColorMode';

const Header = (props) => {

    return (
        <Sheet
            variant="solid"
            invertedColors
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1,
                p: 2,
                minWidth: 'min-content',
            }}
        >
            <ToggleColorMode />
        </Sheet>
    );
}

export default Header;