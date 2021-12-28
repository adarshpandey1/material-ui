import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles, Button,useTheme} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';

const CounterRow = () => {
    const useStyles =makeStyles(theme =>({ 
        navbox:{
            maxWidth:'1200px',
            marginTop:'0px',
            marginLeft:'auto',
            marginRight:'auto',
            padding: '0',
            [theme.breakpoints.down('sm')]: {
                maxWidth:'380px'
               },
        },
        griditem:{
            alignItems:'baseline',
            display:'flex',
            justifyContent:'center',
            fontSize:'30px',
            lineHeight:'1'
        },
        typo:{
            fontWeight:'600',
            display:'flex',
            flexDirection:'row'
        },
        info:{
            fontSize:'20px',
            letterSpacing:'.2em',
            padding:'0 0 0 .5rem',
            textTransform:'uppercase'
        },
        
    }))
    const classes =useStyles();
    return (
        
            <React.Fragment>
      <CssBaseline />
      
     
      <Grid className={classes.navbox} container>
        
        <Grid className={classes.griditem} item xs={12} sm={12} md={4}>
            <Typography variant="h5" component="h5" className={classes.typo}>450+</Typography>
            <Typography varient="p" component="p" className={classes.info}>partners</Typography>
        </Grid>
        <Grid className={classes.griditem} item xs={12} sm={12} md={4} >
        <Typography variant="h5" component="h5" className={classes.typo}>35+</Typography>
            <Typography varient="p" component="p" className={classes.info}>countries</Typography>
        </Grid> 
        <Grid className={classes.griditem} item xs={12} sm={12} md={4} >
        <Typography variant="h5" component="h5" className={classes.typo}>10M+</Typography>
            <Typography varient="p" component="p" className={classes.info}>messages</Typography>
          </Grid>
        </Grid> 
       </React.Fragment>
    )
}

export default CounterRow
