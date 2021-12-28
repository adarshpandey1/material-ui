import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    margin:'0 auto',
    maxWidth:'1250px',
    width:'100%',
   
    
  },
  tabbox:{
    marginTop:'3.2rem',
    marginBottom:'3.2rem',
  },
  tabs:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    margin:'auto',
  },
  tab:{
    borderBottom:'6px solid #f0f2f2',
    cursor:'pointer',
    flex:'0 0 33.33%',
    fontWeight:'600',
    letterSpacing:'.2em',
    maxWidth:'33.33%',
    position:'relative',
    textAlign:'center',
    textTransform:'uppercase'
  }
});

const TabsBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabbox}>
      <Tabs className={classes.tabs}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className={classes.tab} label="unibuddy chat" />
        <Tab className={classes.tab} label="unibuddy events" />
        <Tab className={classes.tab} label="unibuddy discover" />
      </Tabs>
      </div>
    </div>
  );
}
export default TabsBar;