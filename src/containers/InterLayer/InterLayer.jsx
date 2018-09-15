import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../assets/css/interlayer.styl'
class InterLayer extends Component{
  interTo = () => {
    this.props.history.replace('/')
  }
  render(){
    return (
      <div className="interlayer">
        <img className="img1" src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt=""/>
          <img className="img2" src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt=""/>
            <div className="to">
              <img className="img3" src="//yanxuan.nosdn.127.net/d600f8c56fc184e199aa389e09fb2ff9.jpg" alt=""/>
                <div className="download-app">

                </div>
                <span className="continue" onClick={this.interTo}>

                </span>
            </div>
      </div>
    )
  }
}
export default connect (
  state => ({})
)(InterLayer)
