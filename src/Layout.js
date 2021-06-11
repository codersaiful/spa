import React, { Component } from 'react';





//import Items/Pages
import Header from './items/Header';
import Form from './items/Form';
import Contact from './items/Contact';
import Service from './items/Service';


class Layout extends Component{

    render(){
        return(
            <div className="layout-wrapper">
                <Header />
                <Service />
            </div>
        );
    }
}

export default Layout;