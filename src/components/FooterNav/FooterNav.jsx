import React, {Component} from 'react'
import {NavLink, withRouter} from 'react-router-dom'


import '../../assets/css/footerNav.styl'
class FooterNav extends Component{
  render(){
    return (
        <div className="footer">
          <div className="footer-home">
            <NavLink to={'/home'} activeClassName={'active'}>
              <div className="footer-class-icon icon-home"/>
              <span>首页</span>
            </NavLink>
          </div>
          <div className="footer-topic">
            <NavLink to={'/topic'} activeClassName={'active'}>
              <div className="footer-class-icon icon-topic" />
              <span>识物</span>
            </NavLink>
          </div>
          <div className="footer-class">
              <NavLink to={'/item'} activeClassName={'active'}>
                <div className="footer-class-icon icon-class"/>
                <span>分类</span>
              </NavLink>
          </div>
          <div className="footer-cart">
            <NavLink to={'/cart'} activeClassName={'active'}>
              <div className="footer-class-icon icon-cart"/>
              <span>购物车</span>
            </NavLink>
          </div>
          <div className="footer-person">
            <NavLink to={'/person'} activeClassName={'active'}>
              <div className="footer-class-icon icon-person"/>
              <span>个人</span>
            </NavLink>
          </div>
        </div>
    )
  }
}
export default withRouter(FooterNav)
