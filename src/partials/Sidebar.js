import { Link as RouterLink } from "react-router-dom";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import * as React from 'react';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';


const Sidebar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Box>
            <List
                size="sm"
                sx={(theme) => ({
                    // Gatsby colors
                    '--joy-palette-primary-plainColor': '#8a4baf',
                    '--joy-palette-neutral-plainHoverBg': 'transparent',
                    '--joy-palette-neutral-plainActiveBg': 'transparent',
                    '--joy-palette-primary-plainHoverBg': 'transparent',
                    '--joy-palette-primary-plainActiveBg': 'transparent',
                    [theme.getColorSchemeSelector('dark')]: {
                        '--joy-palette-text-secondary': '#635e69',
                        '--joy-palette-primary-plainColor': '#d48cff',
                    },

                    '--List-insetStart': '32px',
                    '--ListItem-paddingY': '0px',
                    '--ListItem-paddingRight': '16px',
                    '--ListItem-paddingLeft': '21px',
                    '--ListItem-startActionWidth': '0px',
                    '--ListItem-startActionTranslateX': '-50%',

                    [`& .${listItemButtonClasses.root}`]: {
                        borderLeftColor: 'divider',
                    },
                    [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
                        borderLeftColor: 'currentColor',
                    },
                    '& [class*="startAction"]': {
                        color: 'var(--joy-palette-text-tertiary)',
                    },
                    padding: 2
                })}
            >
                <ListItem
                    nested
                    sx={{ my: 1 }}
                    startAction={
                        <IconButton
                            variant="plain"
                            size="sm"
                            color="neutral"
                            onClick={() => setOpen(!open)}
                        >
                            <KeyboardArrowDown
                                sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
                            />
                        </IconButton>
                    }
                >
                    <ListItem>
                        <Typography
                            level="inherit"
                            sx={{
                                fontWeight: open ? 'bold' : undefined,
                                color: open ? 'text.primary' : 'inherit',
                            }}
                        >
                            Tutorial
                        </Typography>
                        <Typography component="span" level="body-xs">
                            8
                        </Typography>
                    </ListItem>
                    {open && (
                        <List sx={{ '--ListItem-paddingY': '8px' }}>
                            <ListItem>
                                <ListItemButton><Link component={RouterLink} to="/tic-tac-toe">Tic Tac Toe</Link></ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <Link component={RouterLink} to="/">Todo</Link>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <Link component={RouterLink} to="/personal-finance">Personal Finance</Link>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton><Link component={RouterLink} to="/calculator">Calculator</Link></ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton><Link component={RouterLink} to="/chat-app">Chat app</Link></ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton><Link component={RouterLink} to="/quiz">Quiz</Link></ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton><Link component={RouterLink} to="/weather">Weather</Link></ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton><Link component={RouterLink} to="/blog">Blog</Link></ListItemButton>
                            </ListItem>
                        </List>
                    )}
                </ListItem>
            </List>
        </Box>
    )
}
export default Sidebar;