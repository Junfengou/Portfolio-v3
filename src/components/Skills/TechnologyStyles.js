import styled from "styled-components"

const TechnologyStyles = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: var(--color-primary);
    padding: 2rem;

    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
        width: 50vw;
        max-width: 60rem;
        color: white;

        h1 {
            font-size: var(--text-xl);
            font-weight: var(--weight-bold);
        }

        p {
            font-size: var(--text-md);
            text-align: center;
        }
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

        h1 {
            color: white;
            opacity: 0;
            transform: translateY(6px);
        }
        /* border: solid purple; */
    }

    .isVisible {
        h1 {
            animation: fadeUp 0.6s forwards;
        }
    }

    @media only screen and (max-width: 1000px) {
        .title {
            min-width: 40rem;
        }
    }


    @keyframes fadeUp {
        0% {
            opacity: 0;
            transform: translateY(6px);
        }
        40% {
            opacity: 0.6;
            transform: translateY(-4px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media only screen and (max-width: 500px) {
        .title {
            min-width: 30rem;
        }
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
    background: var(--color-primary);
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