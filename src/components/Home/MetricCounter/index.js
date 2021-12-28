import React from 'react'
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root:{
        margin:'0 0 0 0',
        maxWidth:'1536px',
        width:'100%',
        height:'570px',
        backgroundColor:'#f0f2f2;',
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            height:'auto'
           },
        
    },
    content:{
        margin:'0 auto',
        maxWidth:'1200px',
        paddingBottom:'3.2rem',
        paddingTop:'3.2rem',
        width:'100%',
        [theme.breakpoints.down('md')]: {
            width:'100%',
            paddingTop:'15px',
            paddingBottom:'15px'
           },
    },
    uppercontent:{
           display:'flex',
           flexDirection:'column',
           flexWrap:'wrap',
          
        [theme.breakpoints.up('md')]: {
            gridGap:'1rem',
            alignItems:'flex-end',
            display:'grid',
            gridTemplateColumns:'580px 60px',
            justifyContent:'space-between'
        }
        
    },
    
    h3:{
        fontWeight:'400',
        letterSpacing:'.2em',
        textTransform:'uppercase'
    },
    h2:{
        fontSize:'2rem',
        lineHeight:'1.2384',
        margin:'0.4em 0 0 0'
    },
    img1:{
        objectFit:'contain',
        width:'100%',
        height:'100%',
        [theme.breakpoints.down('sm')]: {
            display:'none'
           },
    },
    metriccounteritems:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        paddingBottom:'1.6rem',
        paddingTop:'1.6rem',
        [theme.breakpoints.down('md')]: {
            display:'flex',
            flexDirection:'column',
            flexWrap:'wrap',
            padding:'15px'
           },
    },
    counteritem:{
        display:'flex',
        alignItems:'flex-start',
        flex:'33.33%',
        maxWidth:'33.33%',
        paddingBottom:'3.2rem',
        paddingTop:'3.2rem'
    },
    imgbox:{
        backgroundColor:'#fff',
        display:'grid',
        borderRadius:'50%',
        alignItems:'center',
        boxShadow:'0 2px 20px',
        height:'96px',
        justifyItems:'center',
        overflow:'hidden',
        padding:'6px',
        placeItems:'center',
        width:'96px'
    },
    img:{
        objectFit:'contain',
        width:'100%',
        height:'100%',
       
    },
    counteritemright:{
        padding:'0 0 0 2rem'
    },
    itembox:{
        borderBottom:'6px solid #01d4cf',
        color:'#6852fb',
        fontSize:'3.56rem',
        fontWeight:'600',
        lineHeight:'1',
        margin:'0 0 4px',
        padding:'0 0 4px',
        display:'inline-block'
        
    },
    downcontent:{
        color:'#3E3E48',
        fontSize:'20px',
        fontFamily:'sans-serif'
    }
}));

const MetricCounter = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <div className={classes.content}>
             <div className={classes.uppercontent}>
               <div>
                   <h3 className={classes.h3}>Our Impact</h3>
                   <h2 className={classes.h2}>Increase the number of students that apply and enroll</h2>
               </div>
               <div clasName={classes.img_none}>
               <img className={classes.img1} src = "assets/metric-corner-icon.svg" />
               </div>
             </div>
             <div className={classes.metriccounteritems}>
               <div className={classes.counteritem}>
                  <div className={classes.counteritemleft}>
                      <div className={classes.imgbox}>
                      <img className={classes.img} src = "assets/unibuddy8.png" />
                      </div>
                  </div>
                  <div className={classes.counteritemright}>
                    <div className={classes.itembox}>
                        94%
                    </div>
                    <div className={classes.downcontent}>
                        users applied
                    </div>
                  </div>
               </div>
               <div className={classes.counteritem}>
                  <div className={classes.counteritemleft}>
                      <div className={classes.imgbox}>
                      <img className={classes.img} src = "assets/unibuddy9.png" />
                      </div>
                  </div>
                  <div className={classes.counteritemright}>
                    <div className={classes.itembox}>
                        28%
                    </div>
                    <div className={classes.downcontent}>
                        yied rate
                    </div>
                  </div>
               </div>
               <div className={classes.counteritem}>
                  <div className={classes.counteritemleft}>
                      <div className={classes.imgbox}>
                      <img className={classes.img} src = "assets/unibuddy11.svg" />
                      </div>
                  </div>
                  <div className={classes.counteritemright}>
                    <div className={classes.itembox}>
                        90%
                    </div>
                    <div className={classes.downcontent}>
                    of accepted users go on to enroll
                    </div>
                  </div>
               </div>
             </div>
           
            
            </div>
            
        </div>
    )
}

export default MetricCounter
