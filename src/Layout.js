import { Outlet, Link, NavLink  } from "react-router-dom";
import Stack from '@mui/joy/Stack';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import * as React from 'react';
import Divider from '@mui/joy/Divider';
import Box from '@mui/joy/Box';

const Layout = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Stack
      direction="row"
      spacing={2}
    >
      <Box width={'20%'}>
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
                <ListItemButton><NavLink activeClassName="active" to="/tic-tac-toe">Tic Tac Toe</NavLink></ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                <NavLink activeClassName="active" to="/">Todo</NavLink>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                <NavLink activeClassName="active" to="/personal-finance">Personal Finance</NavLink>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton><NavLink activeClassName="active" to="/calculator">Calculator</NavLink></ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton><NavLink activeClassName="active" to="/chat-app">Chat app</NavLink></ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton><NavLink activeClassName="active" to="/quiz">Quiz</NavLink></ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton><NavLink activeClassName="active" to="/weather">Weather</NavLink></ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton><NavLink activeClassName="active" to="/music-player">Music player</NavLink></ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
      </List>
      </Box>

      <Box width={'80%'}>
      <Outlet/>
      </Box>

    </Stack>
  )
};

export default Layout;