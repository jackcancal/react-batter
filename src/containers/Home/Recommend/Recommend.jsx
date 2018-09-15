import React, {Component} from 'react'
import BScroll from 'better-scroll'
import pubSub from 'pubsub-js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {connect} from 'react-redux'

import '../../../assets/css/recommend.styl'
import FoolrHeader from "../../../components/FoolrHeader/FoolrHeader";
import GoodsGrid from "../../../components/GoodsGrid/GoodsGrid";
import TitleGoodGrid from "../../../components/TitleGoodGrid/TitleGoodGrid";
class Recommend extends Component{
  componentDidMount () {

    new Swiper('.swiper-container', {
      loop:true,
      pagination: {
        el: '.swiper-pagination',
      },
    })
    this.recommendBS = new BScroll('.recommendScroll', {
      click:true
    })
    pubSub.publish('recommendBS',this.recommendBS)
    new BScroll('.special-goods-content', {
      click:true,
      scrollX: true
    })
  }
  componentDidUpdate () {
    pubSub.publish('recommendBS',this.recommendBS)
  }
  render(){
    const {
      focusList,
      policyDescList,
      tagList,
      newItemNewUserList,
      popularItemList,
      countDown,
      topicList
    } = this.props
    let sTagList = []
    if (tagList){
      sTagList = tagList.splice(0,4)
    }
    return (
      <div>
        <div ref={'recommendScroll'} className="scroll-container recommendScroll">
          <div className="scroll-content">
            <div ref={'recommendSwiper'} className="swiper-container">
              <div className="swiper-wrapper">
                {focusList ? focusList.map((f, index) => (
                  <div className="swiper-slide" key={index}>
                    <img className="swiper-img" src={f.picUrl} alt={''}/>
                  </div>
                )) : ''}
              </div>
              <div ref={'swiperP'} className="swiper-pagination">

              </div>
            </div>
            <ul className="g-grow">
              {policyDescList ? policyDescList.map((p, index) => (
                <li className="g-grow-item" key={index}>
                  <a href="javascript:;">
                    <img className="g-item-icon" src={p.icon} alt={''}/>
                    <span className="g-item-text">{p.desc}</span>
                  </a>
                </li>
              )) : ''}
            </ul>
            <div className="direct-goods">
              <FoolrHeader title={'品牌制造商直供'}/>
              <ul className="goods-card">
                {sTagList.length ? sTagList.map((st, index) => (
                  <li className={`goods-item goods-item${index + 1}`}
                      key={index}
                      style={{backgroundImage: `url(${st.picUrl})`}}>
                    <div className="item-detail">
                      <h4 className="item-origin">{st.name}</h4>
                      <div className="item-price">{st.floorPrice}元起</div>
                      <img className="item-new" style={{display: !st.newOnShelf ? 'none' : 'block'}} src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png" alt={''}/>
                    </div>
                  </li>
                )) : ''}
              </ul>
            </div>
            <GoodsGrid title={'新品首发'} list={newItemNewUserList} index={0}/>
            <GoodsGrid title={'人气推荐 · 好物精选'} list={popularItemList} index={1}/>
            <div className="limit-goods">
              <div className="limit-description">
                <div className="text">严选限时购</div>
                <div className="time">
                  <span className="time-table hour">00</span>
                  <span className="point">:</span>
                  <span className="time-table minute">00</span>
                  <span className="point">:</span>
                  <span className="time-table second">00</span>
                </div>
                <div className="next-time">
                  <span>下一场</span>
                  <span className="next-timer">10:00</span>
                  <span>开始</span>
                </div>
              </div>
              <div className="limit-img">
                <img src={countDown[0].listPicUrl} alt={''}/>
                <div className="price">
                  <div>￥{Math.floor(countDown[0].retailPrice * .9)}</div>
                  <div>￥{Math.floor(countDown[0].retailPrice)}</div>
                </div>
              </div>
            </div>
            <div className="sale"/>
            <div className="special-select">
              <FoolrHeader title={'专题精选'}/>
              <div className="special-goods-warp">
                <div className="special-goods-content">
                  <ul className="special-goods">
                    {topicList ? topicList.map((topic, index) => (
                      <li className="special-item" key={index}>
                        <img className="special-img" src={topic.itemPicUrl} alt={''}/>
                        <div className="text">
                          <h4>{topic.subtitle}</h4>
                          <span>{topic.priceInfo}元起</span>
                        </div>
                        <div className="desc">{topic.title}</div>
                      </li>
                    )) : ''}
                  </ul>
                </div>
              </div>
            </div>
            <TitleGoodGrid/>
          </div>
        </div>
      </div>
    )
  }
}
export default connect (
  state => ({...state.homeData})
)(Recommend)
