import React,{Component} from 'react'
import './index.scss'
import { Tabs, Badge} from 'antd-mobile';
import Meituan from './Meituan'
import Phone from './Phone'
import GroupState from '../../../modules/group'
// import {Route} from 'react-router-dom'
class Mine extends Component {
    componentDidMount(){
        let userData = localStorage.userInfo
        // let {userInfo} = this.props
        if(userData){
            this.props.login(JSON.parse(userData))
            this.props.history.replace('/mine/login')
        }

    }
    componentWillReceiveProps(nextProps){
        let {userInfo} = nextProps
        if(userInfo){
            this.props.history.replace('/mine/login')
        }
    }
    renderTabs(){
        const tabs = [
            { title: <Badge>美团账号登录</Badge> },
            { title: <Badge>手机验证登录</Badge> }
          ];
        return (
            <Tabs tabs={tabs}
            initialPage={1}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                    <Meituan></Meituan>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                    <Phone></Phone>
                </div>
            </Tabs>
        )
    }
    render(){
        return (
            <div>
                {this.renderTabs()}
                <p className = 'register'><span>立即注册</span><span>找回密码</span></p>
                <p className = 'copyRight'>©天猫电影 客服电话： <span>400-670-5335</span></p>
            </div>
        )
    }
}
export default GroupState(Mine, {
    reducer:'mine',
    states:['userInfo']
})