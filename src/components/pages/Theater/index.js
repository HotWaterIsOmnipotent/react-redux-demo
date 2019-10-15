import React,{Component} from 'react'
import './index.scss'
import Cinema from './Cinema'
class Theater extends Component {
    render(){
        return (
            <div className = 'theaterBox'>
                <section className = 'searchBox'>
                    <aside className = 'leftBox'>
                        <span>青岛</span>
                        <i className = 'fa fa-caret-down'></i>
                    </aside>
                    <aside className = 'rightBox'>
                        <div>
                            <i className = 'fa fa-search'></i>
                            <span>搜影院</span>
                        </div>
                    </aside>
                </section>
                <div className = 'theaterNavs'>
                    <aside>
                        <div>
                            <span>全城</span>
                            <i className = 'fa fa-caret-down'></i>
                        </div>
                    </aside>
                    <aside>
                        <div>
                            <span>品牌</span>
                            <i className = 'fa fa-caret-down'></i>
                        </div>
                    </aside>
                    <aside>
                        <div>
                            <span>特色</span>
                            <i className = 'fa fa-caret-down'></i>
                        </div>
                    </aside>
                </div>
                <div>
                    <Cinema></Cinema>
                </div>
            </div>
        )
    }
}
export default Theater