import React,{Component} from 'react'
import './index.scss'
import GroupState from '../../../../modules/group'
import { Button, WhiteSpace } from 'antd-mobile';
import Banner from '../Banner'
class Willshow extends Component {
    componentDidMount(){
        let {willShowList} = this.props
        if(!willShowList){
            this.props.getWillShowList()
        }
        window.addEventListener('scroll', this.loadMoreMovies)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.loadMoreMovies)
    }
    loadMoreMovies = () => {
        let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
        let {pages2, hasMore2} = this.props
        if(scrollHeight === scrollTop + clientHeight && scrollHeight !== 0){
            if(hasMore2){
                this.props.loadMoreMovies(pages2)
            }
        }
    }
    getImages( _url ){
        if( _url !== undefined ){
            let _u = _url.substring( 7 );
            return 'https://images.weserv.nl/?url=' + _u;
        }
    }
    renderWillShowList(){
        let {willShowList} = this.props
        if(!willShowList) return false;
        return willShowList.map((item, index) => {
            return (
                <section key = {index} className = 'itembox'>
                    <aside className = 'imgBox'>
                        <img src={this.getImages(item.images.small)} alt=""/>
                    </aside>
                    <article className = 'itemcontent'>
                        <aside>
                            <h3>{item.title}</h3>
                            <p><span>{item.collect_count}</span>人想看</p>
                            <p>导演：{item.directors[0].name}</p>
                            <p></p>
                        </aside>
                        <aside>
                            <Button className = 'buyticket' type="warning">购票</Button><WhiteSpace />
                        </aside>
                    </article>
                </section>
            )
        })
    }
    render(){
        return (
            <div>
                <Banner></Banner>
                {this.renderWillShowList()}
            </div>
        )
    }
}
export default GroupState(Willshow, {
    reducer:'movie',
    states:['willShowList', 'pages2', 'hasMore2']
})