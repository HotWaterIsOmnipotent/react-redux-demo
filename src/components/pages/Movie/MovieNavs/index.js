import React,{Component} from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
class MovieNavs extends Component {
    componentDidMount(){
        window.addEventListener('scroll', this.scrollSwitch)
    }
    scrollSwitch = (e) => {
        let h = document.documentElement.scrollTop
        let aheader = document.getElementsByClassName('headerbar')[0]
        let anavs = document.getElementsByClassName('movienavs')[0]
        let app = document.getElementsByClassName('App')[0]
        if(h !== 0){
            aheader.style.display = 'none'
            anavs.setAttribute('class', 'movienavs scrolled')
            app.style.margin = '44px 0 50px'
        }else{
            aheader.style.display = 'flex'
            anavs.setAttribute('class', 'movienavs')
            app.removeAttribute('style')
        }
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollSwitch)
        let aheader = document.getElementsByClassName('headerbar')[0]
        let anavs = document.getElementsByClassName('movienavs')[0]
        let app = document.getElementsByClassName('App')[0]
        aheader.style.display = 'flex'
            anavs.setAttribute('class', 'movienavs')
            app.removeAttribute('style')
    }
    render(){
        return (
            <div className = 'movienavs'>
                <aside className = 'posi'>
                    <span>青岛</span>
                    <i className = 'fa fa-caret-down'></i>
                </aside>
                <aside className = 'switchmovie'>
                    <NavLink className = 'sbtn' to = '/movie/showing'>正在热映</NavLink>
                    <NavLink className = 'sbtn' to = '/movie/willshow'>即将上映</NavLink>
                </aside>
                <aside className = 'navsearch'>
                    <i className = 'fa fa-search'></i>
                </aside>
            </div>
        )
    }
}
export default MovieNavs