import React, { Component } from 'react';
import Social from './Social';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Social
          iconColor='icon-white'
        />
        <p>&copy;Stella Chung</p>
      </footer>
    );
  }
}

export default Footer;



