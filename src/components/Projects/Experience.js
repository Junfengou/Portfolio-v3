import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { javascript } from '../../img/love';
import styled from 'styled-components';
import {
    BriefcaseIcon
  } from "@heroicons/react/24/outline";

import { workExperience } from "../../common/Experience"

function Experience() {
  return (
    <WrapperStyle>
        <h1>Professional Experience</h1>
        <VerticalTimeline>
            {
                workExperience.sort((a, b) => b.id - a.id).map(experience => (
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1b7fd1', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #1b7fd1' }}
                    date={experience.timeFrame}
                    iconStyle={{ background: '#FFC331', color: '#fff' }}
                    icon={<BriefcaseIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">
                            {experience.position}
                        </h3>
                        <h4 className="vertical-timeline-element-title">
                            {experience.company}
                        </h4>
                        <ul>
                            {
                                experience?.accomplishments?.map(item => (
                                    <li>{item}</li>
                                ))
                            }
                        </ul>
                        <SkillsWrapper>
                            {experience?.techStack?.map((skill, idx) => (
                                <p className='skills'>
                                    {
                                    idx === experience?.techStack.length -1
                                    ? skill
                                    : `${skill}, `
                                    }
                                </p>
                            ))}
                        </SkillsWrapper>
                        
                    </VerticalTimelineElement>
                ))
            }


        </VerticalTimeline>
    </WrapperStyle>
  )
}

export default Experience

const SkillsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

    p {
        margin-right: 1rem;
    }
    
`;

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