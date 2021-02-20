import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Link,
} from '@material-ui/core';

const Header = () => {
    return (
        <AppBar component="header" position="static">
            <Toolbar>
                <Typography variant="h6">
                <Link
                    color="inherit"
                    href="/"
                    rel="noopener noreferrer"
                >
                    React | Material UI
                </Link>
                </Typography>
                <Link
                    color="secondary"
                    href="/about"
                    rel="noopener noreferrer"
                >
                    <Button color="inherit">About</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {

}

export default Header
