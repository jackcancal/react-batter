import React, {Component} from 'react'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'
import {Route, Redirect, Switch} from 'react-router-dom'

import {getCategoryList} from '../../redux/actions'
import '../../assets/css/item.styl'
import ItemRouter from "./ItemRouter/ItemRouter";
class Item extends Component{
  state = {
    navActiveIndex : 0
  }
  componentWillMount () {
    this.props.getCategoryList()
  }
  componentDidUpdate () {
    if (!this.BS) {
      this.BS = new BScroll('.item-list', {
        click: true
      })
    }

  }
  toSwitch = (e, index, id) => {
    const {navActiveIndex} = this.state
    if (navActiveIndex === index) return
    this.setState({
      navActiveIndex : index
    })
    this.BS.scrollToElement(e.target, 300)
    this.props.history.replace(`/item/${id}`)
  }
  render(){
    const {categoryList} = this.props
    if (!categoryList.length) return ''
    return (
      <div className="item">
        <header className="item-header">
        <div className="item-header-wrapper">
          <img className="header-search" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt={''}/>
            <div className="header-text">搜索商品, 共13234款好物</div>
        </div>
      </header>
    <div className="item-list">
    <div className="item-list-wrapper">
      {categoryList.map((category, index) => (
        <div className={`item-list-class ${this.state.navActiveIndex === index ? 'active' : ''}`}
             onClick={(e) => (this.toSwitch(e, index, category.id))}
             key={index}>
          <span>{category.name}</span>
          <div className="after"/>
        </div>
      ))}
  </div>
  </div>
    <div className="item-content">
      <Switch>
        <Route path={'/item/:id'} component={ItemRouter}/>
        <Redirect to={'/item/1022001'}/>
      </Switch>
    </div>
  </div>

  )
  }
}
export default connect (
  state => ({categoryList: state.categoryList}),
  {getCategoryList}
)(Item)
