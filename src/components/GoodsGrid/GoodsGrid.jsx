import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../../assets/css/goodsgrid.styl'
export default class GoodsGrid extends Component{
  static propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  }
  state = {
    newItembgUrl: '//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png',
    popularItembgUrl: '//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png',
    newItembgColor: 'rgb(216, 229, 241)',
    popularItembgColor: 'rgb(244, 233, 203)'
  }
  render(){
    return (
      <div>
        <div>
          <div className="index-floor">
            <div className="first-new" style={{backgroundImage: `url(${this.props.index ? this.state.popularItembgUrl : this.state.newItembgUrl})`}}>
            <div className="first-txt">{this.props.title}</div>
            <div className="text">
            <span style={{backgroundColor: !this.props.index ? this.state.newItembgColor : this.state.popularItembgColor}}>查看全部</span>
            <img className="to-show-all" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexNewArrow-f3b56d449b.png" alt={''}/>
          </div>
        </div>
        <div className="good-grid goodGridScroll" >
          <div className="scroll-container1">
            <ul className="scroll-wrapper">
              {this.props.list.map((item, index) => (
                <li className="scroll-slide" key={index}>
                  <img className="scroll-img" src={item.scenePicUrl} alt={''}/>
                  <div className="goods-pref">
                    {item.itemTagList.map((itemTag, index) => (
                      <span key={index}>
                        <span>{itemTag.name}</span>
                      </span>
                    ))}
                  </div>
                  <div className="goods-name">
                    {item.name}
                  </div>
                  <div className="goods-surprise">
                    {item.simpleDesc}
                  </div>
                  <div className="goods-price">
                    ￥{item.retailPrice}
                  </div>
                </li>
              ))}
        <li className="scroll-slide scroll-slide-last">
          <div>查看全部</div>
        </li>
      </ul>
  </div>
  </div>
  </div>
  </div>
      </div>
    )
  }
}
