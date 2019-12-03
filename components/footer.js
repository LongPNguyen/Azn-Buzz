import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  spacing: {
    margin: "0.65em 0 0 1.36em"
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.spacing}>
         <p>© 2019 Azn Buzz</p>
         <p>© 2019 Azn Buzz</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header