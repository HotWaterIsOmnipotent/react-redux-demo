import {LOGIN, LOGINOUT, LOADGOODS, ADDNUM, REDNUM, DELETEGOOD} from './const'
export default {
    login({username, password}, callback){
        return dispatch => {
            setTimeout(() => {
                if(username === '123' && password === '456'){
                    let userInfo = {
                        username:'123',
                        password:'456'
                    }
                    dispatch({
                        type:LOGIN,
                        userInfo
                    })
                    let userData = JSON.stringify(userInfo)
                    localStorage.setItem('userInfo',userData)
                    callback && callback()
                }else{
                    alert('用户名或密码错误')
                }
            }, 500)
        }
    },
    loginOut(){
        return dispatch => {
            setTimeout(() => {
                localStorage.removeItem('userInfo')
                dispatch({
                    type:LOGINOUT
                })
            }, 500)
        }
    },
    loadGoods(){
        /* return dispatch => {
            let goodsList = localStorage.goodsCar ? JSON.parse(localStorage.goodsCar) : []
            goodsList.map(item => {
                Get({
                    url:'/db/movie_detail/' + item.id
                }).then(res => {
                    // item.detail = res.data
                    item = Object.assign(item, res.data)
                    // console.log(res.data)
                })
            })
            localStorage.goodsList = JSON.stringify(goodsList)
            dispatch({
                type:LOADGOODS,
                goodsList
            })
        } */
        let goodsList = localStorage.goodsCar ? JSON.parse(localStorage.goodsCar) : []
        let action = {
            type:LOADGOODS,
            goodsList
        }
        return action
    },
    addNum(id){
        let goodsList = JSON.parse(localStorage.goodsCar)
        goodsList.some(item => {
            if(id === item.id){
                item.num++
            }
        })
        localStorage.goodsCar = JSON.stringify(goodsList)
        let action = {
            type:ADDNUM,
            goodsList
        }
        return action
    },
    redNum(id){
        let goodsList = JSON.parse(localStorage.goodsCar)
        goodsList.some(item => {
            if(id === item.id){
                if(item.num  > 1){
                    item.num--
                }else{
                    alert('商品数量不能少于1')
                }
            }
        })
        localStorage.goodsCar = JSON.stringify(goodsList)
        let action = {
            type:REDNUM,
            goodsList
        }
        return action
    },
    deleteGood(id){
        let goodsList = JSON.parse(localStorage.goodsCar)
        goodsList = goodsList.filter(item => {
            if(id === item.id){
                return false
            }
            return true
        })
        localStorage.goodsCar = JSON.stringify(goodsList)
        let action = {
            type:DELETEGOOD,
            goodsList
        }
        return action
    }
}