import React from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListDivider from '@mui/joy/ListDivider';

const ToggleLanguage = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <Dropdown>
            <MenuButton
                sx={{
                    '--Button-radius': '1rem',
                    marginLeft: 2
                }}
                variant="outlined"
                endDecorator={<KeyboardArrowDownIcon />}
            >
                {i18n.language}
            </MenuButton>
            <Menu
                variant="outlined"
                placement="bottom-start"
                disablePortal
                size="sm"
                sx={{
                    '--ListItemDecorator-size': '24px',
                    '--ListItem-minHeight': '40px',
                    '--ListDivider-gap': '4px',
                    minWidth: 200,
                }}
            >
                <MenuItem onClick={() => changeLanguage('vi')} sx={{ cursor: 'pointer' }}>
                    Tiếng Việt
                </MenuItem>
                <ListDivider />
                <MenuItem onClick={() => changeLanguage('en')} sx={{ cursor: 'pointer' }}>
                    English
                </MenuItem>
            </Menu>
        </Dropdown>
    )
}

export default ToggleLanguage;