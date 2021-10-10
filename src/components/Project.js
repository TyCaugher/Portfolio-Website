import React from 'react'

/* For projects, I want a few key details:
    -- GIF of project in action
    -- Short description
    -- Technologies used (with icons)
    -- GitHub link
*/

// Later on I want to make the project details passed down with props.

const Project = () => {
    return (
        <div className="infoContainer">
            <div className="greeting">
                <h2>What I've Been Working On</h2>
                <br/>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    )
}

export default Project
