import React, { Component } from 'react';
import "./footer.css";

class footer extends Component {
    render() {
        return (
            <div className='footer'>
                Made with<span role='img' aria-label='heart'>❤️</span> by <a href='https://github.com/BasharAlzrigat'> Bashar Alzrigat</a>
            </div>
        );
    }
}

export default footer;