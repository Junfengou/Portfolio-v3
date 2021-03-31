import styled from "styled-components"

const ProjectCard = styled.button`
    height: 22rem;
    width: 25rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6rem 1fr max-content;
    /* justify-items: center; */
    align-items: center;
    border: none;
    background: var(--color-white);
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-1);

    h1 {
        text-align: start;
        margin: 0 2rem;
        font-size: var(--text-lg);
        font-weight: var(--weight-bold);
    }

    h5 {
        text-align: start;
        margin: 0 2rem;
        line-height: 1.2;
        font-size: var(--text-xs);
        font-weight: var(--weight-thin);
    }

    p {
        text-align: end;
        margin: 0 2rem;
        margin-bottom: 1rem;
        font-size: var(--text-xl);
    }
    

`
export default ProjectCard;