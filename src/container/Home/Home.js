import React from 'react'
import HomeHeader from '../../component/HomeHeader/HomeHeader'
import Carousel from '../../component/Carousel/index'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import Ads from '../../subpage/ads'
import List from '../../subpage/homeList'
import {getApi} from '../../fetch/get'
import {InfiniteLoader} from 'react-weui'
class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            adlist:[],
            tlist:[],
            page:0,
            triggerPercent:99   
        }
    }

    getData (){
        const url = '/api/ads'
        const result = getApi(url)
        result.then((data)=>{
            return data.text()  
        }).then((text)=>{
            this.setState({
                adlist:JSON.parse(text)
            })
        })
    }

    getListData (city,page){
        const url = '/api/list/'+encodeURIComponent(city)+'/'+page
        const result = getApi(url)
        result.then((data)=>{
            return data.text()  
        }).then((text)=>{
            console.log(JSON.parse(text))
            if(JSON.parse(text).length>0){
                this.setState({
                    tlist:this.state.tlist.concat(JSON.parse(text)),
                    page:this.state.page+1   
                });
            } 
        })
    }
    render (){
        let currentCity = this.props.currentCity
        return (
            <div>
                 <InfiniteLoader triggerPercent={this.state.triggerPercent} 
                onLoadMore={ (resolve, finish) => {
                    //mock request
                    const url = '/api/list/'+encodeURIComponent(currentCity)+'/'+this.state.page
                    const result = getApi(url)
                    result.then((data)=>{
                        return data.text()  
                    }).then((text)=>{
                        if(this.state.page<10){
                            this.setState({
                                tlist:this.state.tlist.concat(JSON.parse(text)),
                                page:this.state.page+1   
                            },()=>resolve());
                                
                        } else {
                            finish()
                        }
                    })
                }}
            >
                <HomeHeader currentCity = {currentCity}></HomeHeader>
                <Carousel></Carousel>
                <div style={{height:"10px",background:"#f1f1f1"}}></div>
                <Ads lists={this.state.adlist}></Ads>
                <div style={{height:"10px",background:"#f1f1f1"}}></div>
                <List itemlists = {this.state.tlist}></List>
                </InfiniteLoader>
            </div>
        )
    }
    componentDidMount(){
        const currentCity = this.props.currentCity
        this.getData();
        this.getListData(currentCity,0)
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
  function mapDispatchToProps(dispatch){
    
  }
  
export default connect(
    mapStateToProps,
)(Home);
