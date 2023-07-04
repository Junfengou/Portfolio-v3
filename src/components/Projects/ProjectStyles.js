import styled from "styled-components"

const ProjectStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15rem 1fr;
    justify-items: center;
    align-items: center;
    margin: 2rem 0;
    /* justify-content: center;
    align-items: center; */

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;
        opacity: 0;
        padding: 0 6rem;
        text-align: center;
        margin: 5rem 0;

        h1 {
            font-size: var(--text-xl);
            font-weight: var(--weight-bold);
        }

        p {
            font-size: var(--text-md);
        }
        .highlighter {
            color: var(--color-purple)
        }
    }

    .contents {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        justify-content: center;
        width: 100%;
        max-width: 120rem;
    }

    .isVisible {
        animation: fadeIn 1s forwards;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateX(-50px);
        }
        40% {
            opacity: 0.6;
            transform: translateX(10px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
}

    
`

export default ProjectStyles;