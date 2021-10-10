import React, { useState } from 'react'
import { RiFilePaper2Fill } from "react-icons/ri"
import { BsFillPersonFill } from "react-icons/bs"
import { AiFillProject } from "react-icons/ai"

import "../css/Navbar.css"

const Navbar = () => {
    const [solid, setSolid] = useState(false)
    // Control the showing of the navbar based on how far down you scroll.

    const changeBackround = () => { 
        // console.log(window.scrollY)
        if (window.scrollY >= 300) {
            setSolid(true)
        } else {
            setSolid(false)
        }
    };

    window.addEventListener('scroll', changeBackround);

    return (
        <nav className='navbar'>
            <div className={solid ? 'navContainer active' : 'navContainer'}>
                <div className="homeIcon">Tk.</div>
                <div className="button"><BsFillPersonFill className="icon" />About</div>
                 <div className="button"><AiFillProject className="icon" />Projects</div>
                <div className="button"><RiFilePaper2Fill className="icon" />Download Resume</div>
            </div>
        </nav>
        
    )
}

export default Navbar
