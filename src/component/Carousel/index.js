import React from 'react';
import ReactSwipe from 'react-swipe';
import './index.css'
import png1 from '../../assets/images/01.png'
import png2 from '../../assets/images/02.png'
import png3 from '../../assets/images/03.png'
import png4 from '../../assets/images/04.png'
import png5 from '../../assets/images/05.png'
class Carousel extends React.Component {
    constructor (props){
       super(props)
       this.state = {
         slideIndex:0
       } 
    }
    render() {
      var options = {
        auto:2000,
        callback:(index)=>{
            this.setState({
              slideIndex:index
            })
        }
      }
      return (
        <div className="swiperBox">
          <ReactSwipe
            className="carousel"
            swipeOptions={options}
            ref={el => this.reactSwipeEl = el}>
            <div>
              <div className="navItems">
                <ul>
                  <li className="items">
                    <img src={png1} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png2} alt='大众点评' />
                    <p>美食</p>
                  </li >
                  <li className="items">
                    <img src={png3} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png4} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png5} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png1} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png2} alt='大众点评' />
                    <p>美食</p>
                  </li >
                  <li className="items">
                    <img src={png3} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png4} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png5} alt='大众点评' />
                    <p>美食</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="navItems">
                <ul>
                  <li className="items">
                    <img src={png1} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png2} alt='大众点评' />
                    <p>美食</p>
                  </li >
                  <li className="items">
                    <img src={png3} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png4} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png5} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png1} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png2} alt='大众点评' />
                    <p>美食</p>
                  </li >
                  <li className="items">
                    <img src={png3} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png4} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png5} alt='大众点评' />
                    <p>美食</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="navItems">
                <ul>
                  <li className="items">
                    <img src={png1} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png2} alt='大众点评' />
                    <p>美食</p>
                  </li >
                  <li className="items">
                    <img src={png3} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png4} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png5} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png1} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png2} alt='大众点评' />
                    <p>美食</p>
                  </li >
                  <li className="items">
                    <img src={png3} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png4} alt='大众点评' />
                    <p>美食</p>
                  </li>
                  <li className="items">
                    <img src={png5} alt='大众点评' />
                    <p>美食</p>
                  </li>
                </ul>
              </div>
            </div>
          </ReactSwipe>
          <div className="swiperDian">
            <span className={['abc',this.state.slideIndex===0?'active':''].join(' ')}></span>
            <span className={['abc',this.state.slideIndex===1?'active':''].join(' ')}></span>
            <span className={['abc',this.state.slideIndex===2?'active':''].join(' ')}></span>
          </div>
        </div>
        
      );
    }
}

export default Carousel