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
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
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

  const [modal, setModal] = useState(false);
  const toggleLangModal = () => setModal(!modal);

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
  const handleLangChange = (lang) => {
    console.log(lang)
    if(currentLang !== lang){
      localStorage.lang = lang;
      window.location.reload();
    }
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
                      <DropdownItem key={index}>
                        <NavLink className={window.location.pathname === item.path ? "active" : ""} href={item.path}>{item.name}</NavLink> 
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
            <Button className='lang_btn' onClick={toggleLangModal}>
              {Text.lang.button}
              <i className="fa-solid fa-globe"></i>
            </Button>
          </div>
        </Collapse>
      </Navbar>
      {/* Language Modal */}
      <Modal isOpen={modal} toggle={toggleLangModal} {...args}>
        <ModalHeader toggle={toggleLangModal}>{Text.lang.select}</ModalHeader>
        <ModalBody>
        {Text.lang.languages.map((ele, index) => (
          <p key={index} onClick={()=>handleLangChange(ele.value)}>{ele.name}</p>
        ))}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Header;