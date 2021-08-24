import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0,
    tasks: [
        {
            id: 1,
            value: "Some text in the task",
            completed: false,
        },
        {
            id: 2,
            value: "Some text in the task 2",
            completed: false,
        },
        {
            id: 3,
            value: "Some text in the task 3",
            completed: false,
        },
    ]
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.ADD_INFO_TO_FIELD:
            return {
                // ...state, counter: state.counter + 1
                ...state, counter: state.counter + 1, tasks: [...state.tasks, { id: new Date(), value: state.counter }],
            };

        case actionTypes.MARK_TASK_DONE:
            return {
                ...state, tasks: [...state.tasks, { completed: true }],
            }     

        case actionTypes.CLEAR_FIELD:
            return {
                ...state, counter: 0
            }     

        case actionTypes.STORE_TASK:
            return {
                // ...state, tasks: [...state.tasks, { value: state.counter, id: new Date() }],
            }

        case actionTypes.REMOVE_TASK:
            const updatedArray = state.tasks.filter((task) => task.id !== action.task);
            return {
                ...state, tasks: updatedArray,
            }

    }
    
    return state;
}

export default reducer;