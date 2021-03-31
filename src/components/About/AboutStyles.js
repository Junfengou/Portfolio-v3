import styled from "styled-components"

const AboutStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    gap: 2rem;

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        width: 50vw;
        max-width: 60rem;
        text-align: center;
    }

    h1 {
        font-size: var(--text-xl);
        font-weight: var(--weight-bold);
    }

    h3 {
        font-size: var(--text-md);
    }

    @media only screen and (max-width: 1000px) {
        .wrapper {
            min-width: 40rem;
        }
    }

    @media only screen and (max-width: 500px) {
        .wrapper {
            min-width: 30rem;
        }
    }
`

export default AboutStyles;