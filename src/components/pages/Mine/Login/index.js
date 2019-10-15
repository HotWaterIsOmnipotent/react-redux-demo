import React,{Component} from 'react'
import './index.scss'
import { Button, WhiteSpace } from 'antd-mobile';
import GroupState from '../../../../modules/group'
import bg from './images/bg.png'
import GoodsCar from '../GoodsCar'
class Login extends Component {
    loginOut = () => {
        this.props.loginOut()
    }
    componentWillReceiveProps(nextProps){
        if(!nextProps.userInfo){
            this.props.history.replace('/mine')
        }
    }
    render(){
        this.props.loadGoods()
        return (
            <div className = 'my'>
                <img className = 'myBg' width = '100%' src={bg} alt=""/>
                <section>
                    <h4 className = 'myList'>我的订单</h4>
                    <p className = 'p1'></p>
                    <GoodsCar/>
                </section>
                <Button className = 'myBtn' onClick = {this.loginOut} type="warning">退出</Button><WhiteSpace />
            </div>
        )
    }
}
export default GroupState(Login, {
    reducer:'mine',
    states:['userInfo']
})