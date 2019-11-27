import { GET_ITINERARY } from '../actions/types';

var initialState = {
    data:[]
};
const itemReducer= (state = initialState, action) => {

    switch (action.type) {
        case GET_ITINERARY:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default itemReducer;