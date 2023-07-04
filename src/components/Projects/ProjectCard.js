import React, { useState } from 'react'
import styled from "styled-components";
import { useInView } from "react-intersection-observer"
import ProjectCardStyles from './ProjectCardStyles';
import TechTag from '../Skills/TechTag';
import ActionBtn from './ActionBtn';

function ProjectCard({project}) {
    const [ flip, setFlip ] = useState(false);
    const [ ref, inView ] = useInView({ threshold: 0.8, triggerOnce: true })
    const { title, description, image, progress, type, stack, buttons, position } = project;
    return (
        <ProjectCardStyles>
            
            <button className={`card ${inView ? "isVisible" : null} ${flip ? "flip" : null}`}
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            onClick={() => setFlip(!flip)} 
            ref={ref}>
                <div className="cardSide front">
                    <img src={image} alt={title} />
                    <div className="details">
                        <h2>{title}</h2>
                        <p className='highlighter'>{position}</p>
                        <p>{description}</p>
                        <p className='highlighter'>{type}</p>
                    </div>
                    <span className='highlighter'>Hover for more details</span>
                </div>

                <div className="cardSide back">
                    <div className="heading">
                        <h2 style={{color: "#fff", fontSize: "2.6rem"}}>{type}</h2>
                        <h3>{progress}</h3>
                    </div>

                    <div className="stack">
                        <ul>
                            <h2 style={{color: "#fff"}}>Technologies</h2>
                            <TechTag skill={stack} />
                        </ul>
                    </div>
                    <div className="buttons">
                        {
                            buttons.map((item, i) => (
                                <ActionBtn item={item} key={i} onFocus={() => setFlip(true)} />
                            ))
                        }
                    </div>
                </div>
            </button>
        </ProjectCardStyles>
    )
}

export default ProjectCard
