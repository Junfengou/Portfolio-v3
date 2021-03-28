import styled from "styled-components"

const NameStyle = styled.section`
    .name {
        stroke: black;
        width: 50vw;
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
                width: 30vw;
            }
        }

    @media only screen and (max-width: 1000px) {
        @keyframes fillAnim {
            to {
            width: 25rem;
        }
    }
}

    @media only screen and (max-width: 700px) {
            @keyframes fillAnim {
                to {
                width: 20rem;
            }
        }
    }

    

`

export default NameStyle