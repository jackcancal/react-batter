/*
入口JS
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'
import InterLayer from './containers/InterLayer/InterLayer'
import Person from './containers/Person/Person'

import './mock/mockServer'
import './assets/css/reset.css'

import Main from "./containers/Main/Main";
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main}/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
