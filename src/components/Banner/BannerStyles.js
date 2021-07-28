import styled from "styled-components"

const BannerStyles = styled.section`
    height: 98vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: var(--color-primary);
   

    .socials {
        width: 100%;
        display: flex;
        /* justify-content: flex-end; */
    }

    .socials {
        li {
            opacity: 0;
            &:nth-child(3) {
            transform: translateX(-8.4rem);
            animation: firstSocialIn 2s forwards;
            }
            &:nth-child(2) {
                transform: translateX(-4.2rem);
                animation: secondSocialIn 2s forwards;
            } 
            &:nth-child(1) {
                animation: thirdSocialIn 2s forwards;
            }
        }
    }
    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h5 {
            border: solid red;
        }
    }

    .line {
        margin-top: var(--space-sm);
        height: 5px;
        width: 75%;
        background-color: black;
    }

    .title {
        margin-top: var(--space-sm);
        animation: fadeUp 1s ease forwards 3.5s;
        font-size: 1.8vw;

        @media only screen and (max-width: 1000px) {
            font-size: 1.5rem;
        }

        @media only screen and (max-width: 700px) {
            font-size: 1.3rem;
        }
    }

    .line,
    .title {
        opacity: 0;
        transform: translateY(6px);
        animation: fadeUp 0.7s ease forwards 3.3s;
    }

    .quotes {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 5rem;

        opacity: 0;
        transform: translateY(6px);
        animation: fadeUp 0.7s ease forwards 4s;
        text-align: center;
        /* border: solid red; */

        h1 {
            font-size: var(--text-md);
            color: var(--color-white);
        }

        p {
            font-size: var(--text-md);
            color: var(--color-white);
        }

        @media only screen and (max-width: 1000px) {
            font-size: 1rem;
            /* margin: 0 3rem 3rem 3rem; */
            padding: 1rem 6rem;
        }

        @media only screen and (max-width: 700px) {
            font-size: 0.7rem;
            margin: 0 3rem 3rem 3rem;
        }
    }

    
    @keyframes fadeUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes firstSocialIn  {
        0% {
            transform: translateX(-8.4rem);
            opacity: 0;
        }
        20% {
            transform: translateX(-8.4rem);
            opacity: 1;
        }
        40% {
            transform: translateX(-4.2rem);
            opacity: 1;
        }
        60% {
            transform: translateX(-4.2rem);
            opacity: 1;
        }
        80% {
            transform: translateX(0rem);
            opacity: 1;
        }
        100% {
            transform: translateX(0rem);
            opacity: 1;
        }
    }

    @keyframes secondSocialIn {
        0% {
            transform: translateX(-8.4rem);
            opacity: 0;
        }
        20% {
            transform: translateX(-8.4rem);
            opacity: 0;
        }
        40% {
            transform: translateX(-4.2rem);
            opacity: 1;
        }
        60% {
            transform: translateX(-4.2rem);
            opacity: 1;
        }
        80% {
            transform: translateX(0rem);
            opacity: 1;
        }
        100% {
            transform: translateX(0rem);
            opacity: 1;
        }
    }

    @keyframes thirdSocialIn {
        0% {
            transform: translateX(-4.2rem);
            opacity: 0;
        }
        40% {
            transform: translateX(-4.2rem);
            opacity: 0;
        }
        60% {
            transform: translateX(-2.1rem);
            opacity: 0;
        }
        80% {
            transform: translateX(0rem);
            opacity: 1;
        }
        100% {
            transform: translateX(0rem);
            opacity: 1;
        }
    }

    @keyframes fourthSocialIn {
        0% {
            opacity: 0;
        }
        80% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

`

export default BannerStyles
