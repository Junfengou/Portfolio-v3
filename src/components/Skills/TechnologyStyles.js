import styled from "styled-components"

const TechnologyStyles = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: var(--color-orange);
    padding: 2rem;

    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
    }
    .techs {
        width: 70%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        justify-items: center;
    }
    ul {
        width: 70%;
        display: grid;
        grid-template-rows: 5rem 1fr;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
        margin-top: 2rem;
        /* border: solid purple; */
    }


    
`

export default TechnologyStyles;


/*
previous version

import styled from "styled-components"

const TechnologyStyles = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: var(--color-orange);
    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
    }
    .techs {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        justify-items: center;
    }
    ul {
        width: 70%;
        display: grid;
        grid-template-rows: 5rem 1fr;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
        margin-top: 2rem;
    }
    
`

export default TechnologyStyles;


*/