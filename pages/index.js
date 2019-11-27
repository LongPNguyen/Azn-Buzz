import React, { Component } from 'react'
import Header from '../components/header'
import Grid from '@material-ui/core/Grid';

const hStyles = {
  fontFamily:'Tahoma',
  color:"#4A3C3F"
}

const pStyles = {
  fontFamily:'Tahoma',  
  color:"#7E666C",
  fontSize:'20px',
  margin:'1em 0 1em 0',
}

export default class Home extends React.Component {
  render(){
    return (
      <Grid container>
        <Header />
        <Grid item xs={12}>
          <h1 style={{...hStyles, fontSize:"50px", margin:'1em 0 0 0'}} align="center">Azn Buzz</h1>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <p style= {{...pStyles}} align="center">Asian American Drinking Game That will have <br/>everyone tipsy 🥴 and laughing 🤣</p>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={12}>
          <p align="center" style={{margin:"0 0 0 0"}}><img src='/static/phones.png' width="95%" height="auto" /></p>
        </Grid>
        <Grid item xs={12}>
          <h2 style={{...hStyles, fontSize:"25px", margin:"0 0 0 0"}} align="center">How to play</h2>
          <p style={{...pStyles}} align="center">It’s simple — take turns reading the card and follow the prompt. Drink depending on what it is. Lather, rinse, repeat. Designed for 3 to up to 20 players.s to make it beautiful</p>
        </Grid>
      </Grid>
    )
  }
}
