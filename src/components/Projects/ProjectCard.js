import React, { useState } from 'react'
import styled from "styled-components";
import { useInView } from "react-intersection-observer"
import ProjectCardStyles from './ProjectCardStyles';
import TechTag from '../Skills/TechTag';

function ProjectCard({project}) {
    const [ flip, setFlip ] = useState(false);
    const [ ref, inView ] = useInView({ threshold: 0.2, triggerOnce: true })
    const { title, description, image, role, type, stack } = project;
    // console.log(flip);
    return (
        <ProjectCardStyles>
            {/* <button className={`card ${inView ? "isVisible" : null} ${flip ? "flip" : null}`}
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            onClick={() => setFlip(!flip)} 
            ref={ref}> */}
            <button className={`card ${inView ? "isVisible" : null} ${flip ? "flip" : null}`}
            onClick={() => setFlip(!flip)} 
            ref={ref}>
                <div className="cardSide front">
                    <img src={image} alt={title} />
                    <div className="details">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <span>Hover for details</span>
                </div>

                <div className="cardSide back">
                    <div className="heading">
                        <h2>{role}</h2>
                        <h3>{type}</h3>
                    </div>

                    <div className="stacks">
                        <ul>
                            <h2>Stack I use</h2>
                            <TechTag skill={stack} />
                        </ul>
                    </div>
                    <div className="buttons">buttons</div>
                </div>
            </button>
        </ProjectCardStyles>
    )
}

export default ProjectCard


