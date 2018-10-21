import React, { Fragment } from "react";

import MediumLogo from '../assets/medium_logo.png';
import StyledLogo from '../assets/styled-components.png';
import search from '../assets/search.png';
function Header() {
  return (
    <Fragment>
      <div className="card header-container">

        <div className="header-top-container">
          <img className="header-logo-container" src={MediumLogo} alt="medium logo" />
          {/* <span> </span> */}
          <img className="styled-logo-container" src={StyledLogo} alt="styled components logo" />
          <div className="header-btn-container">
            <div className="btn login">Sign in</div>
            <div className="btn signup">Get started</div>
          </div>
        </div>

        <div className="header-bottom-container">
          <ul className="header-ul-container">
            <li><a href="jsx-a11y/anchor-is-valid">HOME</a></li>
            <li><a href="jsx-a11y/anchor-is-valid">V4 RELEASE</a></li>
            <li><a href="jsx-a11y/anchor-is-valid">PRIMITIVES SUPPORT</a></li>
            <li><span></span></li>
            <li><a href="jsx-a11y/anchor-is-valid">WEBSITE</a></li>
            <li><a href="jsx-a11y/anchor-is-valid"><img src={search} alt="search"></img></a></li>
          </ul>
        </div>

      </div>

    </Fragment>
  );
}

export default Header;
