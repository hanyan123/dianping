import React from 'react'
import Header from '../Header'
import './index.css'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userinfoActions from '../../actions/userinfo'
import localStore from '../../static/localStore'
import { CITYNAME } from '../../config/localStoreKey'

class Citys extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            cityList:[
                '北京',
                '成都',
                '重庆',
                '广州',
                '杭州',
                '南京',
                '上海',
                '深圳',
                '苏州',
                '天津',
                '武汉',
                '西安'
            ]
        }
    }
    render (){
        console.log(this.props)
        let cityList = this.state.cityList
        return (
            <div>
                <Header></Header>
                <div>
                    <div className="J_locate"><span className="text">无法获取您的定位</span></div>
                    <div className="J_hotcity">
                        <div className="hot-trade modebox">
                            <div className="hd">热门城市</div>
                            <div className="home-place-list">
                                <ul className="J_citylist">
                                    {
                                        cityList.map((item,index)=>{
                                            return  <li key={index} onClick={this.selectCity.bind(this,item)}>
                                                        <a data-id={index}>{item}</a>
                                                    </li>
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    selectCity(city){
        localStore.setItem(CITYNAME,city);
        this.props.userinfoActions.updateCity({
            city:city
        });
        this.props.history.push('/')    
    }
}

//把state作为属性传到props
function mapStateToProps(state){
    //reducers index.js  里面的currentCity
    return {
        currentCity:state.currentCity
    }
  }
  //把actions作为属性传到props
//把actions作为属性传到props
function mapDispatchToProps(dispatch){
    return {
      userinfoActions:bindActionCreators(userinfoActions,dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Citys);