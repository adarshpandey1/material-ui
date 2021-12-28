import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
   root:{
       [theme.breakpoints.up('md')]:
       {
        paddingBottom:'3.2rem',
        paddingTop:'3.2rem'
       },
       backgroundColor:'#f0f2f2',
       
   },
   rowinside:{
       margin:'0 auto',
       maxWidth:'1200px',
       padding:'0 4rem',
       width:'100%',
       [theme.breakpoints.down('sm')]: {
        width:'100%',
        padding:'15px'
       },
   },
   h3:{
       fontWeight:'400',
       letterSpacing:'.2em',
       paddingBottom:'1.6rem',
       paddingTop:'1.6rem',
       textTransform:'uppercase'
   },
   bulletrow:{
       [theme.breakpoints.up('md')]:
       {
        display:'grid',
        gridGap:'1rem',
        gridTemplateColumns:'repeat(3,minmax(0,1fr))',
        paddingBottom:'1.6rem',
        paddingTop:'1.6rem'
       }
      

   },
   bulletrowitem:{
       display:'flex',
       flexDirectiom:'row',
       marginBottom:'15px'

   },
   bullet_item_left:{
   },
   number:{
     borderbottom:'6 px solid #01d4cf',
     color:'#6852fb',
     fontSize:'2.64rem',
     fontWeight:'600',
     lineHeight:'1',
     margin:'0 1rem 0 0',
     padding:'0 0 4px'
   },
   heading:{
     margin:'0 0 1rem',
     maxWidth:'200px'
   },
   titile:{
       margin:'0',
       fontSize:'1.4rem',
       fontWeight:'600'
   },
   description:{
       fontSize:'16px',
       maxWidth:'243px',
       lineHeight:'1.5',
       fontSize:'1.1rem',
       margin:'auto',
       

   }
}))  
const Expert = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.rowinside}>
              <h3 className={classes.h3}>
                  why unibuddy
              </h3>
            
            <div className={classes.bulletrow}>
               <div className={classes.bulletrowitem}>
                 <div className={classes.bullet_item_left}>
                     <div className={classes.number}>
                         1
                     </div>
               </div>
               <div className={classes.bullet_item_right}>
                     <div className={classes.heading}>
                         <h3 className={classes.titile}>Designed for students</h3>
                     </div>
                     <div className={classes.description}>
                     Using a student-centric platform allows you to proactively attract, nurture and engage with students.

                     </div>
               </div>
               </div>
               <div className={classes.bulletrowitem}>
                 <div className={classes.bullet_item_left}>
                     <div className={classes.number}>
                         2
                     </div>
               </div>
               <div className={classes.bullet_item_right}>
                     <div className={classes.heading}>
                         <h3 className={classes.titile}>Built by higher ed experts</h3>
                     </div>
                     <div className={classes.description}>
                     The student decision-making journey has entered the digital age, where peer-to-peer networking happens online. Evolve with your students and meet them there.

                     </div>
               </div>
               </div>
               <div className={classes.bulletrowitem}>
                 <div className={classes.bullet_item_left}>
                     <div className={classes.number}>
                         3
                     </div>
               </div>
               <div className={classes.bullet_item_right}>
                     <div className={classes.heading}>
                         <h3 className={classes.titile}>Shaped by industry needs</h3>
                     </div>
                     <div className={classes.description}>
                     The Unibuddy team is a community of higher ed professionals with more than 100 years experience, who know the sector in and out.

                     </div>
               </div>
               </div>
            </div>
        </div>
        </div>
    )
}

export default Expert
