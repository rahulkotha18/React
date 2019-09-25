import counterReducer from './counterReducer';
import loggedReducer from './loggedReducer'
import { combineReducers } from 'redux';

const allreducers=combineReducers(
    {
        counter:counterReducer,
        isLogged:loggedReducer
    }
)
export default allreducers;