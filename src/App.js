import React, { Component } from 'react';
import { Button } from 'react-weui';
import Home from './container/Home/Home';
import RouterMap from './router/routerMap'
import { connect } from 'react-redux'
import * as userinfoActions from './actions/userinfo'
import {bindActionCreators} from 'redux'
//import styles
import localStore from './static/localStore'
import { CITYNAME } from './config/localStoreKey'
class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      initDone:false
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.initDone?<RouterMap></RouterMap>:<div>正在加载...</div>
        }
      </div>
    );
  }
  componentDidMount (){
      
    let cityName = localStore.getItem(CITYNAME)
    if(cityName==null){
      cityName = '北京'
    }
    //
    this.props.userinfoActions.updateCity({
      city:cityName
    })
    //将城市信息存储到 Redux 中

    this.setState({
      initDone:true
    })
  }
}
//把state作为属性传到props
function mapStateToProps(state){
  //reducers index.js  里面的userinfo
  return {
    currentCity:state.currentCity
  }
}
//把actions作为属性传到props
function mapDispatchToProps(dispatch){
  return {
    userinfoActions:bindActionCreators(userinfoActions,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
