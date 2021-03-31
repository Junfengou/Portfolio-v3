import React, { useState } from 'react'
import TechTag from '../Skills/TechTag';
import ProjectCard from "./SmProjectCardStyles"

function SmProjectCard({project}) {
    const { title, icon, description, tech, stack } = project;
    const [ flip, setFlip ] = useState(false);

    return (
        <ProjectCard onClick={() => setFlip(!flip)}>
            <div className={`${flip ? "flip" : null}`}>
                <div className="cardSide front">
                    <h1>{title}</h1>
                    <h5>{description}</h5>
                    <p>{icon}</p>
                </div>

                <div className="cardSide back">
                    <h1>{tech}</h1>
                    <ul>
                        <TechTag skill={stack}/>
                    </ul>
                </div>
            </div>
        </ProjectCard>
    )
}

export default SmProjectCard