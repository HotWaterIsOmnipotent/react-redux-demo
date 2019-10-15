import React,{Component} from 'react'
import './index.scss'
import GroupState from '../../../../modules/group'
import { WhiteSpace, Toast } from 'antd-mobile';
import {NavLink} from 'react-router-dom'
class GoodsCar extends Component {
    getImages( _url ){
        if( _url !== undefined ){
            let _u = _url.substring( 7 );
            return 'https://images.weserv.nl/?url=' + _u;
        }
    }
    componentDidMount(){
        this.props.loadGoods()
    }
    addNum = (id) => {
        this.props.addNum(id)
        Toast.success('商品添加成功', 1);
    }
    redNum = (id) => {
        this.props.redNum(id)
        Toast.success('操作成功', 1);
    }
    deleteGood = (id) => {
        this.props.deleteGood(id)
        Toast.success('商品删除成功', 1);
    }
    renderGoodsList(){
        let {goodsList} = this.props
        if(!goodsList) return false;
        return goodsList.map(item => {
            return (
                <div key = {item.id} className = 'itembox'>
                    <NavLink className = 'imgBox' to = {'/movie_detail/' + item.id}>
                        <img src={this.getImages(item.images.small)} alt=""/>
                    </NavLink>
                    <article className = 'itemcontent'>
                        <aside>
                            <h3>{item.title}</h3>
                            <h4><span>{item.collect_count}</span>人想看</h4>
                            <h4>导演：{item.directors[0].name}</h4>
                            <p></p>
                        </aside>
                        <aside className = 'numCtrol'>
                            <div className = 'buyticket' type="warning">
                                <button onClick = {this.redNum.bind(this, item.id)}>-</button>
                                {item.num}
                                <button onClick = {this.addNum.bind(this, item.id)}>+</button>
                            </div><WhiteSpace />
                            <div className = 'deleteGood'>
                                <p onClick = {this.deleteGood.bind(this, item.id)}>删除</p>
                            </div>
                        </aside>
                    </article>
                </div>
            )
        })
    }
    render(){
        let {goodsList} = this.props
        return (
            <div className = 'goodsList'>
            {!goodsList.length?
            (<article className = 'empty'>
                    亲，您还没有购买任何商品哦！
                </article>) 
                : 
               this.renderGoodsList()}
            </div>
        )
    }
}
export default GroupState(GoodsCar, {
    reducer:'mine',
    states:['goodsList']
})