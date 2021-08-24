import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../../actions/actions';

class Form extends Component {

    render() {
        return (
            <div>
                <h2>Add a task:</h2>
                <div>

            {/* 
                <form className="form">
                <input type="text" className="input" />
                <button onClick={this.props.onAddTask} type="submit">Add task</button>
                </form>
            */}
                    <span>Field: {this.props.input}</span>
                    <button onClick={this.props.onAddInfoToField}>Add info to field</button>
                    <button onClick={this.props.onMarkDoneTask}>Mark task done</button>
                    <button onClick={this.props.onStoreTask}>Store task</button>
                    <button onClick={this.props.onRemoveTask}>Remove task</button>
                    <button onClick={this.props.onClearField}>Clear field</button>

                </div>

                {/* This marks the task as done */}
                <div>
                    <ul>
                        {this.props.storedTasks.map(
                            (task) => (
                            <li
                                key={task.id}
                                onClick={() => this.props.onMarkDoneTask(task.id)}>
                                    {task.value}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* This removes the task from the list. 
                <div>
                    <ul>
                        {this.props.storedTasks.map(
                            (task) => (
                            <li
                                key={task.id}
                                onClick={() => this.props.onRemoveTask(task.id)}>
                                    {task.value}
                            </li>
                        ))}
                    </ul>
                </div>
                */}

            </div>
        );
    }
}


// When clicking the contents of the input should be sent to the tasks array.
/* const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form clicked");
}; */


// This input field should be cleared once a task is added to the tasks array.
/* const inputHandler = (e) => {
    console.log(e.target.value);
} */


const mapStateToProps = state => {
    return {
        input: state.counter,
        storedTasks: state.tasks,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddInfoToField: () => dispatch({ type: actionTypes.ADD_INFO_TO_FIELD }),
        onMarkDoneTask: (id) => dispatch({ type: actionTypes.MARK_TASK_DONE, task: id }),
        onClearField: () => dispatch({ type: actionTypes.CLEAR_FIELD }),
        onStoreTask: () => dispatch({ type: actionTypes.STORE_TASK }),
        onRemoveTask: (id) => dispatch({ type: actionTypes.REMOVE_TASK, task: id }),
    }
};


export default connect(mapStateToProps, mapDispatchToProps) (Form);