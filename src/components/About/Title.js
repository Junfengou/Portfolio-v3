import React from 'react'
import styled from "styled-components"

const TitleStyles = styled.div`
    height: 8rem;
    color: white;
    background: var(--color-grey);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--text-lg);
    font-weight: var(--weight-bold);

    h1 {
        font-size: var(--text-lg);
        font-weight: var(--weight-bold);
    }

        
`

function Title() {
    return (
        <TitleStyles>
            <h1>About Me</h1>
        </TitleStyles>
    )
}

export default Title
