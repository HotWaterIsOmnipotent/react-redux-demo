import React,{Component} from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
class FooterBar extends Component {
    render(){
        return (
            <footer className = 'footerbar'>
                <NavLink  className = 'itembox' to = '/movie'>
                    <i className = 'fa fa-film'></i>
                    <span>电影</span>
                </NavLink>
                <NavLink  className = 'itembox' to = '/theater'>
                    <i className = 'fa fa-tachometer'></i>
                    <span>影院</span>
                </NavLink>
                <NavLink  className = 'itembox' to = '/mine'>
                    <i className = 'fa fa-user'></i>
                    <span>我的</span>
                </NavLink>
            </footer>
        )
    }
}
/* FooterBar.defaultProps = {
    footerBar:[
        {id:1, name:'首页',}
    ]
} */

export default FooterBar