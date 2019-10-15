import {combineReducers} from 'redux-immutable'
import movie from './Movie/reducer'
import mine from './Mine/reducer'
const reducer = combineReducers({
    movie,mine
})

export default reducer