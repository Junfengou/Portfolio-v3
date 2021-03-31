import React, { useEffect, useState } from 'react'
import PriorityStyles from "./PriorityStyles"
import prioritiesData from "../../data/priority"
import styled from "styled-components";
import { useInView } from 'react-intersection-observer';

const ContentStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content 1fr;
    gap: 2rem;
    justify-items: center;
    align-items: center;
    padding: 4rem;
    text-align: center;
    height: 30rem;
    background: white;
    border: 1px solid var(--color-grey);
    /* border: solid red; */
    & > * {
        opacity: 0;
    }

    .isVisible {
        animation: fadeIn 1s ease-in forwards;
    } 

    img {
        height: 8rem;
        object-fit: contain;
    }

    h1 {
        font-size: var(--text-lg);
        font-weight: var(--weight-bold);
    }

    p {
        font-size: var(--text-sm);
    }

     @keyframes fadeIn {
        to {
            opacity: 1;
        }
    } 
`

const Priority = ({item}) => {
    const { title, content } = item;
    const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true})
    return(
        <ContentStyles ref={ref}>
            <img src={item.icon} alt={item.altText} className={`${inView ? "isVisible" : null}`} />
            <h1 className={`${inView ? "isVisible" : null}`}>{title}</h1>
            <p className={`${inView ? "isVisible" : null}`}>{content}</p>
        </ContentStyles>
    )
}

// ------------------------------------------------------------------------> 

function Priorities() {
    return (
        <PriorityStyles >
            <div className="wrapper">
                {
                    prioritiesData.map((item, i) => (
                        <Priority item={item} key={i} />
                    ))
                }
            </div>
        </PriorityStyles>
    )
}

export default Priorities
