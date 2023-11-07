import React, { useState, useEffect, useRef } from 'react'
import { useIsVisible } from "react-is-visible"
import {dependencies} from '../../Tools/dependencies'
import Logo from './../../assets/images/vision_care.png'
import text from './text.json'
import './Home.scss'

function Home() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  const [show, setShow] = useState(false);
  useEffect(() => {
    // Use a setTimeout to delay the animation
    const timeout = setTimeout(() => {
      setShow(true);
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const scrollDown = (offset) => {
    const element = document.getElementById('company_brief');
    const offsetTop = element.offsetTop + offset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth' // For smooth scrolling, you can remove this if not needed.
    });
  }

  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);
  const [hasAnimated, setHasAnimated] = useState(false);
  if (isVisible && !hasAnimated) {
    setHasAnimated(true);
    nodeRef.current.classList.add('animate__animated', 'animate__zoomInDown');
  }

  const renderBody = () => (
    <div className='home_container'>
      {/* Landing */}
      <section className='landing'>
        <div className='overlay'></div>
        <p className={`slide-in ${show ? 'active' : ''}`}>{Text.description}</p>
        <div className={`arrow_down slide-in ${show ? 'active' : ''}`} onClick={()=>scrollDown(-140)}>
          <i className="fas fa-angle-double-down fa-2x"></i>
        </div>
      </section>
      {/* Company Brief */}
      <section ref={nodeRef} className='company_brief' id='company_brief'>
        <img src={Logo} alt='Vision Care' className='img-fluid'/>
      </section>
    </div>
  )

  return (
    <div>
      {renderBody()}
    </div>
  )
}

export default Home