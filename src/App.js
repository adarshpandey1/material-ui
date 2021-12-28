import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import {makeStyles,useTheme} from '@material-ui/core';

const useStyles =makeStyles(theme =>({
  app:{
    maxWidth:'1600px',
    [theme.breakpoints.down('md')]: {
      width:'100%',
      margin:'auto',
      padding:'auto'
    },
    
  }
}))

function App() {
  const classes =useStyles();
  return (
    <div className={classes.app}>
     <Home className={classes.home} />
    </div>
  );
}

export default App;
