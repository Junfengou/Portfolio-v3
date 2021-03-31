import React from 'react'
import styled from "styled-components";
import ProjectCard from "./SmProjectCardStyles"

function SmProjectCard({project}) {
    const { title, icon, description, stack } = project;
    console.log(title);
    return (
        <ProjectCard>
            <h1>{title}</h1>
            <h5>{description}</h5>
            <p>{icon}</p>
        </ProjectCard>
    )
}

export default SmProjectCard

