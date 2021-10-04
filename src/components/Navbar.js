import React from 'react'
import { RiHome2Fill, RiFilePaper2Fill } from "react-icons/ri"
import { BsFillPersonFill } from "react-icons/bs"
import { AiFillProject } from "react-icons/ai"

const Navbar = () => {
    return (
        <div class="navContainer">
            <div class="homeIcon">Tk.</div>
            <div class="button"><RiHome2Fill />Home</div>
            <div class="button"><BsFillPersonFill />About</div>
            <div class="button"><AiFillProject />Projects</div>
            <div class="button"><RiFilePaper2Fill />Download Resume</div>
        </div>
    )
}

export default Navbar
