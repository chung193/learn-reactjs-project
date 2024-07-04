import { useColorScheme } from '@mui/joy/styles';
import IconButton from '@mui/joy/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const ToggleColorMode = () => {
    const { mode, setMode } = useColorScheme();
    return (
        <IconButton
            variant="outlined"
            color="neutral"
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton >
    );
}

export default ToggleColorMode;