import React from "react";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";


const styles = theme => (
{ 
    footer: {
        marginTop: theme.spacing(1) * 10, 
        backgroundColor: theme.palette.background.footer,
        padding: `${theme.spacing(1) * 4}px ${theme.spacing(1) * 6}px 2px ${theme.spacing(1) * 6}px`,
      },
      text:{
          color: "#cccccc"
      }
});
    

class Footer extends React.Component{

    constructor(props) {        
        super(props);
        this.state = {}
    }

    render(){
        const { classes } = this.props;
        return(            
            <footer className={classes.footer}>
                <Typography variant="h4" align="center" gutterBottom color="primary" style={{fontWeight: 300}}>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" className={classes.text} component="p"  >
                    Something here to give the footer a purpose!
                </Typography>
                <br />
                <Typography variant="caption" gutterBottom color="primary" align="center" component="p">
                    © 2019 All Rights Reserved.
                </Typography>
                
            </footer>
        );
    }
}

export default withWidth()(withStyles(styles)(Footer));