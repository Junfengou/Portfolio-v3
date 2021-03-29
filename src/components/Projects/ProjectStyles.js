import styled from "styled-components"

const ProjectStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15rem 1fr;
    justify-items: center;
    align-items: center;
    /* justify-content: center;
    align-items: center; */

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;

        h1 {
            font-size: var(--text-xl);
            font-weight: var(--weight-bold);
        }

        p {
            font-size: var(--text-md);
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

    
`

export default ProjectStyles;