import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
    root:{
       
        marginTop:'3.2rem',
        position:'relative',
        [theme.breakpoints.down('md')]: {
            width:'100%'
           },
    },
    testimonialtop:{
        margin:'auto',
        maxWidth:'1200px',
        width:'100%',
        paddingBottom:'3.2rem',
        paddingTop:'3.2rem',
        
    },
    testimonialbody:{
        [theme.breakpoints.up('md')]: {
            gridGap:'1rem',
            alignItems:'flex-end',
            display:'grid',
            gridTemplateColumns:'580px 60px',
            justifyContent:'space-between',
           },
    },
    img1:{
        [theme.breakpoints.down('md')]: {
            display:'none'
           },
    },
    h3:{
        fontWeight:'400',
        letterSpacing:'.2rem',
        
    },
    h2:{
        margin:'0.4em 0 0 0',
        fontSize:'2rem',
        [theme.breakpoints.down('md')]:{
            fontSize:'1.7rem'
        }
    },
    reviews:{
        margin:'0 auto',
        maxWidth:'1200px',
        padding:'0 8rem',
        width:'100%'
    },
    review:{
        [theme.breakpoints.up('md')]:{
            gridGap:'2rem',
            display:'grid',
            gridTemplateColumns:'168px auto'
        }
        
    },
    test_description:{
        fontStyle:'italic'
    },
    testimonialright:{
        margin:'2rem 2rem 2rem 2rem',
        padding:'auto',
        fontSize:'1rem',
        letterSpacing:'.1rem'
    },
    testimonial_author:{
        [theme.breakpoints.up('md')]:{
            display:'grid',
            gridTemplateColumns:'80px auto',
            maxWidth:'400px',
            padding:'2rem 0'
        },
      
       
    },
    author_right:{
        backgroundColor:'#fff',
        borderRadius:'100%',
        height:'88px',
        width:'88px',
        padding:'6px'
    },
    img:{
        height:'100%',
        objectFit:'contain',
        width:'100%'
    },
    testimonial_left:{
        padding:'0 0 0 1rem'
    },
    title:{
        fontWeight:'600',
        color:'#6852fb'
    }
   

}))
const Partners = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <div className={classes.testimonialtop}>
           <div className={classes.testimonialbody}>
               <div className={classes.body}>
                   <h3 className={classes.h3}>
                       OUR PARTNERS
                   </h3>
                   <h2 className={classes.h2}>See why our partners love us</h2>

               </div>
               <div className={classes.img1}>
               <img  width="60" height="60"src = "assets/metric-corner-icon.svg" />
               </div>
           </div>
           <div ClassName={classes.reviews}>
             <div className={classes.review}>
               <div className={classes.testimonialleft}>
                   
                     <div className={classes.image}>
                     <img src = "assets/unibuddy15.svg" />
                     </div>
               </div>
               <div className={classes.testimonialright}>
                   <div className={classes.test_description}>
                   "Peer-to-peer is the most authentic recruitment method. Digital platforms like Unibuddy have proven to be a really effective recruitment tool for UWA. Our Unibuddies get to share their personal experiences and give advice. And we’ve found that the conversion rates are significantly higher for students that have communicated with a Unibuddy ambassador."
                   </div>
                   <div className={classes.testimonial_author}>
                     <div className={classes.author_right}>
                     <img className={classes.img} src = "assets/unibuddy17.png" />
                     </div>
                     <div className={classes.testimonial_left}>
                         <div className={classes.title}>
                             Trish Rechichi
                         </div>
                         <div className={classes.description_author}>
                         Director of Future Students at University of Western Australia
                         </div>
                     </div>
                   </div>
               </div>
             </div>
           </div>
          </div>
        </div>
    
    )
}

export default Partners
