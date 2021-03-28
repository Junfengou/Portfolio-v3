import React, { useEffect, useState } from 'react'
import PriorityStyles from "./PriorityStyles"
import prioritiesData from "../../data/priority"
import styled from "styled-components";

const ContentStyles = styled.div`
    display: flex;
    flex-direction: column;
    height: 20rem;
    justify-content: space-evenly;
    align-items: center;
    padding: 4rem;
    text-align: center;
    height: 30rem;
    background: white;
    /* border-radius: var(--radius-lg); */
    /* box-shadow: var(--shadow-3); */
    border: 1px solid var(--color-grey);
    img {
        height: 8rem;
        object-fit: contain;
    }
    /* display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    height: 30rem;
    padding: 4rem 4rem 5rem;
    row-gap: 0.6rem;
    text-align: center;
    background-color: white;
    border: solid blue; */
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
