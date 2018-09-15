import React, {Component} from 'react'
import PropTypes from 'prop-types'

import '../../assets/css/foolrheader.styl'
export default class FoolrHeader extends Component{
    static propTypes = {
      title: PropTypes.string.isRequired
    }
    render(){
    return (
      <header className="goods-header">
        <span>{this.props.title}</span>
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png" alt={'图片'}/>
      </header>
    )
  }
}
