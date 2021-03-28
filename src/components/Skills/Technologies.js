import React from 'react'
import { skillsData } from '../../data/skills'
import {csharp, dotnet, sql, tailwind, typescript} from "../../img/learning"
import TechnologyStyles from './TechnologyStyles'
import styled from "styled-components"

const SkillItemStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction:column;
    width: 100%;
    padding: 1rem;
    gap: 2rem;
    /* border: solid red; */


    .wrapper {
        /* display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr); */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        
    }

    .box {
        display: grid;
        grid-template-columns: 3rem 1fr;
        grid-template-rows: 1fr;
        justify-items: center;
        align-items: center;
        height: 3rem;
        width: 15rem;
        background: white;
        border-radius: var(--radius-sm);

        img {
            height: 2rem;
        }
    }

    .photo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background: var(--color-grey-light);
    }

    
`

const SkillItem = ({skill}) => {
    const { phrase, items } = skill;
    console.log(phrase, items);
    return(
        <SkillItemStyles>
            <div className="wrapper">
                {
                    items.slice(0, 3).map(item => (
                        <div className="box">
                            <div className="photo"><img src={item.logo} alt={item.title} /></div>
                            <p>{item.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className="wrapper">
                {
                    items.slice(3, 9).map(item => (
                        <div className="box">
                            <div className="photo"><img src={item.logo} alt={item.title} /></div>
                            <p>{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </SkillItemStyles>
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