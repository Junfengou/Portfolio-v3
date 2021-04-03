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
        flex-wrap: wrap;
        width: 100%;
        
        border: solid red;
        
    }

    .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
        justify-items: center;
        align-items: center;
        width: 65vw;
        max-width: 80rem;
        gap: 2rem;
        /* border: solid red; */

        @media only screen and (max-width: 1350px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media only screen and (max-width: 900px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .isVisible {
        animation: fadeIn 1.5s forwards;
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
export default SmProjectStyles;