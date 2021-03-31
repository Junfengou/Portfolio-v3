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

    .isVisible {
        animation: fadeUp 1s forwards;
    }

    h1 {
        font-size: var(--text-xl);
        font-weight: var(--weight-bold);
        opacity: 0;
    }

    h3 {
        font-size: var(--text-md);
        opacity: 0;
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
`

export default AboutStyles;