import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles, Button,useTheme} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';

const TabContent = () =>  {
    const useStyles =makeStyles(theme =>({
       
        navbox:{
            maxWidth:'1250px',
            marginTop:'0px',
            marginBottom:'0px',
            marginLeft:'auto',
            marginRight:'auto',
            padding: '20px',
            [theme.breakpoints.down('md')]: {
              wiidth:'100%'
             },
        },
        img:{
            width:'492px',
            height:'400px',
            left:'1px',
            marginLeft:'50px',
            top:'0px',
            [theme.breakpoints.down('md')]: {
              width:'100%',
              margin:'auto',
              paddingRight:'15px',
              paddingLeft:'15px',
              height:'auto'
            },
        },
        h3:{
            fontSize:'1.32rem',
            lineHeight:'1.376'
        },
        info:{
            maxWidth:'355px',
            fontSize:'large',
            fontFamily: 'goldplaymedium'
        },
        buttondiv:{
            display:'inline-flex',
            alignItems:'center',
            padding:'0 4px 0 0',
            position:'relative',
            marginTop:'20px'
        },
        button:{
            display:'flex',
            justifyContent:'center',
            fontSize:'18px',
           marginTop:'auto',
            fontWeight:'600',
            textDecoration:'none',
            [theme.breakpoints.down('md')]: {
              width:'100%',
              margin:'auto',
              paddingRight:'15px',
              paddingLeft:'15px',
              height:'60%'
            },

        },
        griditem:{
            margin:'auto'
        }
        
        
        
    
    }))
    const classes =useStyles();
  return (
    
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.navbox} maxWidth="xl"> 
     
      <Grid container>
        
        <Grid className={classes.griditem} item xs={12} sm={12} md={6}>
        <img className={classes.img} src = "assets/unibuddy6.png" />
        </Grid>
        <Grid className={classes.griditem}item xs={12} sm={12} md={6} >
          <h3 className={classes.h3}>Unibuddy Chat</h3>
          <Typography varient="p" component="p" className={classes.info}>Place student ambassadors and university staff at the heart of your recruitment strategy using our interactive chat tool, featuring ambassador blogs to increase student engagement and enrollment.</Typography>
          <div className={classes.buttondiv}>
          <Button className={classes.button} variant="contained" color="secondary" disableElevation>
            Find Out More
           </Button>
          </div>
        </Grid> 
        </Grid> 
       
     
      </Container>
    
     
      
    </React.Fragment>
  );
}

export default TabContent;

