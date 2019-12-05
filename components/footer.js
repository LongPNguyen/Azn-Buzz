import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
      <Grid container style={{backgroundColor: '#2C2527', height:'auto', padding:'0.5em 0.5em 0.5em 1.5em' }} spacing={4}>
        <Grid item xs={6}>
          <p style={{color:'white', fontSize:'14px', margin:'0', fontFamily:'Tahoma'}}>© 2019 Azn Buzz</p>
          <a style={{color:'#0EB939', textDecoration:'none', fontSize:'14px', fontFamily:'Tahoma' }} href="https://www.termsfeed.com/privacy-policy/8e2a8f96d8170b5b8e4448ce85ae2ca1">
            Privacy Policy
          </a>
        </Grid>
        <Grid item xs={6} align='right'>
          <a href="https://twitter.com/aznbuzz"><TwitterIcon style={{color:'white', fontSize:'2em', marginRight:'1em'}}/></a>
        </Grid>
      </Grid>
  );
}

export default Footer