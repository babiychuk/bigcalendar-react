import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./components/Layout/Layout";
import Index from "./components/Index/Index";
import NotFound from "./components/NotFound";
import Dnd from "./components/Calendar/Dnd";

import "./index.css";
class App extends Component {

  render () {
    let routes = (
      <Switch>        
        <Route exact path='/' component={Index} />               
        <Route exact path='/calendar' component={Dnd} />   
        <Route exact path="/notfound" component={NotFound} status={404} />
        <Route path="*" component={NotFound} status={404} />
        <Redirect to="/" />        
      </Switch>
    );
    
    return (
      <Layout> 
        <CssBaseline />        
        {routes}
      </Layout>
    );
  }
}

export default (App);
