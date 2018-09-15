import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Topic from "../Topic/Topic";
import Item from "../Item/Item";
import FooterNav from "../../components/FooterNav/FooterNav";
import Person from "../Person/Person";
import InterLayer from "../InterLayer/InterLayer";
import DownloadHeader from "../../components/DownloadHeader/DownloadHeader";

class Main extends Component{
  componentWillMount () {
    if (this.props.history.location.pathname === '/') {
      this.props.history.replace('/home')
    }
  }
  render(){
    return (
      <div>
        {/*<DownloadHeader/>*/}
        <div>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/item" component={Item}/>
            <Route path="/topic" component={Topic}/>
            <Route path="/person" component={Person}/>
            <Route path="/interlayer" component={InterLayer}/>
          </Switch>
          <FooterNav/>
        </div>
      </div>
    )
  }
}
export default connect (
  state => ({})
)(Main)
