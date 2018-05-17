import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="socialMedia">
                      <a href="https://www.instagram.com/trashtalksolutions" target="_blank" rel="noopener noreferrer"><Icon disabled name='instagram' size='big' color='teal'/></a>
                      <a href="https://twitter.com/trashtalksol" target="_blank" rel="noopener noreferrer"><Icon disabled name='twitter' size='big' color='teal'/></a>
                    </div>
                    <div className="copyright">
                      Copyright &copy; TrashTalks 2018
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Footer;
