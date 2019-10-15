import React,{Component} from 'react'
import './index.scss'
import MovieNavs from './MovieNavs'
import Showing from './Showing'
import Willshow from './Willshow'
import {Route, Redirect, Switch} from 'react-router-dom'
class Movie extends Component {
    renderShow(){
        let {show} = this.props
        return (
            <Switch>
            {
                show.map(item => <Route key = {item.id} path = {item.path} component = {item.component} exact = {item.exact}></Route>)
            }
                <Redirect to = '/movie/showing'></Redirect>
            </Switch>
            )
    }
    render(){
        // console.log(this.props.location.pathname)
        return (
            <div>
                <MovieNavs></MovieNavs>
                {this.renderShow()}
            </div>
        )
    }
}

Movie.defaultProps = {
    show:[
        {id:1, path:'/movie/showing', component:Showing, exact:false},
        {id:2, path:'/movie/willshow', component:Willshow, exact:false}
    ]
}
export default Movie