import React, {Component} from 'react'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'

import '../../../assets/css/itemRouter.styl'
class ItemRouter extends Component{
  componentDidUpdate () {
    if (!this.ItemBs){
      this.ItemBs = new BScroll('.item-router', {
        click: true
      })
    }
  }
  render(){
    const {categoryList} = this.props
    if (!categoryList.length) return ''
    const cateId = Number(this.props.match.params.id)
    if (!categoryList.length) {
      return ''
    }
    let cateIndex = categoryList.findIndex((i, index)=>i.id===cateId)
    return (
      <div className="item-router">
        <div className="item-router-container">
          <img className="header-img" src={categoryList[cateIndex].wapBannerUrl} alt={'图片'}/>
          <ul className="router-list">
            {categoryList[cateIndex].subCateList.map((subCate, index) => (
              <li className="router-item" key={index}>
                <img className="router-item-img" src={subCate.wapBannerUrl}  alt={'图片'}/>
                <div className="router-item-text">{subCate.name}</div>
              </li>
            ))}
        </ul>
      </div>
  </div>
    )
  }
}

export default connect(
  state => ({categoryList: state.categoryList})
)(ItemRouter)
