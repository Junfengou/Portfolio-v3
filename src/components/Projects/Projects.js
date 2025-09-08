import React from 'react'
import ProjectStyles from './ProjectStyles'
import {professionalExp, passionProjects} from "../../data/projects"
import ProjectCard from './ProjectCard'
import { useInView } from 'react-intersection-observer'

function Projects() {
    const [ ref, inView ] = useInView({ threshold: 0.2, triggerOnce: true })
    return (
        <ProjectStyles ref={ref}>
            <div className={`title ${inView ? "isVisible" : null}`}>
                <h1 className='highlighter'>Professional and Personal Projects</h1>
                <p>Check out my latest works</p>
            </div>
            <ul className="contents">
            {professionalExp.map((project, i) => (
                    <ProjectCard project={project} key={i} />
                ))}

            {passionProjects.map((project, i) => (
                    <ProjectCard project={project} key={i} />
                ))}
            </ul>
        </ProjectStyles>
    )
}

export default Projects
