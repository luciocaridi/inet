import {GET_ITEMS} from '../actions/types';

const initialState = []

fetch('http://localhost:5000/cities/all')
    .then((response) => {
        return response.json();
        }).then (function (json) { 
        json.map((element) => {
            initialState.push(element) 
})});
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