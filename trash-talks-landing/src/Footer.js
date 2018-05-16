import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <footer>
            <div className="container">
                <div className="row">
                    <div className="copyright">
                      Copyright &copy; TrashTalks 2018
                    </div>
                    <div className="socialMedia">
                          <a href="https://www.instagram.com/trashtalks_welisten" target="_blank" rel="noopener noreferrer">instagram</a>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
