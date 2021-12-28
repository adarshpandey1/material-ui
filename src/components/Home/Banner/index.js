import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles, Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';

const Banner = () =>  {
    const useStyles =makeStyles(theme =>({
       
        navbox:{
            maxWidth:'1250px',
            marginTop:'40px',
            padding: '80px',
            [theme.breakpoints.down('md')]: {
              
              padding:'2px',
              marginTop:'50px'
            },
        },
       
        reactplayer:{
          [theme.breakpoints.down('md')]: {
            width:'100%',
            padding:'10px',
            margin:'10px'
          },
          
        },
        h1:{
            forntSize:'1.5rem',
            lineHeight:'1.5384',
            marginRight:'20px',
            [theme.breakpoints.down('sm')]: {
              fontSize:'1.5rem',
              margin:'0 2px 0 2px'
            },
        },
        p:{
            marginRight:'10px',
            letterSpacing:'2px'
        },
        button:{
            display:'flex',
            justifyContent:'right',
            margin:'5px',
            padding:'12px'
        },
        
        
    
    }))
    const classes =useStyles();
  return (
    
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.navbox} maxWidth="xl"> 
     
      <Grid container>
        
        <Grid className={classes.griditem} item xs={12} sm={12} md={6}>
        <h1 className={classes.h1}>#1 peer-to-peer platform for student recruitment, purpose-built for higher ed</h1>
        <p className={classes.p}>Recruit and engage prospective students by building meaningful connections through chat, live events and  partnerships.</p>
        <Button className={classes.button} variant="contained" color="secondary" disableElevation>
            BOOK A DEMO
           </Button>
        </Grid>
        <Grid className={classes.griditem2} item xs={12} sm={12} md={6} >
          <ReactPlayer className={classes.reactplayer}
            width='100%'
            height='311px'
            
            controls
            url='https://youtu.be/4wSgE3qfc6Y' />
        </Grid> 
        </Grid> 
       
     
      </Container>
    
     
      
    </React.Fragment>
  );
}

export default Banner;
