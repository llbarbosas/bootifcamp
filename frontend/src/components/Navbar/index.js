import MediaQuery from "react-responsive";
import React from "react";
import NavBarDesktop from "./Desktop";
import NavBarMobile from "./Mobile";
const NavBar = () => (
  <div>
    <MediaQuery minWidth={779}>
      <NavBarDesktop />
    </MediaQuery>
    <MediaQuery maxWidth={779}>
      <NavBarMobile />
    </MediaQuery>
  </div>
);
export default NavBar;