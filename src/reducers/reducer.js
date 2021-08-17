import * as actionTypes from '../actions/actions';

const initialState = {
    tasks: [
        {
            id: 1,
            value: "Some text in the task",
            completed: false,
        }
    ]
}

const reducer = (state = initialState, action) => {
    
    if (true) {
        console.log(true);
    }

    if (false) {
        console.log(false);
    }
    
    return state;
}

export default reducer;