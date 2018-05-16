import React, { Component } from 'react';
import FaInstagram from 'react-icons/lib/fa/instagram';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="socialMedia">
                          <a href="https://www.instagram.com/trashtalks_welisten" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} color='purple' /></a>
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
