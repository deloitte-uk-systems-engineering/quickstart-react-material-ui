import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
    (theme) => ({
        root: {
            height: '100%',
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            flexDirection: 'column'
        }
    }),
    { name: 'App' }
);
