import React,{Component} from 'react'
import './index.scss'
import Swiper from 'swiper'
import GroupState from '../../../../modules/group'
class Banner extends Component {
    componentDidMount(){
        this.props.getWillShowList(() => {
            new Swiper('.banner',{
                slidesPerView : 3,
                slidesPerGroup : 3,
            })
        })
    }
    getImages( _url ){
        if( _url !== undefined ){
            let _u = _url.substring( 7 );
            return 'https://images.weserv.nl/?url=' + _u;
        }
    }
    renderSwiper(){
        let {willShowList} = this.props
        console.log(willShowList)
        if(!willShowList) return false
        return willShowList.map(item => {
            return (
                    <div key = {item.id} className="swiper-slide">
                        <img src={this.getImages(item.images.small)} alt="图片正在加载"/>
                    </div>
            )
        })
    }
    render(){
        return (
            <div className = 'bannerBox'>
                <div className="swiper-container banner">
                    <div className="swiper-wrapper">
                        {this.renderSwiper()}
                    </div>
                    {/* <div className="swiper-pagination"></div> */}
                    
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        )
    }
}
export default GroupState(Banner, {
    reducer:'movie',
    states:['willShowList']
})