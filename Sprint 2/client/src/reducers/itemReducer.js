import {GET_ITEMS} from '../actions/types';

const initialState = []

fetch('http://localhost:5000/cities/all')
    .then(function(response) {
        return response.json();
        }).then(function(json) {
        initialState.push(json)
        console.log(json)
});

console.log(initialState)

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default: 
            return state;
    }
};