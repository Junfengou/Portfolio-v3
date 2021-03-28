import styled from "styled-components";

const PriorityStyles = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 100%;
    /* justify-items: center; */
    /* align-items: center; */
    /* height: 20rem; */


    &:after {
        content: "";
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        z-index: -1;
    }

    &:before {
        content: "";
        grid-row: 2 / 3;
        grid-column: 1 / 2;
        background-color: var(--color-orange);
        /* width: 100%;
        height: 100%; */
    }

    .wrapper {
        grid-row: 1 / 3;
        grid-column: 1 / 2;

        margin: 1rem 5rem;
        /* background-color: var(--color-secondary); */
        box-shadow: var(--shadow-1);
        border-radius: var(--radius-sm);

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-self: center;
        width: 50%;

        @media only screen and (max-width: 910px) {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 1fr);
            width: 55%;
        }

       
        
    }


     
`

export default PriorityStyles;


/*
   .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        grid-row: 1 / 3;
        grid-column: 1 / 2;
        height: 30rem;

        margin: 1rem 45rem;
        box-shadow: var(--shadow-1);
        border-radius: var(--radius-sm);
        border: solid blue;  
    }

*/