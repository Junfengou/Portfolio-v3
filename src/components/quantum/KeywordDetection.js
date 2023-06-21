import React from 'react'
import styled from "styled-components"
import {keyworddetection} from "../../img/projects"

function KeywordDetection() {
  return (
    <BlueSectionInfoStyles>
        <div className={`title`}>
            <h1>Some of the projects I've worked on at Quantum Workplace</h1>
            <h2>Keyword Detection (React + ASP.NET)</h2>
            <ImgStyles>
              <img src={keyworddetection} alt="kd" />
            </ImgStyles>
            <div className="orderedList">
              <ol>
                  <li>CRUD functionality for user to manage keywords</li>
                  <li>Excel file import for easy access</li>
                  <li>Table sort by ascending and descending order</li>
                  <li>Button toggle for whether the comment is useful or not</li>
                  <li>Pagination to switch between pages</li>
              </ol>
            </div>
        </div>
    </BlueSectionInfoStyles>
  )
}

export default KeywordDetection

const ImgStyles = styled.section`
  height: 40rem; /* Set the desired height */
  width: 150%; /* Let the width adjust based on the aspect ratio */
  object-fit: cover; /* Maintain the aspect ratio and fill the container */
  border: solid 1px black;
  /* border-radius: 2rem; */
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 0;

  img {
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
        min-height: 100%;
        min-width: 100%;
    }
`

const BlueSectionInfoStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: var(--color-primary);
    padding: 5rem;

    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
        width: 50vw;
        max-width: 60rem;
        
        

        h1 {
            font-size: var(--text-xl);
            color: white;
            font-weight: var(--weight-bold);
        }

        h2 {
            font-size: var(--text-md);
            text-align: center;
        }
    }


    .orderedList {
      width: 70%;

      li {
          font-size: var(--text-md);
          text-align: left;
          padding: 0.5rem 0;
          color: white;
        }
    }
`