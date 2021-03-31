import React from 'react'
import styled from "styled-components";

function ActionBtn({item}) {
    return (
        <ButtonStyle>
            <a className="content" href={`${item.link}`} target="_blank" rel="noopener noreferrer">
                <h5>{item.text}</h5>
            </a>
            <a className="icon" href={`${item.link}`} target="_blank" rel="noopener noreferrer">
                <p>{item.icon}</p>
            </a>
        </ButtonStyle>
    )
}

export default ActionBtn

const ButtonStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    justify-items: center;
    width: 15rem;
    border-radius: var(--radius-xl);
    background-color: white;
    outline:none;
    overflow: hidden;
    box-shadow: var(--shadow-3);
    height: 40px;
    text-align: center;
    transition: all 0.3s;
    backface-visibility: hidden;
       
    .content {
        text-decoration: none;
    }

    h5 {
        font-size: var(--text-sm);
        margin-bottom: 0.2rem;        
     }

    .icon {
        width: 50px;
        height: 100%;
        padding: 2px 6px; 
        font-size: 2.5rem;
        color: white;
        background-color: black;

        p {
            margin-top: 0.2rem;
        }

        @media only screen and (max-width: 1000px) {
            width: 40px;
        }   
    }

    @media only screen and (max-width: 1000px) {
        width: 14rem;
        height: 35px; 
        h5 {
            font-size: var(--text-sm);
        }
    }
`
/*
.buttons {
        display: grid;
        grid-template-columns: 1fr max-content;
        align-items: center;
        justify-items: center;
        width: 15rem;
        border-radius: var(--radius-xl);
        background-color: white;
        overflow: hidden;
        box-shadow: var(--shadow-3);
        height: 40px;
        text-align: center;
        transition: all 0.3s;
        backface-visibility: hidden;
        border: solid red;
        // height: 3rem;
        width: 15rem;
        display: flex;
        justify-content: center;
        align-items: center; 
       
        a {
            text-decoration: none;
       }

       h5 {
            font-size: 1rem;
            margin-bottom: 0.2rem;
            
       }

        p {
            width: 50px;
            height: 100%;
            padding: 2px 6px; 
            font-size: 2.7rem;
            color: white;
            background-color: black;
        }
    }


*/