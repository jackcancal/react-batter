import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../../assets/css/titlegoodgrid.styl'
import FoolrHeader from "../FoolrHeader/FoolrHeader";
class TitleGoodGrid extends Component{
  render(){
    const {cateList} = this.props
    return (
      <div>
        {cateList ? cateList.map((cate, index) => (
          <div className="title-good-grid" key={index}>
            <FoolrHeader title={cate.name + '好货'}/>
            <div className="good-grid-content">
              <ul className="good-grid-ul">
                {cate.itemList.map((item, index) => (
                  <li className="good-grid-item" key={index}>
                    <img className="good-grid-img" src={item.listPicUrl} alt={''}/>
                    <div className="good-grid-wrap">
                      <div className="good-grid-decs ellipsis">{item.simpleDesc}</div>
                      <div className="good-grid-price">
                        <p>
                          <span>{item.itemTagList[0] && item.itemTagList[0].name}</span>
                        </p>
                      </div>
                      <div className="good-grid-name ellipsis">{item.name}</div>
                      <div className="good-price">￥{item.retailPrice}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )) : ''}
      </div>
    )
  }
}
export default connect (
  state => ({cateList: state.homeData.cateList})
)(TitleGoodGrid)
