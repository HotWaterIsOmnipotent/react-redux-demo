import React,{Component} from 'react'
import './index.scss'
import GroupState from '../../../../modules/group'
import { NavBar, Icon, Toast } from 'antd-mobile';

class MovieDetail extends Component {
    componentDidMount(){
        let {id} = this.props.match.params
        this.props.getDetail(id)
    }
    changeTitle(){
        if(!this.props.detail) return false
        let oTitle = document.getElementsByClassName('am-navbar-title')[0]
        oTitle.innerHTML = this.props.detail.title

    }
    renderNavs(){
        let {detail} = this.props
        if(!detail) return false
        return (<NavBar
                className = 'headerbar'
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.goBack()}
                >{detail.title}
            </NavBar>)
                
    }
    getImages( _url ){
        if( _url !== undefined ){
            let _u = _url.substring( 7 );
            return 'https://images.weserv.nl/?url=' + _u;
        }
    }
    buyTicket(id){
        this.props.buyTicket(id)
        Toast.success('商品添加成功', 1);
    }
    renderDetail(){
        let {detail} = this.props
        if(!detail) return false
        return (
            <section className = 'detailBox'>
                <div  style = {{backgroundImage:'url(' + this.getImages(detail.images.small) + ')', backgroundSize:'cover'}}>
                </div>
                <div>
                    <aside>
                        <img src={this.getImages(detail.images.small)} alt=""/>
                    </aside>
                    <article>
                        <h3>{detail.title}</h3>
                        <h4>{detail.collect_count}人想看</h4>
                        <p className = 'dPlace'>{detail.genres.map((item, index) => {return (<span key = {index}>{item}</span>)})}</p>
                        <p>{detail.countries[0]}</p>
                        <p>{detail.year}年大陆上映</p>
                    </article>
                </div>
                <div>
                    <p>简介：</p>
                    <div>
                        {detail.summary}
                    </div>
                </div>
                <div className = 'buyTicket'>
                    <button onClick = {this.buyTicket.bind(this , detail.id)}>特惠购票</button>
                </div>
            </section>
        )
    }
    render(){
        return (
            <div>
                {this.renderNavs()}
                {this.renderDetail()}
            </div>
        )
    }
}
export default GroupState(MovieDetail,{
    reducer:'movie',
    states:['detail']
})