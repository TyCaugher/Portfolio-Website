import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';

const Header = () => {
    const [name] = useState("TYLER KAUFFMAN");

    return (
        <div className="infoContainer">
            <div className="greeting">
                <h2>Hello Worlds! 👋 <br/>I'm <span className="emph">{name}</span></h2>
                Inspired <Typewriter className="box-field"
                    options={{loop:true,}}
                    onInit={(typewriter) => {
                        typewriter.typeString('<span class="emph"><b>Developer.</b></span>')
                        .pauseFor(2000)
                        .deleteChars(10)
                        typewriter.typeString('<span class="emph"><b>Illustrator.</b></span>')
                        .pauseFor(1000)
                        .deleteChars(12)
                        typewriter.typeString('<span class="emph"><b>3D Artist</b></span>')
                        .pauseFor(1000)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                    }}
                />
            </div>
            <div className="greeting">
                Cool image over here.
            </div>
        </div>
    )
}

export default Header
