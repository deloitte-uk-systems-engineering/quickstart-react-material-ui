import React from 'react';
import {
    AppBar,
    Container,
    Grid,
    Link,
    Toolbar,
    Typography,
    useMediaQuery
} from '@material-ui/core';
import SpeedIcon from '@material-ui/icons/Speed';
import BrushIcon from '@material-ui/icons/Brush';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import BrightnessIcon from '@material-ui/icons/Brightness4';
import { ThemeProvider } from '@material-ui/core/styles';
import sampleImage from '../../images/sample_image.svg';
import useStyles from './App.style';
import createTheme from '../../config/Theme';

function App() {
    const styles = useStyles();

    const sections = [
        {
            key: 'quickstart',
            icon: SpeedIcon,
            html: (
                <span>
                    {'This is a sample project that can be used to quickly bootstrap a '}
                    <Link
                        color="secondary"
                        className={styles.link}
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </Link>
                    {' application which utilises '}
                    <Link
                        color="secondary"
                        className={styles.link}
                        href="https://material-ui.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Material UI
                    </Link>
                    {'. A lightweight '}
                    <Link
                        color="secondary"
                        className={styles.link}
                        href="https://expressjs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Express
                    </Link>
                    {' server has also been included to illustrate how to deploy a production build. The code and file-structure used in this project should be used as a guideline only.'}
                </span>
            )
        },
        {
            key: 'responsive',
            icon: AspectRatioIcon,
            html: (
                <span>
                    {'For an optimal user experience, it\'s important to make your application responsive to different screen sizes. This application uses '}
                    <Link
                        color="secondary"
                        className={styles.link}
                        href="https://material-ui.com/customization/breakpoints/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Material UI Breakpoints
                    </Link>
                    {' in order to adapt the layout of the page based on the user\'s screen size. Try changing the size of the browser window to see it in action.'}
                </span>
            )
        },
        {
            key: 'theming',
            icon: BrushIcon,
            html: (
                <span>
                    {'It is also strongly recommended that you take the time to understand how '}
                    <Link
                        color="secondary"
                        className={styles.link}
                        href="https://material-ui.com/customization/theming/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Material UI Theming
                    </Link>
                    {' works as it will help you style your application in a consistant and adaptable manner.'}
                </span>
            )
        },
        {
            key: 'appearance',
            icon: BrightnessIcon,
            html: (
                <span>
                    {'Users might have a preference for a light or dark appearance. This preference may be specified by a system-wide setting exposed by the Operating System or by a setting controlled by the User Agent. This application uses the \'prefers-color-scheme\' media query to automatically switch to the '}
                    <Link
                        color="secondary"
                        className={styles.link}
                        href="https://material-ui.com/customization/palette/#dark-mode"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Material UI Dark Mode
                    </Link>
                    {' when the user has specified a preference for a dark appearance.'}
                </span>
            )
        }
    ];

    return (
        <div className={styles.root}>
            <AppBar component="header" position="static">
                <Toolbar>
                    <Typography variant="h6">
                        React | Material UI
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="lg" className={styles.main}>
                <div className={styles.content}>
                    <img className={styles.image} src={sampleImage} alt="Sample" />
                    <Grid container spacing={3}>
                        {
                            sections.map(({ icon: Icon, html, key }) => (
                                <Grid
                                    key={key}
                                    item
                                    xs={12}
                                    sm={6}
                                    md={12}
                                    component={Typography}
                                    variant="body1"
                                    className={styles.paragraph}
                                >
                                    <Icon className={styles.icon} color="primary" />
                                    {html}
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(() => createTheme(prefersDarkMode), [
        prefersDarkMode
    ]);

    return (
        /**
         * The entire application is wrapped in the Material UI theme
         * provider. All components can and should be styled using the
         * theme object. In particular, spacing (i.e. margins and
         * padding) should be defined using the 'theme.spacing' method
         * and colours should be accessed via the 'theme.palette' object.
         * By always using the theme object to style components, changes
         * only need to be made in one place (config/Theme.js) and the
         * entire application will have its appearance updated consistantly.
         *
         * See: https://material-ui.com/styles/api/#themeprovider
         */
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    );
};
