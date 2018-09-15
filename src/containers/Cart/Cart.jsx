import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../../assets/css/cart.styl'
class Cart extends Component{
  render(){
    return (
      <div className="cart">
        <div className="cart-header">
        <div className="cart-header-title">购物车</div>
        <div className="cart-header-right">领劵</div>
      </div>
    <ul className="g-grow">
      <li className="g-grow-item">
        <a href="javascript:;">
          <div className="g-item-icon">

          </div>
          <span className="g-item-text">30天无忧退货</span>
        </a>
      </li>
      <li className="g-grow-item">
        <a href="javascript:;">
          <div className="g-item-icon">

          </div>
          <span className="g-item-text">48小时快速退款</span>
        </a>
      </li>
      <li className="g-grow-item">
        <a href="javascript:;">
          <div className="g-item-icon">

          </div>
          <span className="g-item-text">满88免邮</span>
        </a>
      </li>
    </ul>
    <div className="empty">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="" />
    </div>
    <div className="add-something">去添加点儿什么吧</div>
    <div className="to-login">登录</div>
  </div>
    )
  }
}
export default connect (
  state => ({})
)(Cart)
