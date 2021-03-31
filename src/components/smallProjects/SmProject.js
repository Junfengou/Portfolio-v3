import React from 'react'
import SmProjectCard from './SmProjectCard';
import SmProjectStyles from './SmProjectStyles'
import smproject from "../../data/smproject"

function SmProject() {

    return (
        <SmProjectStyles>
            <div className="title">
                <h1>Small projects</h1>
                <p>Other tiny projects I've worked on...</p></div>
            <div className="content">
                <div className="wrapper">
                    {
                        smproject.map((project , i) => (
                            <SmProjectCard project={project} key={i} />
                        ))
                    }
                </div>
            </div>
        </SmProjectStyles>
    )
}

export default SmProject

