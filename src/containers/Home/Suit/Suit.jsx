import React, {Component} from 'react'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'
import pubSub from 'pubsub-js'
import {getCate} from '../../../redux/actions'

import '../../../assets/css/suit.styl'

class Suit extends Component{
  componentWillMount () {
    this.props.getCate()
  }
  componentDidUpdate () {
    if (this.refs.suitBscroll && !this.SBS){
      this.SBS = new BScroll('.scroll-warp', {
        click: true
      })
      pubSub.publish('suitBs', this.SBS)
    }
  }
  render(){
    const cateId = Number(this.props.match.params.id)
    const {cate} = this.props
    if (!cate.length) {
      return ''
    }
    let cateIndex = cate.findIndex((i, index)=>i.id===cateId)
    return (
      <div className="scroll-warp" ref={'suitBscroll'}>
    <div className="scroll-content">
      <img className="top-img" src={cate[cateIndex].wapBannerUrl} alt={''}/>
      <ul className="family-list">
        {cate[cateIndex].subCateList.map((c, index) => (
          <li className="family-item" key={index}>
            <div className="item-header">
              <header className="header">
                <p className="header-name">{c.name}</p>
                <p className="header-desc">{c.frontName}</p>
              </header>
            </div>
            <div className="item-grid">
              <ul className="grid-list">
                <li className="grid-item">
                  <img className="item-img" src="http://yanxuan.nosdn.127.net/53d04514f65209d497ee27e2f4efe583.jpg?imageView&quality=65&thumbnail=330x330" alt="" />
                  <div className="item-text">
                    <div className="text-desc">经典暖调配色，随性美式加身</div>
                    <div className="text-new">
                      <span>新品</span>
                    </div>
                    <div className="text-name">秋遇·漫花开贡缎四件套</div>
                    <div className="text-price">￥439</div>
                  </div>
                </li>
                <li className="grid-item">
                  <img className="item-img" src="http://yanxuan.nosdn.127.net/53d04514f65209d497ee27e2f4efe583.jpg?imageView&quality=65&thumbnail=330x330" alt="" />
                  <div className="item-text">
                    <div className="text-desc">经典暖调配色，随性美式加身</div>
                    <div className="text-new">
                      <span>新品</span>
                    </div>
                    <div className="text-name">秋遇·漫花开贡缎四件套</div>
                    <div className="text-price">￥439</div>
                  </div>
                </li>
                <li className="grid-item">
                  <img className="item-img" src="http://yanxuan.nosdn.127.net/53d04514f65209d497ee27e2f4efe583.jpg?imageView&quality=65&thumbnail=330x330" alt="" />
                  <div className="item-text">
                    <div className="text-desc">经典暖调配色，随性美式加身</div>
                    <div className="text-new">
                      <span>新品</span>
                    </div>
                    <div className="text-name">秋遇·漫花开贡缎四件套</div>
                    <div className="text-price">￥439</div>
                  </div>
                </li>
                <li className="grid-item">
                  <img className="item-img" src="http://yanxuan.nosdn.127.net/53d04514f65209d497ee27e2f4efe583.jpg?imageView&quality=65&thumbnail=330x330" alt="" />
                  <div className="item-text">
                    <div className="text-desc">经典暖调配色，随性美式加身</div>
                    <div className="text-new">
                      <span>新品</span>
                    </div>
                    <div className="text-name">秋遇·漫花开贡缎四件套</div>
                    <div className="text-price">￥439</div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        ))}
    </ul>
  </div>
  </div>
    )
  }
}
export default connect (
  state => ({cate: state.cate}),
  {getCate}
)(Suit)
