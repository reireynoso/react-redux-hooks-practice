import currentUser from './currentUser'
import counter from './counter'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    currentUser,
    counter
})

export default rootReducer