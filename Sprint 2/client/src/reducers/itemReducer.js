import {GET_ITEMS} from '../actions/types';

const initialState = []
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

/*function fetchCities() {
fetch('http://localhost:5000/cities/all')
    .then(cities => {
      return cities.json();
    }).then(function(response) {
        if (response.ok)
            return response.json();
        throw new Error(response.statusText);
    }).then(function(json) {
        console.log(initialState);
        initialState.push(json);
    });
}*/