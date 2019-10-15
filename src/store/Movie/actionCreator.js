import {GET_SHOWING_LIST, GET_WILLSHOW_LIST, GET_MORE_MOVIES, GET_MORE_LIST, GET_DETAIL, BUY_TICKET} from './const'
import {Get} from '../../modules/axios'
export default {
    getShowingList(){
        return dispatch => {
            Get({
                url:'/db/in_theaters',
                /* data:{
                    page:pages++,
                    limit:10
                } */
            }).then(res => {
                /* if((pages - 1) * 10 > res.data.total){
                    let showingList = []
                    dispatch({
                        type:GET_SHOWING_LIST,
                        hasMore:false,
                        showingList,
                        pages:--pages
                    })
                    return false
                } */
                // console.log(res.data.object_list)
                let showingList = res.data.object_list
                dispatch({
                    type:GET_SHOWING_LIST,
                    showingList/* ,
                    pages,
                    hasMore:true */
                })
            })
        }
    },
    getWillShowList(callback){
        return dispatch => {
            Get({
                url:'/db/coming_soon'
            }).then(res => {
                let willShowList = res.data.object_list
                dispatch({
                    type:GET_WILLSHOW_LIST,
                    willShowList
                })
                callback && callback()
            })
        }
    },
    loadMoreMovies(pages2){
        return dispatch => {
            Get({
                url:'/db/coming_soon',
                data:{
                    page:++pages2,
                    limit:10
                }
            }).then(res => {
                if(pages2 * 10 > res.data.total){
                    let willShowList = []
                    dispatch({
                        type:GET_MORE_MOVIES,
                        hasMore2:false,
                        pages2:pages2,
                        willShowList
                    })
                    return false
                }
                let willShowList = res.data.object_list
                dispatch({
                    type:GET_MORE_MOVIES,
                    willShowList,
                    hasMore2:true,
                    pages2
                })
            })
        }
    },
    loadMoreList(pages){
        return dispatch => {
            Get({
                url:'/db/in_theaters',
                data:{
                    page:++pages,
                    limit:10
                }
            }).then(res => {
                if(pages * 10 > res.data.total){
                    let showingList = []
                    dispatch({
                        type:GET_MORE_LIST,
                        hasMore:false,
                        pages,
                        showingList
                    })
                    return false
                }
                let showingList = res.data.object_list
                dispatch({
                    type:GET_MORE_LIST,
                    showingList,
                    hasMore:true,
                    pages
                })
            })
        }
    },
    getDetail(id){
        return dispatch => {
            Get({
                url:'/db/movie_detail/' + id,
            }).then(res => {
                let detail = res.data
                dispatch({
                    type:GET_DETAIL,
                    detail
                })
            })
        }
    },
    buyTicket(id){
        return dispatch => {
            let goodsCar = localStorage.goodsCar ? JSON.parse(localStorage.goodsCar) : []
            let good = {}
            if(!goodsCar.length){
                Get({
                    url:'/db/movie_detail/' + id
                }).then(res => {
                    good = res.data
                    good.id = id
                    good.num = 1
                    goodsCar.push(good)
                    localStorage.goodsCar = JSON.stringify(goodsCar)
                    dispatch({
                        type:BUY_TICKET,
                        goodsCar
                    })
                })
            }else{
                let isHas = goodsCar.some(item => {
                    if(Number(item.id) === Number(id)){
                        item.num++
                        return true
                    }
            localStorage.goodsCar = JSON.stringify(goodsCar)
            dispatch({
                type:BUY_TICKET,
                goodsCar
            })
                    return false
                });
                if(!isHas){
                    Get({
                        url:'/db/movie_detail/' + id
                    }).then(res => {
                        good = res.data
                        good.id = id
                        good.num = 1
                        goodsCar.push(good)
                        localStorage.goodsCar = JSON.stringify(goodsCar)
                        dispatch({
                            type:BUY_TICKET,
                            goodsCar
                        })
                    })
                }
            }
            localStorage.goodsCar = JSON.stringify(goodsCar)
            dispatch({
                type:BUY_TICKET,
                goodsCar
            })
        }
    }
}