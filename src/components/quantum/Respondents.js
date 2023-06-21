import React from 'react'
import styled from "styled-components"
import {survey_users} from "../../img/projects"


function Respondents() {
  return (
    <WhiteSectionInfoStyles>
        <div className="title">
            <h1>Users Management Page (React - Class Component)</h1>
            <ImgStyles>
              <img src={survey_users} alt="users" />
            </ImgStyles>
            <div className="orderedList">
              <ol>
                  <li>Update and debug content</li>
              </ol>
            </div>
        </div>
    </WhiteSectionInfoStyles>
  )
}

export default Respondents

const ImgStyles = styled.section`
  height: 40rem; /* Set the desired height */
  width: 150%; /* Let the width adjust based on the aspect ratio */
  /* max-width: 100%; */
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

const WhiteSectionInfoStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    gap: 2rem;

    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
        width: 50vw;
        max-width: 60rem;
        

        h1 {
            font-size: var(--text-xl);
            font-weight: var(--weight-bold);
        }

        p {
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
        }
    }
`