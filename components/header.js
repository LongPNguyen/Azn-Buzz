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
         <img src="https://landen.imgix.net/he6fpnd9wnni/assets/f1872tp5.png?w=354" width="177"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header
