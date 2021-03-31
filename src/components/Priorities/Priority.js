import React, { useEffect, useState } from 'react'
import PriorityStyles from "./PriorityStyles"
import prioritiesData from "../../data/priority"
import styled from "styled-components";

const ContentStyles = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 20rem; */
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
`

const Priority = ({item}) => {
    const { title, content } = item;
    return(
        <ContentStyles>
            <img src={item.icon} alt={item.altText} />
            <h1>{title}</h1>
            <p>{content}</p>
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
