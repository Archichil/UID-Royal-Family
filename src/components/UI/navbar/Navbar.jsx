import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Royal Family</Typography>
                <Button component={Link} to="/home" color="inherit"> Home </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
