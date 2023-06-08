import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"

function Contact({msg, link, colorSwap}) {
    return (
        <ContactStyles colorSwap={colorSwap}>
            <div className="wrapper">
                {link != null ? <Link style={{ textDecoration: 'none' }} to={link}><h1>{msg}</h1></Link> : <h1>{msg}</h1>}
            </div>
        </ContactStyles>
    )
}

export default Contact

const ContactStyles = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 100%;

    &:after {
        content: "";
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        background-color: ${props => props.colorSwap === true ? '#ffffff' : '#318CFE'};
        z-index: -1;
    }

    &:before {
        content: "";
        grid-row: 2 / 3;
        grid-column: 1 / 2;
    }

    .wrapper {
        grid-row: 1 / 3;
        grid-column: 1 / 2;

        margin: 1rem 0;
        background-color: var(--color-grey);
        box-shadow: var(--shadow-1);

        display: grid;
        text-align: center;
        display: grid;
        row-gap: 0.4rem;
        padding: 3rem 0;
        justify-self: center;
        width: 70rem;
        color: white;
        border-radius: var(--radius-sm);

        @media only screen and (max-width: 900px) {
            width: 70vw;
            font-size: 0.9rem;
        }

        @media only screen and (max-width: 500px) {
            font-size: 0.8rem;
        }
    }
`