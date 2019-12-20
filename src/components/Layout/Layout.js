import React from "react";
import withRoot from "../../withRoot";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  main: {
    [theme.breakpoints.down("xs")]: {
      minHeight: 300  
    },
    
    [theme.breakpoints.up("sm")]: {
      minHeight: 457  
    },
    
  },
});
class Layout extends React.Component {
  constructor(props) {        
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div> 
        <NavMenu />
        <main className={classes.main}>
          {this.props.children}
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
export default withRoot(withStyles(styles)(Layout));