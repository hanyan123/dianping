import React from 'react'
import './homelist.css'
import {InfiniteLoader} from 'react-weui'
class List extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            
        }
    }
    render (){
        console.log(this.props)
        let itemlists = this.props.itemlists
        return (
            
            <div className="listBox">
                <div className="listContainer">
                    <ul className="listUl">
                        {
                            itemlists.map((item,index)=>{
                                return  <li key={index} className="listItem">
                                            <div className="itemImg">
                                                <img  src={item.imgurl}/>
                                            </div>
                                            <div className="textLeft">
                                                <div className="textTile">{item.title}</div>
                                                <div className="desc">{item.subTitle}</div>
                                                <div className="locations">
                                                    <span className="price">
                                                        {item.price}
                                                    </span>
                                                    <span className="num">
                                                        已售{item.number}
                                                    </span>  
                                                </div>
                                            </div>
                                        </li>
                            })
                        }
                        {/* <li className="listItem">
                            <div className="itemImg">
                                <img  src="http:////p0.meituan.net/dpdeal/0cadba5e21148baf1b54ad3c65698bec200011.jpg.webp@180w_180h_1e_1c_1l_80q|watermark=0"/>
                            </div>
                            <div className="textLeft">
                                <div className="textTile">华西是鲜花</div>
                                <div className="desc">[23店通用] 低至4.8折33朵蓝玫瑰礼盒</div>
                                <div className="locations">
                                    <span className="price">
                                        16.8
                                    </span>
                                    <span className="num">
                                        已售2002
                                    </span>  
                                </div>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}
export default List