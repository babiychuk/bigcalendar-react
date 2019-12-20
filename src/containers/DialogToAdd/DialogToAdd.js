import React from "react";


import { withStyles } from "@material-ui/core/styles";

import { HuePicker } from 'react-color';

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
    p20: {
      padding: "20px",
    },
    w100: {
      width: '100%',
    },
    errorMess: {
      backgroundColor: '#ffcfcf',
      padding: '5px',
      fontSize: '16px',
      color: '#ff6363',
    },
    addNewTaskTittle: {
      backgroundColor: '#98FB98',
    },
    colorTittle: {
      backgroundColor: '#ffcfcf',
    }
  });

class DialogToAdd extends React.Component {

    render() {
        
    const { classes } = this.props;   
        return (
            <Dialog
                open={this.props.modalForm}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="customized-dialog-title" className={classes.addNewTaskTittle}>
                    <Typography>Добавить новое задание <b>{this.props.nameLanding}</b></Typography>
                </DialogTitle>
                <DialogContent dividers>

                    <Grid container>
                        {this.props.showErrorMess ?
                            <div className={classes.errorMess}>
                                Заполните обязательное поле</div> :
                            null
                        }
                        <Grid item xs={12}>
                            <TextField
                                label="Input text"
                                name="add"
                                onChange={e => this.props.inputTitleTask(e.target.value, 'add')}
                                variant="outlined"
                                fullWidth={true}
                                margin="normal"
                                inputProps={{ maxLength: 30 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component={'span'} id="discrete-slider" gutterBottom>
                                Цвет текста
                      <HuePicker color={this.props.hexColor}
                                    onChangeComplete={(color) => this.props.setColorTask(color.hex, 'add')} />
                            </Typography>
                        </Grid>

                    </Grid>
                    <DialogActions>
                        <Button variant="outlined" color="primary"
                            onClick={() => this.props.addTask()}>
                            Добавить
                          </Button>
                        <Button variant="outlined" color="primary"
                            onClick={() => this.props.handleCloseModal('add')}>
                            Закрыть
                          </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        );
    }
}

export default withStyles(styles)(DialogToAdd);
