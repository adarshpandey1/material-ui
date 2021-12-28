import React from 'react';
import NavBar from '../../components/Home/NavBar';
import Banner from '../../components/Home/Banner';
import CounterRow from '../../components/Home/CounterRow';
import ImageRow from '../../components/Home/ImageRow';
import TabsBar from '../../components/Home/TabsBar';
import TabContent from '../../components/Home/TabContent';
import Report from '../../components/Home/Report';
import MetricCounter from '../../components/Home/MetricCounter';
import Partners from '../../components/Home/Partners';
import TestimonialCards from '../../components/Home/TestimonialCards';
import Expert from '../../components/Home/Expert';
import Blog from '../../components/Home/Blog';
import Footer from '../../components/Home/Footer';
import {makeStyles,useTheme} from '@material-ui/core';


const useStyles =makeStyles(theme =>({
  home:{
    maxWidth:'1600px',
    [theme.breakpoints.down('md')]: {
      paddingLeft:'15px',
      paddingRight:'15px'
    },
    
  }
}))

const Home = () => {
  const classes =useStyles();
    return (
        <div className={classes.home}>
      <NavBar />
      <Banner />
      <CounterRow />
      <ImageRow />
      <TabsBar />
      <TabContent />
      <Report />
      <MetricCounter />
      <Partners />
      <TestimonialCards />
      <Expert />
      <Report />
      <Blog />
      <Footer />
      </div>
    )
}

export default Home
