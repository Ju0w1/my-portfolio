import React from "react"
import MenuToggle from "./MenuToggle/MenuToggle";
import MenuLinks from "./MenuLinks/MenuLinks";
import NavBarContainer from "./NavbarContainer/NavbarContainer";
import MenuLogo from "./MenuLogo/MenuLogo";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};

export default NavBar;