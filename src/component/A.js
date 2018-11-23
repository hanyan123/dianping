import React from 'react'
class A extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            
        }
    }
    render (){
        console.log(this.props)
        return (
            <div>
                {this.props.userinfo.city}
            </div>
        )
    }
}
export default A