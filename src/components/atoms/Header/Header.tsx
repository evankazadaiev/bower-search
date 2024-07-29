import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '@/assets/bower-logo.svg';
import Box from "@mui/material/Box";

const Header: React.FC = () => (
    <AppBar position="static" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <Box component="img" src={logo} alt="Bower logo" sx={{ height: 40, mr: 2 }} />
            <Typography variant="h6">
                Bower Search
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
