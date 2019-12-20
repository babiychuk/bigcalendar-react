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
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/moment";

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

class DialogToUpdate extends React.Component {
  
  render(){
    const { classes } = this.props;    
    return(      
        <Dialog
        open={this.props.modalUpdate}
        aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.colorTittle} id="customized-dialog-title">
          <Typography>Редактировать задание <b>{this.props.nameLanding}</b></Typography>
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
                label="Update text"
                name="update"
                value={this.props.activeTask.title}
                onChange={e => this.props.inputTitleTask(e.target.value, e.target.name)}
                variant="outlined"
                fullWidth={true}
                margin="normal"
                inputProps={{ maxLength: 30 }}
              />
            </Grid>
            <MuiPickersUtilsProvider
              utils={DateFnsUtils}>
              <Grid item xs={12}>
                <DateTimePicker
                  autoOk
                  ampm={false}
                  disableFuture
                  value={this.props.activeTask.start}
                  onChange={date => this.props.changeDateTask(date, 'start')}
                  label="Начало задания"
                />
              </Grid>
              <Grid item xs={12}>
                <DateTimePicker
                  autoOk
                  ampm={false}
                  disableFuture
                  value={this.props.activeTask.end}
                  onChange={date => this.props.changeDateTask(date, 'end')}
                  label="Конец задания"
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <Grid item xs={12}>
              <Typography component={'span'} id="discrete-slider" gutterBottom>
                Цвет текста
                      <HuePicker color={this.props.activeTask.hexColor}
                  onChangeComplete={(color) => this.props.setColorTask(color.hex, 'update')} />
              </Typography>
            </Grid>

          </Grid>
          <DialogActions>
            <Button variant="outlined" color="primary"
              onClick={() => this.props.changeTask()}>
              Изменить
                          </Button>
            <Button variant="outlined" color="primary"
              onClick={() => this.props.deleteTask()}>
              Удалить
                          </Button>
            <Button variant="outlined" color="primary"
              onClick={() => this.props.handleCloseModal('update')}>
              Закрыть
                          </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>      
    );    
  }
}

export default withStyles(styles)(DialogToUpdate);
