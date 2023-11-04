import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { dependencies } from '../../Tools/dependencies';
import Logo from '../../assets/images/vision_care.png'
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
          <img className='logo' src={Logo} alt='TALENT VISION CARE' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            {Text.nav_links.map((ele, index) => (
              ele.drop_down ?
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {ele.name}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {ele.routes.map((item, index) => (
                      <DropdownItem key={index} href={item.path}>
                        {item.name}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              :
                <NavItem key={index} >
                  <NavLink className={window.location.pathname === ele.path ? "active" : ""} href={ele.path}>{ele.name}</NavLink>
                </NavItem>
            ))}
          </Nav>
          <div className="lang_btn_container">
            <Button className='lang_btn' onClick={()=>handleLangChange("en")}>
              {Text.lang}
              <i className="fa-solid fa-globe"></i>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;