import React from 'react'
import styled from "styled-components";
import { useInView } from "react-intersection-observer"

function TechTag({skill}) {
    const [ ref, inView ] = useInView({ threshold: 0.8, triggerOnce: true })
    return(
        <SkillItemStyles ref={ref} >
            {
                 skill.map((item, i) => (
                    <li className={`box ${inView ? "isVisible" : null}`} key={i}>
                        <div className="photo"><img src={item.logo} alt={item.title} /></div>
                        <p>{item.title}</p>
                    </li>
                ))
            }
        </SkillItemStyles>
    )
}

export default TechTag

const SkillItemStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem;
    gap: 1rem;
    border: 'solid 2px red';

    .box {
        display: grid;
        grid-template-columns: 3rem 1fr;
        grid-template-rows: 1fr;
        justify-items: center;
        align-items: center;
        height: 3.3rem;
        width: 15rem;
        background: white;
        opacity: 0;
        border-radius: var(--radius-xs);

        img {
            height: 2rem;
        }

        p {
            font-size: var(--text-xs);
            

        }
    }

    .isVisible {
        animation: fadeIn 1s forwards;
        
    }

    .photo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background: var(--color-grey-light);
    }

    


    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateX(-50px);
        }
        40% {
            opacity: 0.6;
            transform: translateX(10px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    

    
`