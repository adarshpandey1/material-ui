import React from 'react';
import {AppBar,Tab,Tabs,Button} from '@material-ui/core';
import {useState,useEffect} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles,useTheme} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';




const drawerWidth = 240;
const useStyles =makeStyles(theme =>({
    root:{
        background: '#fff',
        left: '0',
        position: 'fixed',
        top: '0',
        width: '100%',
        maxHeight:'116px',
        [theme.breakpoints.down('md')]: {
           width:'100%',
           
          },
       
    },
    toolbar:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        margin:'0 auto',
        maxWidth:'1200px',
        padding:'0 4rem',
        width:'100%'
    },
    tabs:{
        textDecoration:'none',
        display:'flex',
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
       
    },
    tab:{
        display:'flex',
        fontSize:'12px',
        color:'#3e3e48',
        listStyle:'none',
        fontWeight:'600',
       alignItems:'center',
      
       margin:'auto'
        
      
       
    },
   
    button:{
        display:'flex',
        justifyContent:'right',
        margin:'5px',
    },
    logo:{
        display:'flex',
        justifyContent:'flex-start',
        letterSpacing:'0.2em'
    },
    span:{
        fontWeight:'600',
        
    },
    img:{
        display:'inline-block',
        height:'32px',
        width:'auto'
    },
    ul:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
       
    },
    href:{
        color:'#3e3e48',
        display:'inline-block',
        fontSize:'12px',
        fontWeight:'600',
        letterSpacing:'.16em',
        padding:'18px 14.4px',
        textDecoration:'none',
        textTransform:'uppercase'    
  
    },
    menu:{
        display:'block',
        left:'50%',
        minWidth:'180px',
        padding:'1rem 0 0',
        position:'absolute',
        top:'3rem',
        pointerEvents:'none',
        margin:'70px 0 0 0'
    },
    menulist:{
        backgroundColor:'#fff',
        borderRadius:'0 0 5px 0',
        boxShadow:'0px',
        padding:'0.5rem 0.5rem',
        color:'#3e3e48',
        fontSize:'12px',
        fontWeight:'600',
        letterSpacing:'.16em',
        textDecoration:'none'

    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },

}))

const NavBar=(props) => {
    const { window } = props;
    const classes =useStyles();
    const theme = useTheme();
    const [value,setValue]  = useState(0);
    const [anchorEl,setAnchorEl] = useState(null);
    const [anchorE2,setAnchorE2] = useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
         setMobileOpen(!mobileOpen);
        
      };

    const handleClickTab = (e, newValue) => {
       // console.log(newValue);
        setValue(newValue);
    }
    const handleOpenMenu = (e) => {
        setAnchorEl(e.currentTarget);
        
    }
    const handleOpenMenu2 = (e) => {
        setAnchorE2(e.currentTarget);
        
    }
    const handleClose = () => {
        setAnchorEl(null);     
      };
      const handleClose2 = () => {
        setAnchorE2(null);     
      };

      const drawer = (
        <div>
          
          <Divider />
          <List>
            {['PRODUCTS', 'WHY UNIBUDDY', 'LEARN', 'ABOUT US', 'PARTNERS'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            
            ))}
          </List>
          <Divider />
          
        </div>
      );

      const container = window !== undefined ? () => window().document.body : undefined;

    
    return(
        <>
      <AppBar color="black" position="static" className={classes.root}>
        {/* <div className={classes.navbox}>   */}
         <div className={classes.toolbar}>
         <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
             {/* <div className={classes.xyz}> */}
             <div className={classes.logo}>
             <img className={classes.img} src = "assets/unibuddy-logo.svg" />
           </div>
         
           <div 
            className={classes.tabs}
            onChange={handleClickTab}
            indicatorColor='primary' 
            value={value}>
                <ul className={classes.ul}>
               <Link 
               href="#"
               className={classes.tab}
               area-controls='menu1'
               onMouseOver={handleOpenMenu}
               onMouseOut ={handleClose}
               >
              <div className={classes.href}>PRODUCTS</div>
             </Link>
             <Link href="#"
             className={classes.tab}
             area-controls='menu1'
             onMouseOver={handleOpenMenu}
             onMouseOut ={handleClose}
             >
              <div className={classes.href}>WHY UNIBUDDY</div>
             </Link>
             <Link 
             href="#"
             className={classes.tab}
             area-controls='menu1'
             onMouseOver={handleOpenMenu}
             onMouseOut ={handleClose}
             >
              <div className={classes.href}>LEARN</div>
             </Link>
             <Link 
             href="#"
             className={classes.tab}
             area-controls='menu1'
             onMouseOver={handleOpenMenu}
             onMouseOut ={handleClose}
             >
              <div className={classes.href}>ABOUT US</div>
             </Link>
             <Link href="#"
             className={classes.tab}
             area-controls='menu1'
             onMouseOver={handleOpenMenu}
             onMouseOut ={handleClose}
             >
              <div className={classes.href}>CAREERS</div>
             </Link>
               <Button className={classes.button} variant="contained" color="secondary" disableElevation>
                 BOOK A DEMO
               </Button>
         
               </ul>
           </div>
         
         </div>

         <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        </nav>
         
      </AppBar>
      <Menu className={classes.menu} id='menu1' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuList className={classes.menulist}>UNIBUDDY CHAT</MenuList>
          <MenuList className={classes.menulist}>UNIBUDDY EVENT</MenuList>
          <MenuList className={classes.menulist}>CHAT TO STAFF</MenuList>
          <MenuList className={classes.menulist}>DISCOVER</MenuList>
          
          
        
      </Menu>
     
      </>
    )
  }

  export default NavBar
