import state from './state'
import {fromJS} from 'immutable'
import {LOGIN, LOGINOUT, LOADGOODS, ADDNUM, REDNUM, DELETEGOOD} from './const'
const reducer = (prevState = fromJS(state), action) => {
    switch (action.type) {
        case LOGIN :
            return prevState.set('userInfo', action.userInfo)
        case LOGINOUT :
            return prevState.set('userInfo', null)
        case LOADGOODS :
            return prevState.set('goodsList', action.goodsList)
        case ADDNUM :
            return prevState.set('goodsList', action.goodsList)
        case REDNUM :
            return prevState.set('goodsList', action.goodsList)
        case DELETEGOOD :
            return prevState.set('goodsList', action.goodsList)
        default:
            return prevState
    }
}
export default reducer