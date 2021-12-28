import React from 'react'
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme)=>({
    root:{
        margin:'3.2rem auto',
        maxWidth:'1200px',
        padding:'0 4rem',
        width:'100%',
        [theme.breakpoints.down('md')]: {
            width:'100%',
            paddingLeft:'15px',
            paddingRight:'15px'
           },
    },
    body:{
        [theme.breakpoints.up('md')]: {
            paddingBottom:'3.2rem',
            paddingTop:'3.2rem'
        }
        
    },
    bodytilte:{
        [theme.breakpoints.up('md')]: {
            display:'grid',
            gridGap:'1rem',
            gridTemplateColumns:'680px 60px',
            justifyContent:'space-between'
        }
        
    },
    h3title:{
        fontWeight:400,
        letterSpacing:'.2em', 
        textTransform:'uppercase'
       },
       
       h2:{
           fontSize:'2rem',
           lineHeight:'1.2384',
           [theme.breakpoints.down('md')]: {
               fontSize:'1.7rem',
               lineHeight:'1.02'
           }

       },
       img_block:{
           [theme.breakpoints.down('md')]:{
               display:'none'
           }
       },
       group_cards:{
           [theme.breakpoints.up('md')]:{
            paddingBottom:'3.2rem',
            paddingTop:'3.2rem',
            display:'grid',
            gridGap:'1rem',
            gridTemplateColumns:'repeat(3,minmax(0,1fr))',
           }

       },
       card:{
           display:'flex',
           flexDirection:'column',
           backgroundColor:'#fff',
           borderRadius:'0px 15px 15px 15px',
           lineHeight:'1.4',
           padding:'1rem',
           boxShadow:'0 2px 20px',
           [theme.breakpoints.down('md')]:{
             marginTop:'15px',
             marginBottom:'15px'
           }
           
       },
       card_image:{
           [theme.breakpoints.up('md')]:{
           height:'16.4vw',
           maxHeight:'200px',
           width:'100%'
           }
       },
       img:{
           height:'100%',
           width:'100%',
           objectFit:'cover'
       },
       title:{
           backgroundColor:'#e8e4ff',
           borderRaduis:'5px',
           color:'#6852fb',
           fontSize:'16px',
           fontWeight:'500',
           letterSpacing:'.2em',
           padding:'4px 16px',
           alignSelf:'flex-start',
           marginTop:'10px'
       },
       description:{
           fontSize:'1.1rem',
           fontWeight:'600',
           maxWidth:'300px',
           marginTop:'10px'
       },
       rowitem_cta:{
           display:'grid',
           alignItems:'flex-end',
           alignSelf:'flex-start',
           flex:'1 1 auto',

       },
       tab:{
          
           
           fontSize:'18px',
           fontWeight:'600',
           padding:'12px',
           marginLeft:'0px'
       },
       resources_button:{
           display:'flex',
           justifyContent:'center'
       },
       resource_btn:{
           borderColor:'#01d4cf',
           color:'#51595e',
           borderRadius:'5px',
           fontSize:'18px',
           fontWeight:'600',
           padding:'12px 24px'
       }
}))

const Blog = () =>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.bodytilte}>
                    <div className={classes.upperbox}>
                        <h3 className={classes.h3title}>
                        GET MORE OUT OF UNIBUDDY
                        </h3>
                        <h2 className={classes.h2}>Download our most recent content for more tips & tricks</h2>
                    </div>
                    <div className={classes.img_block}>
                        <img width="60" height="60" src="assets/unibuddy22.svg"/>
                    </div>
                </div>
                <div className={classes.group_cards}>
                  <div className={classes.card}>
                    <div className={classes.card_image}>
                    <img className={classes.img} src="assets/unibuddy23.png"/>
                    </div>
                    <div className={classes.title}>
                        NEW GUIDE
                    </div>
                    <div className={classes.description}>
                    2021 Higher-Ed events guide
                        </div>
                    <div className={classes.rowitem_cta}>
                    <Button className={classes.tab} color="primary">Read</Button>
                        </div>
                  </div>
                  <div className={classes.card}>
                  <div className={classes.card_image}>
                    <img className={classes.img} src="assets/unibuddy25.png"/>
                    </div>
                    <div className={classes.title}>
                    UNIBUDDY SUMMITS
                    </div>
                    <div className={classes.description}>
                    Bringing together thousands of Higher Ed professionals this June
                        </div>
                    <div className={classes.rowitem_cta}>
                    <Button className={classes.tab} color="primary">Book</Button>
                        </div>
                  </div>
                  <div className={classes.card}>
                  <div className={classes.card_image}>
                    <img className={classes.img} src="assets/unibuddy24.png"/>
                    </div>
                    <div className={classes.title}>
                    BLOG POST
                    </div>
                    <div className={classes.description}>
                    Getting started with ambassadors
                        </div>
                    <div className={classes.rowitem_cta}>
                    <Button className={classes.tab} color="primary">Read</Button>
                        </div>
                  </div>

            </div>
            <div className={classes.resources_button}>
            
            <Button className={classes.resource_btn}  variant="outlined" color="secondary">
        See all resources
      </Button>
                </div>
            </div>
        </div>
    )
}

export default Blog
