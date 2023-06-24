import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { javascript } from '../../img/love';
import styled from 'styled-components';

function Experience() {
  return (
    <WrapperStyle>
        <h1>Professional Experience</h1>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1b7fd1', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #1b7fd1' }}
                date="2020 - 2020"
                iconStyle={{ background: '#FFC331', color: '#fff' }}
                // icon={<javascript />}
            >
                <h3 className="vertical-timeline-element-title">Student Web Developer </h3>
                <h4 className="vertical-timeline-element-subtitle">University of Omaha Nebraska</h4>
                <ul>
                    <li>Initiated and developed a research project for University of Nebraska Medical Center</li>
                    <li>Utilized frontend tool like Vue and Nuxt</li>
                    <li>Collaborated with other students to create full stack application</li>
                </ul>
                <p>Vue, Nuxt, JavaScript, CSS</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1b7fd1', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #1b7fd1' }}
                date="2020 - 2022"
                iconStyle={{ background: '#FFC331', color: '#fff' }}
                // icon={javascript}
            >
                <h3 className="vertical-timeline-element-title">Fullstack Web/Mobile Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Event Vesta</h4>
                <ul>
                    <li>Fullstack developer utilized tools such as Ruby on Rails and React Native</li>
                    <li>Redesigned and implemented UI features for better user experience</li>
                    <li>Map navigation integration for easy access finding events</li>
                    <li>Implemented analytics to keep track of user actions and better understand what features user like the most</li>
                    <li>Firebase dynamic link and calendar integration</li>
                    <li>Search and filter content within the application</li>
                    <li>Integrate Google event schema and Sitemap for better SEO</li>
                </ul>
                <p>React Native, Ruby on Rails, GraphQL, PostgreSQL, TypeScript, Bootstrap</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1b7fd1', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #1b7fd1' }}
                date="2022 - 2023"
                iconStyle={{ background: '#FFC331', color: '#fff' }}
                // icon={javascript}
            >
                <h3 className="vertical-timeline-element-title">Fullstack Web Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Quantum Workplace</h4>
                <ul>
                    <li>Convert ASP.NET core code to utilize all the capabilities React has to offer</li>
                    <li>Implemented several key features to boost company sales and entice new customers
to sign on. ( Keyword Detection, Survey Setup Process Overhaul, Respondent Rate,
and more )</li>
                    <li>Cross squad collaboration to coordinate feature planning and implementation.</li>
                    <li>Engaged in code review and discussions with other developers to trade ideas.</li>
                </ul>
                <p>.NET, C#, React, TypeScript, SSMS, SQL</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </WrapperStyle>
  )
}

export default Experience

const WrapperStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: var(--color-primary);
    padding: 5rem;

    h1 {
        margin: 0 0 1.5rem 0;
        color: var(--color-orange);
        font-size: var(--text-xl);
    }

    h3 {
        margin: 0 0 0.5rem 0;
        color: var(--color-orange);
    }

    h4 {
        margin: 0 0 1rem 0.5rem;
    }

    li {
        margin: 0.5rem 0 1rem 1.5rem;
        
    }
    p {
        color: var(--color-orange);
    }
`