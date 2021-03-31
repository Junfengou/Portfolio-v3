import React from 'react'
import ProjectStyles from './ProjectStyles'
import projectData from "../../data/projects"
import ProjectCard from './ProjectCard'
import { useInView } from 'react-intersection-observer'

function Projects() {
    const [ ref, inView ] = useInView({ threshold: 0.2, triggerOnce: true })
    return (
        <ProjectStyles ref={ref}>
            <div className={`title ${inView ? "isVisible" : null}`}>
                <h1>Projects</h1>
                <p>Applying my knowledge and skills over the years to create something fun and exciting</p>
            </div>
            <ul className="contents">
            {projectData.map((project, i) => (
                <ProjectCard project={project} key={i} />
            ))}
            </ul>
        </ProjectStyles>
    )
}

export default Projects
