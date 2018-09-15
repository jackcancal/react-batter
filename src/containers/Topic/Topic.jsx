import React, {Component} from 'react'
import {connect} from 'react-redux'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import 'swiper/dist/css/swiper.min.css'

import '../../assets/css/topic.styl'
import {reqTopic} from '../../api'
class Topic extends Component{
  state = {
    topic: {}
  }
  async componentWillMount () {
    const result = await reqTopic()
    if (result.code === 0) {
      const topic = result.data
      this.setState({
        topic
      })
    }
  }
  componentDidUpdate () {
    new Swiper('.shiwu',{
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
    })
    new BScroll('.explore-channels', {
      click: true,
      scrollX: true
    })
    new BScroll('.scroll-container', {
      click: true,
    })
  }
  render(){
    const {topic} = this.state
    if (!topic.banner) return ''
    return (
      <div>
        <div className="topic">
          <div className="topic-header">
          <header className="header">
            <div className="header-home"/>
            <div className="header-logo"/>
            <div className="header-search-cart">
              <div className="search"/>
              <div className="cart"/>
            </div>
          </header>
        </div>
        <div className="scroll-container">
        <div className="scroll-warp1">
          <div className="swiper-container shiwu">
            <div className="swiper-wrapper">
              {topic.banner && topic.banner.map((ban, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="content">
                    <img className="content-img" src={ban.picUrl}alt={''} />
                    <div className="middle-content">
                      <div className="middle-content-wrapper">
                        <div className="sub-title">
                          <div className="title-line"/>
                          <div className="title-text">{ban.subTitle}</div>
                          <div className="title-line"/>
                        </div>
                        <div className="title">{ban.title}</div>
                        <div className="desc">{ban.desc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="explore-channels">
          <ul className="explore-wrapper">
            {topic.column && topic.column.map((col, index) => (
              <li className="explore-item" key={index}>
                <div className="item-pic">
                  <img className="pic-img" src={col.picUrl} alt="" alt={''} />
                  <div className="pic-num">{col.articleCount}</div>
                </div>
                <div className="item-text">{col.title}</div>
              </li>
            ))}
        </ul>
      </div>
    <div className="explore-for-you">
      <header className="for-you-header">
        {topic.recommendOne && topic.recommendOne.typeName}
      </header>
      <div className="for-you-item-1">
        <img className="item-1-img" src={topic.recommendOne.picUrl} alt={''} />
        <div className="item-1-info">
          <div className="info-desc">
            <span className="desc-text">{topic.recommendOne.title}</span>
            <span className="desc-price">{topic.recommendOne.priceInfo}元起</span>
          </div>
          <div className="info-name">{topic.recommendOne.subTitle}</div>
        </div>
        <div className="icon">{topic.recommendOne.nickname}</div>
      </div>
      <div className="for-you-item-2">
        <div className="item-2-info">
          <div className="info-header">
            <img className="header-user-pic" src={topic.recommendTwo.avatar} alt={''} />
            <div className="header-username">
              <span>{topic.recommendTwo.nickname}</span>
            </div>
          </div>
          <div className="info-title ellipsis">{topic.recommendTwo.title}</div>
          <div className="info-desc">{topic.recommendTwo.subTitle}</div>
        </div>
        <div className="item-2-pic">
          <img className="pic-img" src={topic.recommendTwo.picUrl} alt={''} />
          <div className="pic-icon">{topic.recommendTwo.typeName}</div>
        </div>
      </div>
      <div className="for-you-item-2">
        <div className="item-2-info">
          <div className="info-header">
            <img className="header-user-pic" src={topic.recommendThree.avatar} alt={''}/>
            <div className="header-username">
              <span>{topic.recommendThree.nickname}</span>
            </div>
          </div>
          <div className="info-title ellipsis">{topic.recommendThree.title}</div>
          <div className="info-desc">{topic.recommendThree.subTitle}</div>
        </div>
        <div className="item-2-pic">
          <img className="pic-img" src={topic.recommendThree.picUrl} alt={''} />
          <div className="pic-icon">{topic.recommendThree.typeName}</div>
        </div>
      </div>
      <div className="for-you-item-1">
        <img className="item-1-img" src={topic.zhenOne.picUrl} alt={''} />
        <div className="item-1-info">
          <div className="info-desc">
            <span className="desc-text">{topic.zhenOne.title}</span>
            <span className="desc-price">{topic.zhenOne.priceInfo}元起</span>
          </div>
          <div className="info-name">{topic.zhenOne.subTitle}</div>
        </div>
        <div className="icon">{topic.zhenOne.nickname}</div>
      </div>
      <div className="for-you-item-2">
        <div className="item-2-info">
          <div className="info-header">
            <img className="header-user-pic" src={topic.zhenTwo.avatar} alt={''} />
            <div className="header-username">
              <span>{topic.zhenTwo.nickname}</span>
            </div>
          </div>
          <div className="info-title ellipsis">{topic.zhenTwo.title}</div>
          <div className="info-desc">{topic.zhenTwo.subTitle}</div>
        </div>
        <div className="item-2-pic">
          <img className="pic-img" src={topic.zhenTwo.picUrl} alt={''} />
          <div className="pic-icon">{topic.zhenTwo.typeName}</div>
        </div>
      </div>
      <div className="for-you-item-2">
        <div className="item-2-info">
          <div className="info-header">
            <img className="header-user-pic" src={topic.zhenThree.avatar} alt={''} />
            <div className="header-username">
              <span>{topic.zhenThree.nickname}</span>
            </div>
          </div>
          <div className="info-title ellipsis">{topic.zhenThree.title}</div>
          <div className="info-desc">{topic.zhenThree.subTitle}</div>
        </div>
        <div className="item-2-pic">
          <img className="pic-img" src={topic.zhenThree.picUrl} alt={''} />
          <div className="pic-icon">{topic.zhenThree.typeName}</div>
        </div>
      </div>
    </div>
    <div className="ten-fifteen">
      <header className="fifteen-header">十点一刻</header>
      <div className="fifteen-scroll-container">
        <ul className="fifteen-scroll-wrapper">
          <li className="fifteen-item">
            <div className="item-title1">-- 今日话题 --</div>
            <div className="item-title2">你有哪些租房经历</div>
            <div className="item-desc">聊聊你用过的租房神器</div>
            <div className="item-join">
              <div className="join-avatar">
                <img className="avatar-img" src="//yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg?imageView&thumbnail=48y48" alt={''} />
                  <img className="avatar-img" src="//yanxuan.nosdn.127.net/7b43828bf9c1cb0d7d5acf538d8c4b08.jpg" alt={''} />
                    <img className="avatar-img" src="//q.qlogo.cn/qqapp/101330628/5737A557E387B48F6964F4B1CFF0C4A9/100" alt=""alt={''} />
                      <img className="avatar-img" src="//yanxuan.nosdn.127.net/0e6cc440246db5f3ea2e908c16554ec1" alt={''} />
              </div>
              <div className="join-info">
                991人参与话题
              </div>
            </div>
          </li>
          <li className="fifteen-item fifteen-item-last">
            <div className="more">
              <div>
                <div className="text">查看全部话题</div>
                <div className="go-more"/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="explore-for-you">
      <header className="for-you-header">
        为你推荐
      </header>
      <div className="for-you-item-1">
        <img className="item-1-img" src="//yanxuan.nosdn.127.net/201eb7ad6eeb93fd9468f3f9f2deb8d4.jpg?imageView&quality=75" alt={''} />
          <div className="item-1-info">
            <div className="info-desc">
              <span className="desc-text">9月服饰鞋包上新</span>
              <span className="desc-price">59元起</span>
            </div>
            <div className="info-name">秋天从现在开始，更有超值换季折扣等你哦</div>
          </div>
          <div className="icon">严选推荐</div>
      </div>
      <div className="for-you-item-2">
        <div className="item-2-info">
          <div className="info-header">
            <img className="header-user-pic" src="//yanxuan.nosdn.127.net/bb9873e306c58607c77c3577344eced5.jpg?imageView&quality=75&thumbnail=48y48" alt=""/>
              <div className="header-username">
                <span>饮食组：万万</span>
              </div>
          </div>
          <div className="info-title ellipsis">10分钟做出异域大餐</div>
          <div className="info-desc">所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</div>
        </div>
        <div className="item-2-pic">
          <img className="pic-img" src="//yanxuan.nosdn.127.net/e267628e894f76ff50a6afe1d4a265dd.jpg?imageView&quality=75" alt=""/>
            <div className="pic-icon">挑款师推荐</div>
        </div>
      </div>
      <div className="for-you-item-2">
        <div className="item-2-info">
          <div className="info-header">
            <img className="header-user-pic" src="//yanxuan.nosdn.127.net/bb9873e306c58607c77c3577344eced5.jpg?imageView&quality=75&thumbnail=48y48" alt=""/>
              <div className="header-username">
                <span>饮食组：万万</span>
              </div>
          </div>
          <div className="info-title ellipsis">10分钟做出异域大餐</div>
          <div className="info-desc">所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</div>
        </div>
        <div className="item-2-pic">
          <img className="pic-img" src="//yanxuan.nosdn.127.net/e267628e894f76ff50a6afe1d4a265dd.jpg?imageView&quality=75" alt=""/>
            <div className="pic-icon">挑款师推荐</div>
        </div>
      </div>
    </div>
    <div className="explore-look">
      <header className="explore-look-header">
        严选LOOK
      </header>
      <img className="explore-look-img" src={topic.yxLook.picUrl} alt={''} />
      <div className="explore-look-info">
        <div className="look-info-user">
          <img className="look-user-avatar" src={topic.yxLook.avatar}alt={''} />
          <div className="look-username">{topic.yxLook.content}</div>
        </div>
        <div className="look-user-desc">加了冰块一个小金橘，还是觉得比较甜。照评论员说的，下次用苏打水稀释。因为只优惠了10块钱，我有囤了一瓶～</div>
      </div>
    </div>
    <div className="more-wonderful">
      <header className="more-wonderful-header">
        <div className="wonderful-header-line"/>
        <div className="wonderful-header-text">更多精彩</div>
        <div className="wonderful-header-line"/>
      </header>
      {topic.findMore.map((g, index) => (
        <div className="more-wonderful-item" key={index}>
          <img className="item-img" src={g.itemPicUrl} alt={''} />
          <div className="item-info">{g.title}</div>
        </div>
      ))}
  </div>
  </div>
  </div>
  </div>
      </div>
    )
  }
}
export default connect (
  state => ({})
)(Topic)
