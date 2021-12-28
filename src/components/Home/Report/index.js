import React from 'react'
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root:{
      margin:'0 0 0 0',
      maxWidth:'1550px',
      width:'100%',
      height:'100px',
      backgroundColor:'red',
      [theme.breakpoints.down('md')]: {
        width:'100%',
        height:'auto'
        
       },
      
  },
  content:{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems:'center',
      color:'#fff',
      justifyContent:'center',
      margin:'auto',
      padding:'0 4rem',
      width:'100%',
      [theme.breakpoints.down('md')]: {
        width:'100%',
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        paddingLeft:'15px',
        paddingRight:'15px',
        
       },

  },
  contentbody1:{
      margin:'1.2rem 3rem 0 0',
      [theme.breakpoints.down('md')]: {
        padding:'10px',
        margin:'0 0 15px 0'
        
       },
  },
  h3:{
      fontSize:'1.32rem',
      lineHeight:'1.376'
  },
  button:{
      color:'white'
  }
    
  }));

const Report = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.contentbody1}>
                    <h3 className={classes.h3}>Use our insights for your marketing</h3>
                </div>
                <div className={classes.contentbody1}>
                <Button className={classes.button} variant="outlined" color="white">
  DOWNLOAD REPORT
</Button>
                </div>
            </div>
      </div>
    )
}

export default Report
