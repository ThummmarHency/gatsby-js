import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLink,
  NavLogo,
  Navmenu,
} from "./NavbarElement";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);

  const changeNav = () => {
    if (window.screenY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/">EXPLOR</NavLogo>
            <MobileIcon onclick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <Navmenu>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/image">Image</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/destination">Destination</NavLink>
              </NavItem>
            </Navmenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
