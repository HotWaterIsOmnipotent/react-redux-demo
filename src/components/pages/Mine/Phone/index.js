import React,{Component} from 'react'
import './index.scss'
import { Button, WhiteSpace } from 'antd-mobile';

class Phone extends Component {
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
    render(){
        return (
            <div className = 'phBox'>
                <form action="">
                    <div className = 'phUser'>
                        <input required type="text" placeholder = '请输入手机号'/>
                        <Button className = 'getVer' type="warning">获取验证码</Button><WhiteSpace />
                    </div>
                    <div className = 'phPass'>
                        <input required type="text" placeholder = '请输入短信验证码'/>
                    </div>
                    <Button className = 'phBtn' type="warning">登录</Button><WhiteSpace />
                </form>
            </div>
        )
    }
}
export default Phone