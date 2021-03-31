import styled from "styled-components";

const SmProjectStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15rem 1fr;
    justify-items: center;
    align-items: center;
    background: var(--color-primary);
    padding: 3rem 7rem 12rem 7rem;

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;
        padding: 0 6rem;
        text-align: center;
        margin: 5rem 0;
        color: var(--color-white);

        h1 {
            font-size: var(--text-xl);
            font-weight: var(--weight-bold);
        }

        p {
            font-size: var(--text-md);
        }
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        
    }

    .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(auto, 1fr);
        justify-items: center;
        align-items: center;
        width: 50vw;
        max-width: 120rem;
        gap: 2rem;

    }
`
export default SmProjectStyles;