import * as React from 'react';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Dropdown from '@mui/joy/Dropdown';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import AddIcon from '@mui/icons-material/Add';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import ToggleColorMode from './components/ToggleColorMode';

const Header = (props) => {

    return (
        <Sheet
            variant="solid"
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