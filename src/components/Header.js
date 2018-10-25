import React, { Fragment } from "react";

import monogram from '../assets/monogram.png';
import StyledLogo from '../assets/styled-components.png';
// import search from '../assets/search.png';
// import Magnify from 'mdi-material-ui/Magnify';
import { Magnify } from 'mdi-material-ui';


function Header() {
  return (
    <Fragment>
      <div className="card header-container">

        <div className="header-top-container">
          <img className="header-logo-container" src={monogram} alt="medium logo" />
          {/* <span> </span> */}
          <img className="styled-logo-container" src={StyledLogo} alt="styled components logo" style={{ backgroundColor: 'transparent' }} />
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
            <a href="jsx-a11y/anchor-is-valid"><Magnify style={{ backgroundColor: 'transparent', color: 'white' }} /></a>
            {/* <li><a href="jsx-a11y/anchor-is-valid"><img src={Magnify} alt="search"></img></a></li> */}
          </ul>
        </div>

      </div>

    </Fragment>
  );
}

export default Header;
