import React from 'react';
import { useMediaQuery, makeStyles, Paper } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  sidebar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.secondary.contrastText,
    background: theme.palette.primary.main,
    paddingBottom: theme.spacing(5),
    width: theme.dimensions.sidebarWidth,
    [theme.breakpoints.down('md')]: {
      width: theme.dimensions.sidebarWidthTablet,
    },
    [theme.breakpoints.down('xs')]: {
      width: '0px',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    boxShadow: '-2px 0px 16px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 25, 0, 0),
    },
  },
  form: {
    maxWidth: theme.spacing(52),
    padding: theme.spacing(5),
    width: '100%',
  },
  attribution: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1.5),
    fontSize: 'x-small',
  },
}));

const LoginLayout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <main className={classes.root}>
        <div className={classes.sidebar}>
          {!useMediaQuery(theme.breakpoints.down('md'))
            && (
            <svg height="64" width="240">
              <use xlinkHref="/logo.svg#img" />
            </svg>
            )}
        </div>
        <Paper className={classes.paper}>
          <form className={classes.form}>
            { children }
          </form>
        </Paper>
      </main>
      <div className={classes.attribution}>
        Powered by&nbsp;
        <a href="https://www.traccar.org/">Traccar GPS Tracking System</a>
      </div>
    </>
  );
};

export default LoginLayout;
