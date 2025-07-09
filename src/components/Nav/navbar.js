import React, { useState } from "react";
import './navbar.css';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import {Link} from 'react-scroll';

const Nav = () => {
    const [showMenu , setShowMenu] = useState(false);
    return(
        <nav className="navbar">
            <div className="logo">
                <h4>Ayaan</h4>
            </div>

            <div className="desktopMenu">
                
                <Link activeClass='active' to='intro' spy={true}  smooth={true} offset={-100} duration={500} className="menuItem">Home </Link>
                <Link activeClass='active' to='about' spy={true}  smooth={true} offset={-100} duration={500} className="menuItem">About</Link>
                <Link activeClass='active' to='skills' spy={true}  smooth={true} offset={-100} duration={500} className="menuItem">Skills</Link>
                <Link activeClass='active' to='works' spy={true}  smooth={true} offset={-100} duration={500} className="menuItem">Projects</Link>
                
                
            </div>

            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior : 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg"/> Contact Me
            </button>

            <img  src={menu} alt='Menu' className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display:showMenu? 'flex' : "none"}}>
                <Link activeClass='active' to='intro' spy={true}  smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home </Link>
                <Link activeClass='active' to='about' spy={true}  smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='skills' spy={true}  smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='works' spy={true}  smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='contact' spy={true}  smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>

                
                
            </div>
        </nav>
    )
}

export default Nav;