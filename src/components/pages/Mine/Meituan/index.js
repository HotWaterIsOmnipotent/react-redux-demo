import React,{Component} from 'react'
import './index.scss'
import { Button, WhiteSpace } from 'antd-mobile';
import GroupState from '../../../../modules/group'
class Meituan extends Component {
    getFocus = (e) => {
        // this.setAttribute('class', 'active')
        e.target.setAttribute('class', 'active')
    }
    componentDidMount(){
        let aInput = document.getElementsByTagName('input')
        aInput = Array.from(aInput)
        aInput.forEach(element => {
            element.onfocus = (e) => {
                e.target.setAttribute('class', 'active')
            }
            element.onblur = (e) => {
                e.target.removeAttribute('class')
            }
        });
    }
    login = (e) => {
        let oValue = document.getElementsByTagName('input')
        let username = oValue[0].value
        let password = oValue[1].value
        this.props.login({
            username,
            password
        }, () => {
            console.log(this.props)
            // this.props.history.replace('/login')
        })
        e.preventDefault()
    }
    render(){
        return (
            <div className = 'mtBox'>
                <form action="">
                    <div className = 'mtUser'>
                        <input required type="text" placeholder = '账户名/手机号/Email'/>
                    </div>
                    <div className = 'mtPass'>
                        <input required type="text" placeholder = '请输入您的密码'/>
                    </div>
                    <Button onClick = {this.login} type="warning">登录</Button><WhiteSpace />
                </form>
            </div>
        )
    }
}
export default GroupState(Meituan, {
    reducer:'mine',
    states:['userInfo']
})