import React from 'react'
import TechnologyStyles from './TechnologyStyles'
import TechTag from './TechTag'
import { skillsData } from '../../data/skills'
import { useInView } from "react-intersection-observer"



function Technologies() {
    const [ ref, inView ] = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <TechnologyStyles>
            <div className={`title ${inView ? "titleIsVisible" : null}`}>
                <h1>Skills</h1>
                <p>A list of languages and frameworks I have worked with over the past years</p>
            </div>
            <div className={`techs ${inView ? "isVisible" : null}`} ref={ref}>
            {skillsData.map((skill, i) => {
                const {items} = skill
            return (
                <ul key={i}>
                    <h1 style={{fontSize: "2.1rem"}}>{skill.phrase}</h1>
                    <TechTag skill={items} />
                </ul>
                )})}
            </div>
        </TechnologyStyles>
    )
}

export default Technologies



/*
previous version 

import React from 'react'
import { skillsData } from '../../data/skills'
import {csharp, dotnet, sql, tailwind, typescript} from "../../img/learning"
import TechnologyStyles from './TechnologyStyles'
import styled from "styled-components"

const SkillItemStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    gap: 2rem;
    border: solid red;
    .box {
        border-radius: var(--radius-md);
        display: grid;
        grid-template-columns: 2rem 1fr;
        grid-template-rows: 1fr;
        justify-items: center;
        align-items: center;
        background: white;
        height: 4rem;
        width: 13rem;
        
    }
    .logo {
        margin-left: 2rem;
        img {
            height: 2rem;
        }
    }
`

const SkillItem = ({skill}) => {
    const { items } = skill;
    console.log(items);
    return(
        <SkillItemStyles>{items.map((item, i) => (
            <div className="box">
                <div className="logo">
                    <img src={item.logo} alt="hmm" />
                </div>
                <div>
                    <p>{item.title}</p>
                </div>
            </div>
        ))}</SkillItemStyles>
    )
}


function Technologies() {
    return (
        <TechnologyStyles>
            <div className="title">
                <h2>Skills</h2>
                <p>A list of languages and frameworks I have worked with over the past years</p>
            </div>
            <div className="techs">
            {skillsData.map((skill, i) => (
                <ul>
                    <h1>{skill.phrase}</h1>
                    <SkillItem skill={skill} key={i} />
                </ul>
                ))}
            </div>
        </TechnologyStyles>
    )
}

export default Technologies


/*
{skillsData.map((skill, i) => (
                <SkillItem skill={skill} key={i} />
                ))}
*/
