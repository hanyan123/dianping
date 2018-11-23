import React from 'react'
import './HomeHeader.css'

import down from '../../assets/images/down.png'
import search from '../../assets/images/search.png'
import user from '../../assets/images/user.png'

import { resolve } from 'any-promise';




class HomeHeader extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            datas:[]
        }
    }

    render (){
        return (
            <div className="header">
                <div className="location">
                    <span className="current">{this.props.currentCity.city}</span>
                    <span className="citySelect"><img src={down} /></span>
                </div>
                <div className="search">
                    {/* <input type="text" placeholder="请输入关键字" /> */}
                    <span className="searchIcon">
                        <img src={search} />
                    </span>
                </div>
                <div className="userheader">
                    <img src={user} /> 
                </div>
            </div>
        )
    }
}

export default HomeHeader 