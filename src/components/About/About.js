import React from 'react'
import { useInView } from 'react-intersection-observer'
import AboutStyles from './AboutStyles'

function About() {
    const [ ref, inView ] = useInView({ threshold: 0.5, triggerOnce: true })
    return (
        <AboutStyles>
            <div className="wrapper" ref={ref}>
                <h1 className={`${inView ? "isVisible" : null}`}>Hi! My name is Jun.</h1>
                <h3 className={`${inView ? "isVisible" : null}`}>I'm an web developer from Omaha, Nebraska who enjoy to create things that live on the internet.
                    My passion in web development sparked in 2019 when I decided to make a career change, and I felt in love with the craft.
                    The power of combining art and code to create something truly unique was something I have never thought possible.
                    From that moment on, I have decided to embark on this journey of web discovery.
                </h3>
            </div>
        </AboutStyles>
    )
}

export default About
