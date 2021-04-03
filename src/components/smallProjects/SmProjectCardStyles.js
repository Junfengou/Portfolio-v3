import styled from "styled-components"

const ProjectCard = styled.div`
    
    .card{
        /* border: solid red; */
        opacity: 0;
        display: grid;
        height: 22rem;
        width: 25rem;
        perspective: 150rem;
        -moz-perspective: 150rem;
        position: relative;
        background-color: transparent;
        outline: none;
        border: none;
        border-radius: var(--radius-sm);
        box-shadow: var(--shadow-1);
    }
    
    
    .cardSide {
        transition: all 1s ease;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        overflow: hidden;
        
    }

    .front {
        /* grid-template-columns: 1fr;
        grid-template-rows: 6rem 1fr max-content;
        border: solid red;
        height: 100%; */
        align-items: center;
        background: var(--color-white);
        cursor: pointer;
        display: grid;
        grid-template-rows: 6rem 1fr max-content;
        
    }

    .back {
        transform: rotateY(180deg);
        cursor: pointer;
        background: var(--color-white);
        align-items: center;
        display: grid;
        grid-template-rows: 6rem 1fr max-content;
    }
    

    h1 {
        text-align: start;
        margin: 0 2rem;
        font-size: var(--text-lg);
        font-weight: var(--weight-bold);
        display: flex;
    }


    h5 {
        text-align: start;
        margin: 0 2rem;
        line-height: 1.2;
        font-size: var(--text-xs);
        font-weight: var(--weight-thin);
        line-height: 1.5;
    }

    a {
        text-align: end;
        margin: 0 2rem;
        margin-bottom: 1rem;
        font-size: var(--text-xl);
    }

    span {
        color: var(--color-red);
    }

    .flip {
        .front {
            transform: rotateY(-180deg);
        }

        .back {
            transform: rotateY(0);
        }
    }

    .animate {
        animation: fadeUp 1s ease-in forwards;
    }

    @keyframes fadeUp {
        0% {
            opacity: 0;
            transform: translateY(3rem);
        }
        40% {
            opacity: 0.6;
            transform: translateY(-1rem);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }


`
export default ProjectCard;
