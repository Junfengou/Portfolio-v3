import React from 'react'
import SmProjectCard from './SmProjectCard';
import SmProjectStyles from './SmProjectStyles'
import smproject from "../../data/smproject"
import { useInView } from 'react-intersection-observer';

function SmProject() {
    const [ ref, inView ] = useInView({ threshold: 0.2, triggerOnce: true })
    return (
        <SmProjectStyles>
            <div className={`title ${inView ? "isVisible" : null}`} ref={ref} >
                <h1>Small projects</h1>
                <p>Other tiny projects I've worked on...</p></div>

                <div className="wrapper">
                    {
                        smproject.map((project , i) => (
                            <SmProjectCard project={project} key={i} />
                        ))
                    }
                </div>

        </SmProjectStyles>
    )
}

export default SmProject

