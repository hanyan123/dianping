import React from 'react'
import './ads.css'
class Ads extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            
        }
    }
    render (){
        let lists = this.props.lists;
        console.log(lists)
        return (
            <div className="adBox">
                <div className="adTitle">
                    <span className="titleLeft">超值特惠</span>
                    <span className="titleRight">更多优惠</span>
                </div>
                <div className="adItems">
                    <ul className="itemBox">
                        {
                            lists.map((item,index)=>{
                                return  <li key={index} className="items">
                                            <img src={item.imgurl} alt="大众点评" />
                                            <p>{item.title}</p>
                                        </li>
                            })
                        }
                        {/* <li className="items">
                            <img src="http://p0.meituan.net/deal/64122f6fabc3bd1b2d89f4da580e97ce154095.jpg.webp@120w_90h_1e_1c_1l%7Cwatermark=1&&r=1&p=9&x=20&y=20" />
                            <p>十面陕西地道手工面</p>
                        </li>
                        <li className="items">
                            <img src="http://p0.meituan.net/deal/64122f6fabc3bd1b2d89f4da580e97ce154095.jpg.webp@120w_90h_1e_1c_1l%7Cwatermark=1&&r=1&p=9&x=20&y=20" />
                            <p>十面陕西地道手工面</p>
                        </li>
                        <li className="items">
                            <img src="http://p0.meituan.net/deal/64122f6fabc3bd1b2d89f4da580e97ce154095.jpg.webp@120w_90h_1e_1c_1l%7Cwatermark=1&&r=1&p=9&x=20&y=20" />
                            <p>十面陕西地道手工面</p>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Ads