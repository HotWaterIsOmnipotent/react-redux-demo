import React, {Component} from 'react';
import {Mine, Movie, Theater} from "./components/pages"
import MovieDetail from "./components/pages/Movie/MovieDetail"
import Login from './components/pages/Mine/Login'
import {Route, withRouter, Redirect, Switch} from 'react-router-dom'
import FooterBar from './components/component/Footer'
import { NavBar, Icon } from 'antd-mobile';
import './index.scss'
/* function App() {
  return (
    <div className="App">
    </div>
  );
} */

class App extends Component {
  state = {
    hasFooter:true,
    hasNav:true
  }
  renderPages(){
    let {navs} = this.props
    return (
      <Switch>
        {navs.map(item => {
          return <Route key = {item.id} path = {item.path} component = {item.component} exact = {item.exact}></Route>
        })}
        <Redirect to = '/movie/showing'></Redirect>
      </Switch>)
    
  }
  componentDidMount(){
    let {pathname} = this.props.location
    if(pathname === '/'){
      this.props.history.replace('/movie/showing')
    }
    this.isShowFooter(this.props)
  }
  isShowFooter(nextProps){
    let {pathname} = nextProps.location
    if(pathname === '/mine' || /\/movie_detail/.test(pathname)){
      this.setState({
        hasFooter:false
      })
    }else{
      this.setState({
        hasFooter:true
      })
    }
    if(pathname === '/movie_detail'){
      this.setState({
        hasNav:false
      })
    }else{
      this.setState({
        hasNav:true
      })
    }
  }
  componentWillReceiveProps(nextProps){
    this.isShowFooter(nextProps)
  }
  switchTitle(){
    let {pathname} = this.props.location
    if(/\/movie/.test(pathname)) return '猫眼电影'
    if(/\/theater/.test(pathname)) return '影院'
    if(/\/mine/.test(pathname)) return '我的'
  }
  render(){
    let {pathname} = this.props.location
    let {hasFooter, hasNav} = this.state
    return (
      <div className="App">
        { !hasNav || <NavBar
          className = 'headerbar'
          mode="light"
          icon={/\/mine/.test(pathname) ? <Icon type="left" /> : ''}
          onLeftClick={() => this.props.history.goBack()}
        >{this.switchTitle()}
        </NavBar>}
        
        <main>
          {this.renderPages()}
        </main>
        {!hasFooter || <FooterBar></FooterBar>}
      </div>
    )
  }
}

App.defaultProps = {
  navs:
    [
      {id:1, path:'/movie', component:Movie, exact:false},
      {id:2, path:'/theater', component:Theater, exact:false},
      {id:3, path:'/mine', component:Mine, exact:true},
      {id:4, path:'/movie_detail/:id', component:MovieDetail},
      {id:5, path:'/mine/login', component:Login}
    ]
}

export default withRouter(App);
