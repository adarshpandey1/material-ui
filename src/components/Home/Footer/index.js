import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root:{
        backgroundColor:'#f0f2f2',
        height:'auto'
    },
    footer_inside:{
        [theme.breakpoints.up('md')]: {
          gridGap:'1rem',
          display:'grid',
          gridTemplateColumns:'repeat(4,minmax(0,1fr))',
          margin:'5px auto',
          maxWidth:'1200px',
          padding:'10px 4rem',
          width:'100%',
           },
    },
    footer_menu_title:{
        fontSize:'18px',
        fontWeight:'600',
        letterSpacing:'.2rem',
        margin:'1rem 0 1rem',
        padding:'2px',
        textTransform:'uppercase'
        },
    footerMenuItem:{
        marginTop:'20rem',
        padding:'100px'
    },
    href:{
        color:'#3e3e48',
        fontSize:'12px',
        textDecoration:'none',
        display:'inine-block',
        marginTop:'20px'
        },
    fotter_body:{
        marginTop:'1rem',
        marginBottom:'1rem'
        },
    subscribe_row:{
        margin:'0 auto',
        maxWidth:'1200px',
        padding:'0 4rem',
        width:'100%',
        [theme.breakpoints.down('md')]:
        {
            padding:'15px'
        }
    },
    row_inside:{
        [theme.breakpoints.up('md')]:{
            display:'grid',
            gridGap:'1rem',
            gridTemplateColumns:'repeat(2,minmax(0,1fr))',
            paddingBottom:'3.2rem',
           paddingTop:'3.2rem'
        }
       
    },
    inside_left_title:{
        fontSize:'18px',
        fontWeight:'600',
        letterSpacing:'.2em',
        margin:'0 0 1rem',
        textTransform:'uppercase',
       
    },
    inside_left_body:{
        fontSize:'14px',
        maxWidth:'400px'
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.footer_inside}>
                <div className={classes.footer_menu}>
                    <div className={classes.footer_menu_title}>
                        Get to know us
                        </div>
                        <div className={classes.fotter_body}>
                        <div class="FooterMenuItem">
                            <a className={classes.href} href="">About</a>
                            </div>
                        <div class="FooterMenuItem">
                            <a className={classes.href} href="">Careers</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">Resources</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">Products</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">Partners</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">Newsroom</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">Help Centre</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">University Log-in</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">Ambassador Log-in</a>
                            </div>
                            </div>
                    </div>

                    <div className={classes.footer_menu}>
                    <div className={classes.footer_menu_title}>
                       PRODUCTS
                        </div>
                        <div className={classes.fotter_body}>
                        <div class="FooterMenuItem">
                            <a className={classes.href} href="">Unibuddy Chat</a>
                            </div>
                        <div class="FooterMenuItem">
                            <a className={classes.href} href="">Unibuddy Events</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">Discover</a>
                            </div>
                            </div>
                    </div>

                    <div className={classes.footer_menu}>
                    <div className={classes.footer_menu_title}>
                    WHY US
                        </div>
                        <div className={classes.fotter_body}>
                        <div class="FooterMenuItem">
                            <a className={classes.href} href="">For Student Recruitment</a>
                            </div>
                        <div class="FooterMenuItem">
                            <a className={classes.href} href="">For Ambassadors</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">For Widening Participation</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">For international recruitment</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">For Domestic Admissions</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">For Higher Education Marketing</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">For Students</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">For Educational Equity</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">For International Admissions</a>
                            </div>
                            </div>
                    </div>

                    <div className={classes.footer_menu}>
                    <div className={classes.footer_menu_title}>
                    TERMS OF USE
                        </div>
                        <div className={classes.fotter_body}>
                        <div class="FooterMenuItem">
                            <a className={classes.href} href="">Terms of Use</a>
                            </div>
                        <div class="FooterMenuItem">
                            <a className={classes.href} href="">Privacy Policy</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">Acceptable Use Policy</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">Cookie Policy</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">Accessibility Policy</a>
                            </div>
                            <div class="FooterMenuItem">
                            <a className={classes.href} href="">Sub-processors</a>
                            </div>
                            </div>
                    </div>
                </div>
                     <div className={classes.subscribe_row}>
                           <div className={classes.row_inside}>
                               <div className={classes.inside_left}>
                                   <div className={classes.inside_left_title}>
                                   SUBSCRIBE FOR UPDATES
                                       </div>
                                       <div className={classes.inside_left_body}>
                                       Join 400+ global partners who trust Unibuddy to help them help students find a place at their institution.
                                           </div>
                                   </div>
                                   <div className={classes.inside_left_title}>
                                   <iframe src="https://insight.unibuddy.com/l/848943/2020-05-18/hzbr" width="100%"  frameborder="0" title="Form" data-lf-yt-playback-inspected-ywvko4x1kzeaz6bj="true"></iframe>
                                       </div>

                               </div>

                         </div>
        </div>
    )
}

export default Footer
