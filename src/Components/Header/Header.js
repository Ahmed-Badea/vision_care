import React, { useEffect, useState } from 'react';
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
import Logo from '../../assets/images/vision_care_logo.png'
import text from './text.json'
import './Header.scss'

function Header(args) {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(()=> {
    setIndexDir()
  }, [])

  const setIndexDir = () => {
    var html = document.getElementsByTagName("html")[0];
    var att = document.createAttribute("dir");
    if(localStorage.lang === "ar"){
      att.value = "rtl";
    }else{
      att.value = "ltr"
    }
    html.setAttributeNode(att)
  }
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
        <NavbarBrand href="/">
          <img className='logo' src={Logo} alt='Vision Care' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {Text.nav_links.map(ele => (
              <NavItem>
                <NavLink className={window.location.pathname === ele.path ? "active" : ""} href={ele.path}>{ele.name}</NavLink>
              </NavItem>
            ))}
          </Nav>
          <div className="lang_btn_container">
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