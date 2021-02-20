import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';

const Header = () => {
    return (
        <AppBar component="header" position="static">
            <Toolbar>
                <Typography variant="h6">
                    React | Material UI
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {

}

export default Header
