import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
    (theme) => ({
        main: {
            flex: 1,
            display: 'flex',
            overflow: 'auto',
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3)
        },
        content: {
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row'
            }
        },
        section: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        image: {
            maxWidth: 300,
            width: '100%',
            marginBottom: theme.spacing(3),
            [theme.breakpoints.up('md')]: {
                maxWidth: 400,
                marginBottom: 0,
                marginRight: theme.spacing(3)
            }
        },
        paragraph: {
            display: 'flex',
            '&:last-child': {
                marginBottom: 0
            }
        },
        icon: {
            marginRight: theme.spacing(2),
            fontSize: '2.8rem'
        },
        link: {
            fontWeight: '500'
        }
    }),
    { name: 'NotFoundPage' }
);
