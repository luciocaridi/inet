import {combineReducers} from 'redux';
import itemReducer from './itemReducer'
import itineraryReducer from './itineraryReducer'

export default combineReducers ({
    reducerCity: itemReducer,
    reducerItnerary: itineraryReducer
})