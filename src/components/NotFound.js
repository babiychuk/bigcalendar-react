import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const styles = theme => (
    {
        root: {
            flexGrow: 1,
            padding: theme.spacing(1),
            [theme.breakpoints.down("sm")]: {
                minHeight: 300,
            }
        }
    });


const NotFound = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <center>
                <Paper style={{ padding: 30 }}>
                    <Typography variant="h5" gutterBottom >
                        Page not foud
                </Typography>

                    <Typography color='error' variant="h1" gutterBottom>
                        404
                </Typography>
                    <p>
                        <Button href="/" color="secondary">
                            Return to Home Page
                    </Button>
                    </p>
                </Paper>

            </center>
        </div>
    )
};

NotFound.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);