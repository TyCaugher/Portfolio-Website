import React from 'react'

/* 
    For this component, I want to include a picture of myself as well as a short, sweet description of what I do.
    Contact info below.
    Download resume
*/

const About = () => {
    return (
        <>
            <div class="infoContainer">
                <div class="greeting">
                    <h2>A Bit About Me</h2>
                    <br/>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div>
                    Cool image here
                </div>
            </div>
        </>
    )
}

export default About
