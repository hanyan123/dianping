import React from 'react'
import back from '../../assets/images/back.png'
import './index.css'
class Header extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            
        }
    }
    render (){
        console.log(this.props)
        return (
            <div>
                <div className="headers">
                    <span className="headerIcon" onClick={this.goBack.bind(this)}>
                        <img src={back} />
                    </span>
                    标题
                </div>
            </div>
        )
    }
    goBack (){
        this.props.history.goBack();
    }
}
export default Header