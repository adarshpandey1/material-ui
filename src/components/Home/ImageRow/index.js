import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles, Button,useTheme} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {Card, CardMedia, Paper} from '@material-ui/core';
import Image from "material-ui-image";
import {imagelist} from '../constants';


const ImageRow = () => {
    const useStyles=makeStyles(theme =>({ 
        navbox:{
            maxWidth:'1200px',
            marginRight:'auto',
            marginLeft:'auto',
            marginTop:'0px',
            marginBottom:'0px',
            padding: '64px',
            display:'flex',
            justifyContent:'space-between',
            [theme.breakpoints.down('sm')]: {
                maxWidth:'380px'
               },
        },
        // imageitem:{
        //     flex:'0 0 auto',
        //     height:'60px',
        //     marginBottom:'1.6rem',
        //     marginTop:'1.6rem',
        //     maxWidth:'16.6%',
        //     width:'100%'
        // },
        img:{
            height:'70px',
            width:'160px',
            margin:'0px 0px',
            [theme.breakpoints.down('sm')]: {
                padding:'0',
                margin:'0'
               },
        },
        spacerrow:{
            padding:'0px',
            position:'relative'

        },
        spacerrow_line:{
            background: '#f0f2f2',
            height: '3px',
            width: '80%',
            margin:'auto',
            marginTop:'0px'
        }
    }))
    const classes =useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
        
       
        <Grid container className={classes.navbox} spacing={3}>
          
          <Grid item xs={12} sm={6} md={2} lg={2}>
              
              <img className={classes.img} src = "assets/unibuddy1.svg" />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2} >
          <img className={classes.img} src = "assets/unibuddy2.svg" />
          </Grid> 
          <Grid item xs={12} sm={6} md={2} lg={2} >
          <img className={classes.img} src = "assets/unibuddy3.svg" />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2} >
            <img className={classes.img} src = "assets/unibuddy4.svg" />
            </Grid>
            <Grid  item xs={12} sm={6} md={2} lg={2} >
            <img className={classes.img} src = "assets/unibuddy5.svg" />
            </Grid>
           
          </Grid> 
          <div className={classes.spacerrow}>
            
                <div className={classes.spacerrow_line}>

               
            </div>
                    </div>
          
         </React.Fragment>
    )
}

export default ImageRow
