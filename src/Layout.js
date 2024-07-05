import { Outlet, Link, NavLink } from "react-router-dom";
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
import Header from "./partials/Header";
import Sidebar from "./partials/Sidebar";
import Footer from "./partials/Footer";
const Layout = () => {

  return (
    <>
      <Header />
      <Stack
        direction="row"
        spacing={2}
      >
        <Box sx={{ padding: 2, width: '20%' }}>
          <Sidebar />
        </Box>
        <Box sx={{ padding: 2, width: '80%' }}>
          <Outlet />
        </Box>
      </Stack>
      <Footer />
    </>
  )
};

export default Layout;