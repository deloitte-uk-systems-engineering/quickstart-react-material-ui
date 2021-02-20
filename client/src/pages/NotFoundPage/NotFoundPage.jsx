import React from 'react'
import {
    Container,
    Grid,
    Typography,
} from '@material-ui/core';
import SpeedIcon from '@material-ui/icons/Speed';
import sampleImage from '../../images/sample_image.svg';
import useStyles from './NotFoundPage.style';

const NotFoundPage = () => {

    const styles = useStyles();

    const sections = [
        {
            key: 'notFound',
            icon: SpeedIcon,
            html: (
                <span>
                    {'Opps not found!'}
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

NotFoundPage.propTypes = {

}

export default NotFoundPage
