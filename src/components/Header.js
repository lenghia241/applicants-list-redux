import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header" >
                <img src="logo.jpg" alt="logo" className="logo" />
                <h3 className="company">Nord Software</h3>
            </div>
        );
    }
}

export default Header;