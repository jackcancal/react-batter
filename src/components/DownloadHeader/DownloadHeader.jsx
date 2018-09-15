import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../../assets/css/downloadheader.styl'
class DownloadHeader extends Component{
  render(){
    return (
      <div className="download">
        <div className="download-header">
          <div className="clear">×</div>
        <div className="logo-title">
          <div className="logo">

          </div>
          <div className="title">
            <div className="title-sub">网易严选</div>
            <div className="title-desc">立即领取APP新人专享1000元礼包</div>
          </div>
        </div>
        <div className="open-app">打开App</div>
      </div>
  </div>
    )
  }
}
export default connect (
  state => ({})
)(DownloadHeader)
