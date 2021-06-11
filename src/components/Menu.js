import React, { Component } from 'react';

class Menu extends Component{

    render(){
        return(
            <div className="manu-wrapper">
                <ul className="navbar">
                <li><a href="./" className="active">Home</a></li>
                <li><a href="./service">Service</a></li>
                <li><a href="./contact">Contact</a></li>
                    
                </ul>
            </div>
        );
    }
}

export default Menu;