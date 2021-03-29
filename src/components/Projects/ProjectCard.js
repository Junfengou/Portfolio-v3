import React, { useState } from 'react'
import styled from "styled-components";
import { useInView } from "react-intersection-observer"

function ProjectCard({project}) {
    const [ flip, setFlip ] = useState(false);
    const [ ref, inView ] = useInView({ threshold: 0.2, triggerOnce: true })
    const { title, description, image, role, type, stack } = project;
    // console.log(flip);
    console.log({flip})
    return (
        <CardStyles>
            {/* <button className={`card ${inView ? "isVisible" : null} ${flip ? "flip" : null}`}
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
            onClick={() => setFlip(!flip)} 
            ref={ref}> */}
            <button className={`card ${inView ? "isVisible" : null} ${flip ? "flip" : null}`}
            onClick={() => setFlip(!flip)} 
            ref={ref}>
                <div className="cardSide front">
                    <img src={image} alt={title} />
                    <div className="details">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <span>Hover for details</span>
                </div>

                <div className="cardSide back">
                    <span>{role}</span>
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
        height: 44.5rem;
        perspective: 150rem;
        -moz-perspective: 150rem;
        position: relative;
        margin: 2rem;
        background-color: transparent;
        outline: none;
        border: none;
        /* border-radius: var(--radius-sm);
        box-shadow: var(--shadow-1); */

        .cardSide {
            transition: all 1s ease;
            height: 44.5rem;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            overflow: hidden;
            box-shadow: var(--shadow-1);
            border-radius: var(--radius-sm);
        }

        
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

        .back {
            display: grid;
            transform: rotateY(180deg);
            grid-template-rows: 20rem 1fr max-content;
            justify-items: center;
            background-color: var(--color-orange);
            padding: 2rem;
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

    .isVisible {
        animation: fadeUp 1s ease-in forwards;
    }

    .flip {
        .front {
            transform: rotateY(-180deg);
        }

        .back {
            transform: rotateY(0);
        }
    }

    @keyframes fadeUp {
        0% {
            opacity: 0;
            transform: translateY(3rem);
        }
        40% {
            opacity: 0.6;
            transform: translateY(-1rem);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

`
