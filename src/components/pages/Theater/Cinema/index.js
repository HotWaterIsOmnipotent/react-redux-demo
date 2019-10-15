import React,{Component} from 'react'
import './index.scss'

class Cinema extends Component {
    renderCinemas(){
        let {cinemas} = this.props
        return (
            cinemas.map(item => (
                    <div key = {item.id} className = 'cinemaBox'>
                        <h3 className = 'cName'>{item.name}<article>{item.price}<span>元起</span></article></h3>
                        <p className = 'cPlace'><span>{item.address}</span><span>{item.distance}</span></p>
                        <p className = 'cTag'><span>小吃</span><span>折扣卡</span></p>
                        <p className = 'cDiscount'>开卡特惠，首单两张立减4元</p>
                    </div>
                )
            )
        )
    }
    render(){
        return (
            <div>
                {this.renderCinemas()}
            </div>
        )
    }
}

Cinema.defaultProps = {
    cinemas:[
        {id:1, name:'中影国际影城(大拇指广场店)', address:'崂山区同安路880号证大大拇指广场C座', distance:'800m', price:'40'},
        {id:2, name:'SFC上影影城(青岛金狮IMAX店)', address:'崂山区香港东路195号乙金狮广场3层', distance:'1.8km', price:'29'},
        {id:3, name:'利群华艺国际影院', address:'崂山区海尔路83号金鼎广场7楼', distance:'1.8km', price:'38'},
        {id:4, name:'艺佳映画电影城', address:'市北区银川东路1号内59号', distance:'2.4km', price:'40'},
        {id:5, name:'泽艺影城', address:'市北区合肥路672号永旺购物广场3楼', distance:'3.8km', price:'28'},
        {id:6, name:'CGV影城(新都心IMAX店)', address:'市北区黑龙江南路18号凯德MALL5楼', distance:'5.5km', price:'39'},
        {id:7, name:'横店电影城(李沧店)', address:'李沧区九水路227号宝龙城市广场4楼', distance:'5.6km', price:'37'},
        {id:8, name:'奥斯卡国际影城(青岛店)', address:'李沧区书院路37号奥克斯广场6楼', distance:'6.2km', price:'40'},
    ]
}
export default Cinema