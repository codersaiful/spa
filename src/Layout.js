import React, { Component } from 'react';

/**
 * Router
 */
 import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";



//import Items/Pages
import Header from './items/Header';
import Form from './items/Form';
import Home from './items/Home';
import Contact from './items/Contact';
import Service from './items/Service';


class Layout extends Component{

    render(){
        return(
            <HashRouter>
                <div className="layout-wrapper">
                    <Header />
                    <Route path="/home" component={Home} />
                    <Route path="/service" component={Service} />
                    <Route path="/contact" component={Contact} />
                </div>
            </HashRouter>
            
        );
    }
}

export default Layout;