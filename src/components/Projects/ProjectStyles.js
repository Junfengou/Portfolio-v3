import styled from "styled-components"

const ProjectStyles = styled.div`
    height: 90vh;
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
    }

    .contents {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        max-width: 120rem;
        gap: 1rem;
    }

    
`

export default ProjectStyles;