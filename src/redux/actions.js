/*
包含n个action creator
异步action
同步action
 */
import {
  RECEIVE_HOME,
  RECEIVE_CATE,
  RECEIVE_CATEGORY_LIST,
} from './action-types'
import {
  reqCate,
  reqHome,
  reqCategoryList,
} from '../api'

//更新homeData的同步action
const saveHomeData = ({homeData}) => ({type: RECEIVE_HOME, data: homeData})
const saveCate = ({cate}) => ({type: RECEIVE_CATE, data: cate})
const saveCategoryList = ({categoryList}) => ({type: RECEIVE_CATEGORY_LIST, data: categoryList})
//获取homeData的异步action
export const getHomeData = () => {
  return async dispatch => {
    const result = await reqHome()
    if (result.code === 0) {
      dispatch(saveHomeData({homeData: result.data}))
    }
  }
}
export const getCate = () => {
  return async dispatch => {
    const result = await reqCate()
    if (result.code === 0) {
      dispatch(saveCate({cate: result.data}))
    }
  }
}
export const getCategoryList = () => {
  return async dispatch => {
    const result = await reqCategoryList()
    if (result.code === 0) {
      dispatch(saveCategoryList({categoryList: result.data}))
    }
  }
}
