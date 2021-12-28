import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
     root:{
         maxWidth:'1200px',
         width:'100%',
         paddingBottom:'3.2rem',
         margin:'0 auto',
         display:'grid',
         gridTemplateColumns:'550px 550px',
         gridGap:'1rem',
         marginTop:'0px',
         [theme.breakpoints.down('md')]: {
            width:'100%',
            display:'flex',
            flexDirection:'column',
            flexWrap:'wrap',

           },
     },
     swiper:{
         [theme.breakpoints.up('md')]:{
            display:'grid',
            gridGap:'1rem',
            gridTemplateColumns:'112px auto'
         }
         
    },
    swiper_left:{
        maxWidth:'112px'
    },
    testimonial_widget:{
        display:'flex',
        alignItems:'center',
        flexWrap:'wrap'
    },
    widget_icon:{
        fontSize:'14px',
        margin:'4px'
    },
    title:{
        fontWeight:'600',
        color:'#6852fb'
    },
    role:{
        backgroundColor:'#e8e4ff',
        borderRadius:'5px',
        color:'#6852fb',
        fontWeight:'500',
        lineHeight:'1.4',
        padding:'2px 8px',
        marginLeft:'2px'
    },
    description:{
        backgroundColor:'#fff',
        borderRadius:'0 1rem 1rem 1rem',
        boxShadow:'0 2px 20px',
        fontSize:'16px',
        lineHeight:'1.5136',
        margin:'8px 0 0',
        overflow:'hidden',
        padding:'1rem'
    }
    

}))

const TestimonialCards = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.swiper}>
              <div className={classes.swiper_left}>
               <div className={classes.imgbox}>
               <img width='90px' height='90px'  src = "assets/unibuddy18.png" />
               </div>
              </div>
              <div className={classes.swiper_right}>
                  <div className={classes.testimonial_widget}>
                      <div className={classes.widget_icon}>
                      <img src = "assets/unibuddy-icon.svg" />
                      </div>
                      <div className={classes.title}>
                          AMY
                      </div>
                      <div className={classes.role}>
                          Prospective Student
                      </div>

                  </div>
                  <div className={classes.description}>
                  Having someone that I spoke to prior to coming to the university made me feel more welcome and comfortable
                  </div>
              </div>
            </div>

            <div className={classes.swiper}>
              <div className={classes.swiper_left}>
               <div className={classes.imgbox}>
               <img width='90px' height='90px'  src = "assets/unibuddy20.png" />
               </div>
              </div>
              <div className={classes.swiper_right}>
                  <div className={classes.testimonial_widget}>
                      <div className={classes.widget_icon}>
                      <img src = "assets/unibuddy-icon.svg" />
                      </div>
                      <div className={classes.title}>
                          AMY
                      </div>
                      <div className={classes.role}>
                          Prospective Student
                      </div>

                  </div>
                  <div className={classes.description}>
                  Having someone that I spoke to prior to coming to the university made me feel more welcome and comfortable
                  </div>
              </div>
            </div>

        </div>
    )
}

export default TestimonialCards
