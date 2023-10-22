import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { dependencies } from '../../Tools/dependencies';
import text from './text.json'
import './Header.scss'

function Header(args) {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleLangChange = () => {
    if(currentLang === "en"){
      localStorage.lang = "ar";
    }else{
      localStorage.lang = "en";
    }
    window.location.reload();
  }

  return (
    <div className='vision_header'>
      <Navbar {...args} fixed='top' expand='lg'>
        <NavbarBrand href="/">Vision Care</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {Text.nav_links.map(ele => (
              <NavItem>
                <NavLink href={ele.path}>{ele.name}</NavLink>
              </NavItem>
            ))}
          </Nav>
          <div className="ml-auto">
            <Button className='lang_btn' onClick={()=>handleLangChange("en")}>
              {Text.lang}
              <i class="fa-solid fa-globe"></i>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;