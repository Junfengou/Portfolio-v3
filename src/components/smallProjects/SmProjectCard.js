import React, { useState } from 'react'
import TechTag from '../Skills/TechTag';
import ProjectCard from "./SmProjectCardStyles"
import {HiCursorClick} from "react-icons/hi"
import { useInView } from 'react-intersection-observer';

function SmProjectCard({project}) {
    const { title, icon, description, tech, stack, link } = project;
    const [ flip, setFlip ] = useState(false);
    const [ ref, inView ] = useInView({ threshold: 0.8, triggerOnce: true })

    return (
        <ProjectCard onClick={() => setFlip(!flip)} >
            <div className={`card ${flip ? "flip" : null} ${inView ? "animate" : null} `} ref={ref}  >
                <div className="cardSide front">
                    <h1>{title}</h1>
                    <h5>{description} <span><HiCursorClick /> (click me)</span></h5>
                    <a href={link} target="_blank" rel="noopener noreferrer">{icon}</a>
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
