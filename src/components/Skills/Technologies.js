import React from 'react'
import TechnologyStyles from './TechnologyStyles'
import TechTag from './TechTag'
import { skillsData } from '../../data/skills'
import { useInView } from "react-intersection-observer"



function Technologies() {
    const [ ref, inView ] = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <TechnologyStyles>
            {/* Might remove this section later */}
            
            {/* <div className={`title ${inView ? "titleIsVisible" : null}`}>
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
            </div> */}
        </TechnologyStyles>
    )
}

export default Technologies



