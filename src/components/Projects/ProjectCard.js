import React, { useState } from 'react'
import styled from "styled-components";

function ProjectCard({project}) {
    const [ flip, setFlip ] = useState(false);
    const { title, description, image, role, type, stack } = project;
    console.log(project.image);
    return (
        <CardStyles>
            {/* <button className={`card `} > */}
            <button className="card">
                <div className="front">
                    <img src={image} alt={title} />
                    {/* <div><p>Hmm</p></div> */}
                    <div className="details">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <span>Hover for details</span>
                </div>
            </button>
        </CardStyles>
    )
}

export default ProjectCard


const CardStyles = styled.li`
    list-style : none;

    .card {
        display: grid;
        width: 18vw;
        height: 45rem;
        perspective: 150rem;
        -moz-perspective: 150rem;
        position: relative;
        margin: 1rem;
        /* background-color: transparent; */
        border: none;
        border-radius: var(--radius-sm);
        box-shadow: var(--shadow-1);
        /* border: solid red; */
        

        .front {
            display: grid;
            grid-template-rows: 20rem 1fr max-content;
            background-color: white;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                -webkit-clip-path: polygon(0 0, 0 90%, 100% 100%, 100% 0);
                clip-path: polygon(0 0, 0 90%, 100% 100%, 100% 0);
            }
        }

        .details {
            display: grid;
            text-align: start;
            align-content: start;
            row-gap: 1rem;
            padding: 3rem;
            margin: 2rem 0;

            h2 {
                font-size: var(--text-lg);
                font-weight: var(--weight-bold);
            }

            p {
                line-height: 1.4;
                font-size: var(--text-sm);
            }
        }

        span {
            padding: 1.4rem;
            text-align: end;
            font-size: var(--text-sm);
        }
    }

`
