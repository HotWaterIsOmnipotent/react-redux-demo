import React,{Component} from 'react'
import './index.scss'
import GroupState from '../../../../modules/group'
import { Button, WhiteSpace, Toast } from 'antd-mobile';
import {NavLink} from 'react-router-dom'
class Showing extends Component {
    componentDidMount(){
        let {showingList} = this.props
        if(!showingList){
            this.props.getShowingList()
        }
        window.addEventListener('scroll', this.infinitLoad)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.infinitLoad)
    }
    infinitLoad = () => {
        let {pages, hasMore} = this.props
        let t = document.documentElement.scrollTop
        let h = document.documentElement.scrollHeight
        let c = document.documentElement.clientHeight
        // console.log(t,h,c)
        if((t + c) === h && h !== 0){
            if(hasMore){
                this.props.loadMoreList(pages)
            }
        }
    }
    buyTicket(id){
        this.props.buyTicket(id)
        Toast.success('商品添加成功', 1);
    }
    getImages( _url ){
        if( _url !== undefined ){
            let _u = _url.substring( 7 );
            return 'https://images.weserv.nl/?url=' + _u;
        }
    }
    renderShowingList(){
        let {showingList} = this.props
        if(!showingList) return false
        return showingList.map(item => {
            return (
                <section key = {item.id} className = 'itembox'>
                    <NavLink className = 'imgBox' to = {'/movie_detail/' + item.id}>
                        <img src={this.getImages(item.images.small)} alt=""/>
                    </NavLink>
                    <article className = 'itemcontent'>
                        <aside>
                            <h3>{item.title}</h3>
                            <p><span>{item.collect_count}</span>人想看</p>
                            <p>导演：{item.directors[0].name}</p>
                            <p></p>
                        </aside>
                        <aside>
                            <Button onClick = {this.buyTicket.bind(this , item.id)} _id = {item.id} className = 'buyticket' type="warning">购票</Button><WhiteSpace />
                        </aside>
                    </article>
                </section>
            )
        })
    }
    render(){
        return (
            <div>
                <div>
                    {this.renderShowingList()}
                </div>
            </div>
        )
    }
}
export default GroupState(Showing, {
    reducer:'movie',
    states:['showingList', 'pages', 'hasMore', 'h1', 'goodsCar']
})