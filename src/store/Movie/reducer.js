import state from './state'
import {fromJS} from 'immutable'
import {GET_SHOWING_LIST, GET_WILLSHOW_LIST, GET_MORE_MOVIES, GET_MORE_LIST, GET_DETAIL, BUY_TICKET} from './const'
const reducer = (prevState = fromJS(state), action) => {
    switch (action.type) {
        case GET_SHOWING_LIST :
            return prevState.set('showingList', action.showingList)
            /* return prevState.merge({
                'showingList':prevState.get('showingList').concat(action.showingList),
                'pages':action.pages,
                'hasMore':action.hasMore
            }) */
        case GET_MORE_LIST :
            return prevState.merge({
                'showingList':prevState.get('showingList').concat(action.showingList),
                'pages':action.pages,
                'hasMore':action.hasMore
            })
        case GET_WILLSHOW_LIST :
            return prevState.set('willShowList', action.willShowList)
        case GET_MORE_MOVIES :
            return prevState.merge({
                'willShowList':prevState.get('willShowList').concat(action.willShowList),
                'pages2':action.pages2,
                'hasMore2':action.hasMore2
            })
        case GET_DETAIL :
            return prevState.set('detail', action.detail)
        case BUY_TICKET :
            return prevState.set('goodsCar', action.goodsCar)
        default:
            return prevState
    }
}

export default reducer