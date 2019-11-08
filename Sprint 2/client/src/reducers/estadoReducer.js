import {GET_ESTADO} from '../actions/types';

const initialState = {
    estado: false
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_ESTADO:
            return {
                ...state
            }
        default: 
            return state;
    }
};