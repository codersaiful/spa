import React, { Component } from 'react';

//Import Component Files
import Menu from '../components/Menu';

class Header extends Component{

    render(){
        return(
            <header className="header-wrapper">
                <div className="header">
                    <h1>React SPA</h1>
                </div>
                <Menu />
            </header>
        );
    }
}

export default Header;