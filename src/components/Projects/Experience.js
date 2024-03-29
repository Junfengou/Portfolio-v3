import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { javascript } from '../../img/love';
import styled from 'styled-components';
import {
    BriefcaseIcon
  } from "@heroicons/react/24/outline";

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
                icon={<BriefcaseIcon />}
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
                icon={<BriefcaseIcon/>}
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
                <p>React Native, Ruby on Rails, MVC, GraphQL, PostgreSQL, TypeScript, Bootstrap, Jira</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1b7fd1', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #1b7fd1' }}
                date="2022 - 2023"
                iconStyle={{ background: '#FFC331', color: '#fff' }}
                icon={<BriefcaseIcon/>}
            >
                <h3 className="vertical-timeline-element-title">Fullstack Web Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Quantum Workplace</h4>
                <p>Fullstack application developer utilize technologies such as .NET and React to deliver great products.</p>
                <ul>
                    <li>Convert ASP.NET core code to utilize all the capabilities React has to offer</li>
                    <li>Cross squad collaboration to coordinate feature planning and implementation.</li>
                    <li>Engaged in code review and discussions with other developers to trade ideas.</li>
                    <li>Implemented and developed Keyword Detection feature to help survey admins to detect naughty languages</li>
                    <li>Delivered new survey creation experience for survey admins to construct new surveys to fit their needs</li>
                    <li>Communicate with customer facing team to resolve production bugs</li>
                    <li>Develop features in various different patterns such as Repository Pattern, Mediator Pattern and Entity Framework.</li>
                    <li>Developed strong SQL skills and Server Side knowledge through building various products</li>
                    <li>Follow the MVC pattern to develop key features</li>
                    <li>Engaged in code review and resolve Pull Request comments</li>
                    <li>Code refactor to improve feature performance and separation of business logics</li>
                    <li>Task tracking and documentation using Asana</li>
                    <li>Involve in sprint ceremonies (Task scrum, estimate, and planning)</li>
                    <li>Error tracking using New Relics</li>
                    <li>Solid understanding of Git Resource Control</li>
                    <li>Effective communication between product management, developers, and quality assurance</li>
                    <li>Assisted QA for product testing</li>
                    <li>Participated in code deployment and production release</li>
                    <li>Participated in weekly developer show and share to learn from other developers</li>
                </ul>
                <p className='skills'>.NET, C#, React, TypeScript, MVC, JQuery, Octopus Deploy, Entity Framework,
                    Microsoft SQL Server Management Studio, SQL Server, Redis Desktop Manager, 
                    Azure DevOps, NewRelics, Asana</p>
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
        font-size: var(--text-sm);
    }

    h4 {
        margin: 0 0 1rem 0.5rem;
        font-size: var(--text-xs);
    }

    li {
        margin: 0.5rem 0 1rem 1.5rem;
        font-size: var(--text-xs);
        
    }
    p {
        color: var(--color-orange);
        font-size: var(--text-xs);
    }
`