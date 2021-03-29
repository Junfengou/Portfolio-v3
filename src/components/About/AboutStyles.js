import styled from "styled-components"

const AboutStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15rem;
    gap: 2rem;

    h1 {
        font-size: var(--text-xl);
        font-weight: var(--weight-bold);
    }

    p {
        font-size: var(--text-md);
    }
`

export default AboutStyles;