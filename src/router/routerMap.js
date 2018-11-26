import {HashRouter, Route, Switch,Redirect,BrowserRouter} from 'react-router-dom';
import React from 'react';
import Home from '../container/Home/Home';
import Citys from '../component/Citys'

//https://segmentfault.com/q/1010000016220842/revision
class RouterMap extends React.Component {
    constructor (props){
        super(props)
    }
    render (){
        return (
            <HashRouter>
                <div>
                    <Route exact path="/" render={() => {return <Redirect to="/home" />}}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/city" component={Citys}></Route>
                    {/* <Route path="/invest" render={()=>(
                        <Invest data={{a:1,b:2}}>
                            <HashRouter><Route path="/invest/firstapp" component={ FirstApp } /></HashRouter>
                        </Invest>
                    )}></Route> */}
                </div>
            </HashRouter>
        )
    }
}
export default RouterMap