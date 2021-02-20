import React from 'react'
import {
    Container,
    Grid,
    Link,
    Typography,
} from '@material-ui/core';
import SpeedIcon from '@material-ui/icons/Speed';
import BrushIcon from '@material-ui/icons/Brush';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import BrightnessIcon from '@material-ui/icons/Brightness4';
import sampleImage from '../../images/sample_image.svg';
import useStyles from './HomePage.style';

const HomePage = () => {

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
    )
}

HomePage.propTypes = {

}

export default HomePage
