import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Grid from '@material-ui/core/Grid'
import AppStore from '../components/download'

const hStyles = {
  fontFamily:'Tahoma',
  color:"#4A3C3F"
}

const pStyles = {
  fontFamily:'Tahoma',  
  color:"#7E666C",
  fontSize:'20px',
  margin:'auto'
}
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {width:'50%'}
  }

  componentDidMount() {
      if(window.innerWidth > 1024){
        this.state.width
      }
      else if(window.innerWidth <= 1024 && window.innerWidth > 650){
        this.setState({width:'100%'})
      }
      else {
        this.setState({width:'200%'})
      };
  }

  render(){
    const width = this.state.width
    return (
      <Grid container style={{
        margin: 'auto'
        }}>
        <Header />
        <Grid item xs={12}>
          <div align='center'>
            <h1 style={{...hStyles, fontSize:"50px", margin:'1em 0 0 0'}} align="center">Azn Buzz</h1>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div align='center'>
            <p style= {{...pStyles, margin:'1em 0 1em 0'}} align="center">Asian American Drinking Game That will have <br/>everyone tipsy 🥴 and laughing 🤣</p>
          </div>
        </Grid>
        <Grid item xs={12}><AppStore/></Grid>
        <Grid item xs={12} >
            <div align='center' style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              alignItems: 'safe center',
              paddingLeft: 'auto'
            }}>
              <img src="/static/phone.png" width={width} style={{
              // height:'auto',
              // margin: 'auto fixed',          
              }} />
            </div>
        </Grid>
        <Grid item xs={12}>
          <h2 style={{...hStyles, fontSize:"25px", margin:"1em 0 0.5em 0"}} align="center">How to play</h2>
          <p style={{
            ...pStyles,
             paddingRight:'5vw',
             paddingLeft:'5vw',
             margin:'0 1em 3em 1em'
            }} 
            align="center">It’s simple — take turns reading the card and follow the prompt. Drink depending on what it is. Lather, rinse, repeat. Designed for 3 to up to 20 players.</p>
        </Grid>
        <Footer/>
        <style global jsx>{`
          html {
            display: flex;
            overflow-x: hidden;
            width: 100vw;
            height: 100vh
          }
          body {
            width: 100vw;
            height: 100vh;
          }
        `}</style>
      </Grid>
    )
  }
}
