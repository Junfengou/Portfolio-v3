import styled from "styled-components"

const ProjectCard = styled.div`
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
        display: grid;
        grid-template-rows: 6rem 1fr max-content;
        grid-template-columns: 1fr;
    }

    .front {
        /* grid-template-columns: 1fr;
        grid-template-rows: 6rem 1fr max-content;
        border: solid red;
        height: 100%; */
        align-items: center;
        background: var(--color-white);
        
    }

    .back {
        transform: rotateY(180deg);
        
        background: var(--color-primary);
        align-items: center;
    }
    

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

    .flip {
        .front {
            transform: rotateY(-180deg);
        }

        .back {
            transform: rotateY(0);
        }
    }

`
export default ProjectCard;
