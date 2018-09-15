/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */
import {combineReducers} from 'redux'
import {
  RECEIVE_HOME,
  RECEIVE_CATEGORY_LIST,
  RECEIVE_CATE,
} from './action-types'

//产生homeData的reducer
const initHomeData = {

}
function homeData(state=initHomeData, action) {
  switch (action.type) {
    case RECEIVE_HOME:
      const homeData = action.data
      return {...state, ...homeData}
    default:
      return state
  }
}
const initCate = {}
function cate(state=initCate, action) {
  switch (action.type) {
    case RECEIVE_CATE:
      return action.data
    default:
      return state
  }
}
const initCategoryList = []
function categoryList(state=initCategoryList, action) {
  switch (action.type) {
    case RECEIVE_CATEGORY_LIST:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  homeData,
  cate,
  categoryList
})
// 向外暴露的状态的结构:
