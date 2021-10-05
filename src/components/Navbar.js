import React, { useEffect, useState } from 'react'
import { RiFilePaper2Fill } from "react-icons/ri"
import { BsFillPersonFill } from "react-icons/bs"
import { AiFillProject } from "react-icons/ai"

import "../css/Navbar.css"

const Navbar = () => {
    const [solid, setSolid] = useState(true)
    // Control the showing of the navbar based on how far down you scroll.
    

    return (
        <div class={`navContainer`}>
            <div class="homeIcon">Tk.</div>
            <div class="button"><BsFillPersonFill />About</div>
            <div class="button"><AiFillProject />Projects</div>
            <div class="button"><RiFilePaper2Fill />Download Resume</div>
        </div>
    )
}

export default Navbar
