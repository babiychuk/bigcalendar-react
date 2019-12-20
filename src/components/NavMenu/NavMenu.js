import React from "react";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import EventIcon from '@material-ui/icons/Event';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";


const styles = theme => ({
  root: {
    width: "100%",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(1) * 4,
  },
  userAvatar: {
    marginRight: theme.spacing(1) * 2,
  },
  content: {
    padding: theme.spacing(1) * 1
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -15,
    marginRight: 10,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    textDecoration: "none",
    fontWeight: 300,
    fontSize: "1.5rem"
  },
  userinfo: {
    backgroundColor: theme.palette.primary.dark,
  },
  whiteColor: {
    color: "white"
  },
  lightGrayColor: {
    color: "#efefef"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1) * 1,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1) * 3,
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(1) * 6,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1) * 7,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 300,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
});

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      open: false,
      search: "",
    };
  }


  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };        


  buildLeftNavBar = (items) => {
    return items.map((item) => (
      <ListItem button key={item.id} component={Link} to={item.href} >
        <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    ));
  };


  render() {
    const { classes } = this.props;

    const leftsideList = (
      <SwipeableDrawer
        open={this.state.left}
        onClose={this.toggleDrawer("left", false)}
        onOpen={this.toggleDrawer("left", true)}
      >
        <List component="nav" className={classes.list + " " + classes.userinfo}>
          <ListItem>
            <Avatar className={classes.userAvatar}>
              <IconButton >
                <Icon>star</Icon>
              </IconButton>
            </Avatar>
            <ListItemText classes={{ primary: classes.whiteColor, secondary: classes.lightGrayColor }} primary="Guest" secondary="Welcome" />
          </ListItem>
        </List>

        <Divider />
        <List component="nav" className={classes.list}>
          <ListItem button component={Link} to={'/calendar'}>
            <ListItemIcon>
              <Icon>
                <EventIcon />
              </Icon>
            </ListItemIcon>
            <ListItemText primary='Calendar' />
          </ListItem>
        </List>

      </SwipeableDrawer>
    );



    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer("left", true)} className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon aria-label="Search" />
              </div>
              <InputBase
                aria-label="Search"
                placeholder="Search transactions, invoices or help"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
              
              <IconButton
                aria-haspopup="true"
                color="inherit"
              >
                <Icon>person</Icon>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>        
        {leftsideList}        
      </div>
    );
  }
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavMenu);
