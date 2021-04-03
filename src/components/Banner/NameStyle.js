import styled from "styled-components"

const NameStyle = styled.section`
    .name {
        stroke: black;
        width: 40vw;
        animation: fillAnim 0.5s ease forwards 3s;
    }

    .mask {
        border: solid red;
    }
    & path:nth-child(1) {
        stroke-dasharray: 437px; // J
        stroke-dashoffset: 437px;
        animation: strokeAnim 2s ease forwards;
    }

    & path:nth-child(2) {
        stroke-dasharray: 474px; // J
        stroke-dashoffset: 474px;
        animation: strokeAnim 2s ease forwards;
    }

    & path:nth-child(3) {
        stroke-dasharray: 573px; // U
        stroke-dashoffset: 573px;
        animation: strokeAnim 2s ease forwards 0.3s;
    }

    & path:nth-child(4) {
        stroke-dasharray: 580px; // N
        stroke-dashoffset: 580px;
        animation: strokeAnim 3s ease forwards 0.5s;
    }

    & path:nth-child(5) {
        stroke-dasharray: 498px; // F
        stroke-dashoffset: 498px;
        animation: strokeAnim 2.5s ease forwards 0.7s;
    }

    & path:nth-child(6) {
        stroke-dasharray: 573px; // E
        stroke-dashoffset: 573px;
        animation: strokeAnim 2.5s ease forwards 0.9s;
    }

    & path:nth-child(7) {
        stroke-dasharray: 580px; // N
        stroke-dashoffset: 580px;
        animation: strokeAnim 3s ease forwards 1.1s;
    }

    & path:nth-child(8) {
        stroke-dasharray: 520px; // G
        stroke-dashoffset: 520px;
        animation: strokeAnim 3s ease forwards 1.3s;
    }

    & path:nth-child(9) {
        stroke-dasharray: 437px; // O
        stroke-dashoffset: 437px;
        animation: strokeAnim 3s ease forwards 1.5s;
    }

    & path:nth-child(10) {
        stroke-dasharray: 573px; // U
        stroke-dashoffset: 573px;
        animation: strokeAnim 3s ease forwards 1.7s;
    }
    @keyframes strokeAnim {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes fillAnim {
            to {
                fill: black;
                width: 20vw;
            }
        }

    @media only screen and (max-width: 1000px) {
        @keyframes fillAnim {
            to {
            width: 30rem;
        }
    }
}

    @media only screen and (max-width: 700px) {
            @keyframes fillAnim {
                to {
                width: 25rem;
            }
        }
    }

    .drop {
        position: relative;
        height: 200px;
        width: 200px;
        background: #54ABFB;
        border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
        opacity: 0.8;
        border: 2px solid #3d93ff;
    }

    .drop::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background: #318CFE;
        border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
        box-shadow: -20px 30px 16px #1B6CFB, -40px 60px 32px #1b6cfb, inset -6px 6px 10px #1B6CFB, inset 2px 6px 10px #1a74e5, inset 20px -20px 22px white, inset 40px -40px 44px #a8ceff;
    }

    .drop::after {
        content: "";
        position: absolute;
        height: 40px;
        width: 40px;
        background: #E6FDFB;
        border-radius: 44% 56% 46% 54% / 36% 50% 50% 64%;
        left: 130px;
        top: 40px;
        box-shadow: 16px 40px 0 -10px white;
        opacity: 0.8;
    }

`

export default NameStyle