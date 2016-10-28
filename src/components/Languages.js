import React, { Component } from 'react';
import NavLink from './NavLink'
//I nested the children of  to render the nested
//route in the parent component by using this.Props.children
class Languages extends Component {
  render() {
    return (
      <div className="main-content languages">
        <div className="language-header group">
          <h2>Languages</h2>
          <ul className="language-nav">
            <li><NavLink to="/languages/html">HTML</NavLink></li>
            <li><NavLink to="/languages/css">CSS</NavLink></li>
            <li><NavLink to="/languages/javascript">JavaScript</NavLink></li>
          </ul>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default Languages;
