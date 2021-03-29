import React from 'react'
import styled from "styled-components";


function TechTag({skill}) {
    
    console.log(skill);
    return(
        <SkillItemStyles>
            {
                skill.map((item, i) => (
                    <div className="box">
                        <div className="photo"><img src={item.logo} alt={item.title} /></div>
                        <p>{item.title}</p>
                    </div>
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

    .box {
        display: grid;
        grid-template-columns: 3rem 1fr;
        grid-template-rows: 1fr;
        justify-items: center;
        align-items: center;
        height: 3.3rem;
        width: 15rem;
        background: white;
        /* border-radius: var(--radius-md); */

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