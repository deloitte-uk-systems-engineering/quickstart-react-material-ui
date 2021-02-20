import React from 'react'
import {
    Container,
    Grid,
    Typography,
} from '@material-ui/core';
import SpeedIcon from '@material-ui/icons/Speed';
import sampleImage from '../../images/sample_image.svg';
import useStyles from './AboutPage.style';

const AboutPage = () => {

    const styles = useStyles();

    const sections = [
        {
            key: 'about',
            icon: SpeedIcon,
            html: (
                <span>
                    {'About the creator'}
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

AboutPage.propTypes = {

}

export default AboutPage
