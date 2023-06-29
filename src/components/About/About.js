import React from 'react'
import { useInView } from 'react-intersection-observer'
import AboutStyles from './AboutStyles'

function About() {
    const [ ref, inView ] = useInView({ threshold: 0.5, triggerOnce: true })
    return (
        <AboutStyles>
            <div className="wrapper" ref={ref}>
                <h1 className={`${inView ? "isVisible" : null}`}>Hi! My name is Jun.</h1>
                <h3 className={`${inView ? "isVisible" : null}`}>
                I'm a web developer who enjoys creating things that live on the internet. 
                Over the past few years, I have learned and worked on a variety of different web technologies. 
                I enjoy creating UI components, but also believe you can't have a good application without strong backend business logic!
                </h3>
            </div>
        </AboutStyles>
    )
}

export default About
