import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import BScroll from 'better-scroll'
import pubSub from 'pubsub-js'
import {getHomeData} from '../../redux/actions'

import Recommend from './Recommend/Recommend'

import '../../assets/css/home.styl'
import Suit from "./Suit/Suit";

class Home extends Component{
  state = {
    navActiveIndex : 0
  }
  componentWillMount () {
    this.props.getHomeData()
  }
  componentDidMount (props) {
    pubSub.subscribe('recommendBS', (name, data) => {
      this.recommendBS = data
    })
    pubSub.subscribe('suitBs', (name, data) => {
      this.suitBs = data
    })
  }
  componentDidUpdate () {
    pubSub.subscribe('suitBs', (name, data) => {
      this.suitBs = data
    })
    pubSub.subscribe('recommendBS', (name, data) => {
      this.recommendBS = data
    })
    if (!this.TopNavBs) {
      this.TopNavBs = new BScroll('.top-nav-warp', {
        click:true,
        scrollX: true
      })
    }
    const gg = document.querySelectorAll('.goodGridScroll')
    for (var i = 0; i < gg.length; i++) {
      var ggElement = gg[i]
      new BScroll(ggElement, {
        click: true,
        scrollX: true
      })
    }
  }
  toTop = () => {
    this.recommendBS.scrollTo(0, 0, 500)
    if (this.suitBs) {
      this.suitBs.scrollTo(0, 0, 500)
    }
  }
  topNavCheck = (e, index, id) =>{
    const {navActiveIndex} = this.state
    if (navActiveIndex === index) return
    this.setState({
      navActiveIndex : index
    })
    this.TopNavBs.scrollToElement(e.target, 300)
    this.props.history.replace(`/home/${id}`)
  }
  render(){
    console.log()
    const {headCateList} = this.props
    if (!headCateList) {
      return ''
    }
    return (
      <div>
        <div className="home">
          <div className="home-top">
          <div className="logo-search">
            <a href="javascript:;" className="logo"/>
            <div className="search">
          <span>
            <span className="search-icon"/>
            <span className="search-placeholder">搜索商品，共13222款好物</span>
          </span>
            </div>
          </div>
          <div className="top-nav-warp">
            <div className="top-nav">
              {headCateList ? headCateList.map((headCate, index)=>(
                <span className={`nav-item ${this.state.navActiveIndex===index ? 'active' : ''}`} key={index} onClick={(e) => (this.topNavCheck(e, index, headCate.id))}>
                  <span>{headCate.name}</span>
                </span>
              )) : ''}
          </div>
        </div>
      </div>
          <Switch>
            <Route path={'/home/1005111'} component={Recommend}/>
            <Route path={'/home/:id'} cateIndex={this.state.navActiveIndex + 1} component={Suit}/>
            <Redirect to='/home/1005111'/>
          </Switch>
          <div className="gift"/>
          <div className="to-top" onClick={this.toTop}/>
          <div className="mask" style={{display: 'none'}}>
            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png" className="close" alt={''}/>
            <div className="mask-wrapper">
              <div className="mask-content">
                <div className="content-title">
                  <div className="title-line"/>
                  <div className="title-text">新人专享礼</div>
                  <div className="title-line"/>
                </div>
                <div className="content-subTitle">
                  <span>感谢使用网易严选，已为你准备了一份专享礼</span>
                </div>
                <div className="content-img-info">
                  <img className="content-img" src="http://yanxuan.nosdn.127.net/15c8d56c8399c66338ca7a08bbb9ef9e.jpg?imageView&quality=85&thumbnail=232y232" alt=""/>
                    <div className="content-info">
                      <div className="info-title">
                        埃及进口长绒毛巾
                      </div>
                      <div className="info-desc">
                        Ralph Lauren
                      </div>
                      <div className="info-price">
                        <div className="price-new">
                          ￥32.00
                        </div>
                        <div className="price-old">
                          ￥199.00
                        </div>
                      </div>
                    </div>
                </div>
                <div className="content-favourable">
                  <span>领劵立减￥10.00</span>
                </div>
                <div className="content-to-more">
                  <span>查看更多特惠商品</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect (
  state => ({...state.homeData}),
  {getHomeData}
)(Home)
