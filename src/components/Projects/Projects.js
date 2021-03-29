import React from 'react'
import ProjectStyles from './ProjectStyles'
import projectData from "../../data/projects"
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <ProjectStyles>
            <div className="title">
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
