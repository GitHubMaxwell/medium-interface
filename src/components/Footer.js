import React from "react";
import StyledFoot from '../assets/styled-foot.png';

function Footer() {
  return (
    <div className="card footer">
      <img src={StyledFoot} alt='whatever' />
      <p>Never miss a story from styled-components, when you sign up for medium. <a href="jsx-a11y/anchor-is-valid">Learn more</a></p>
      <div className="btn getupdates">Get updates</div>
    </div>
  );
}

export default Footer;
