import React from "react";
import events from "./events";
import Paper from "@material-ui/core/Paper";
import Calendar from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import DialogToAdd from "../../containers/DialogToAdd/DialogToAdd";
import DialogToUpdate from "../../containers/DialogToUpdate/DialogToUpdate";


moment.locale("en");
const localizer = Calendar.momentLocalizer(moment);
let allViews = Object.keys(Calendar.Views).map(k => Calendar.Views[k]);


const DragAndDropCalendar = withDragAndDrop(Calendar);

class Dnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalForm: false,
      modalUpdate: false,
      start: '',
      end: '',
      title: '',
      hexColor: '#224466',
      events: events,
      culture: "ru",
      activeTask: {},
    };


  }

  moveEvent = ({ event, start, end }) => {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents
    });
  }

  handleSelect = ({ start, end }) => {
    this.setState({
      modalForm: true,
      start: start,
      end: end,
    })
  }

  inputTitleTask = (text, name) => {
    
    console.log(text, name);
    name === 'add' ?
      this.setState({
        title: text
      }) :
      this.setState({
        activeTask: { ...this.state.activeTask, title: text }
      })
  }
  changeDateTask = (date, name) => {
    name === 'start' ?
      this.setState({
        activeTask: { ...this.state.activeTask, start: date._d }
      }) :
      this.setState({
        activeTask: { ...this.state.activeTask, end: date._d }
      })
  }

  setColorTask = (color, name) => {
    name === 'add' ?
      this.setState({
        hexColor: color
      }) :
      this.setState({
        activeTask: { ...this.state.activeTask, hexColor: color }
      })
  }

  addTask = () => {
    if (this.state.title === "") {
      this.setState({
        showErrorMess: true
      })
    } else {
      var start = this.state.start;
      var end = this.state.end;
      var title = this.state.title;
      var hexColor = this.state.hexColor;
      var id = Math.round(Math.random() * 1000);
      this.setState({
        showErrorMess: false,
        modalForm: false,
        events: [
          ...this.state.events,
          {
            id,
            start,
            end,
            title,
            hexColor
          },
        ],
        title: '',
      })
    }
  }

  handleCloseModal = (name) => {
    name === 'add' ?
      this.setState({
        modalForm: false
      }) :
      this.setState({
        modalUpdate: false,
      })
  }

  openTask = (event) => {
    this.setState({
      activeTask: event,
      modalUpdate: true
    })
  }

  changeTask = () => {
    if (this.state.activeTask.title === "") {
      this.setState({
        showErrorMess: true
      })
    } else {
      var activeTask = this.state.activeTask;
      var tasks = this.state.events;
      var idTask = this.state.activeTask.id;
      tasks.map((task, num) => (
        task.id === idTask ?
          tasks[num] = activeTask : null
      ))
      this.setState({
        modalUpdate: false,
        showErrorMess: false
      })
    }
  }

  deleteTask = () => {
    var tasks = this.state.events;
    var idTask = this.state.activeTask.id;
    tasks.map((task, num) => (
      task.id === idTask ?
        tasks.splice(num, 1) : null
    ))
    this.setState({
      events: tasks,
      modalUpdate: false
    })
  }


  eventStyleGetter = (event, start, end, isSelected) => {

    var backgroundColor = event.hexColor;
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block'
    };
    return {
      style: style
    };
  }

  render() {
    return (
      <Paper>
        <div style={{ height: 500 }}>
          <DragAndDropCalendar
            selectable
            views={allViews}
            events={this.state.events}
            onEventDrop={this.moveEvent}
            resizable
            localizer={localizer}
            culture={this.state.culture}
            onSelectSlot={this.handleSelect}
            eventPropGetter={(this.eventStyleGetter)}
            onSelectEvent={event => this.openTask(event)}
          />
        </div>
        <DialogToAdd
          modalForm={this.state.modalForm}
          nameLanding={this.state.nameLanding}
          showErrorMess={this.state.showErrorMess}
          hexColor={this.state.hexColor}
          inputTitleTask={this.inputTitleTask}
          setColorTask={this.setColorTask}
          addTask={this.addTask}
          handleCloseModal={this.handleCloseModal}
        />
        <DialogToUpdate
          modalUpdate={this.state.modalUpdate}
          nameLanding={this.state.nameLanding}
          showErrorMess={this.state.showErrorMess}
          activeTask={this.state.activeTask}
          inputTitleTask={this.inputTitleTask}
          changeDateTask={this.changeDateTask}
          setColorTask={this.setColorTask}
          changeTask={this.changeTask}
          deleteTask={this.deleteTask}
          handleCloseModal={this.handleCloseModal}
        />
      </Paper >
    );
  }
}

export default Dnd;
