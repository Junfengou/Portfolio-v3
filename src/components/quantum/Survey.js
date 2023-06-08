import React from 'react'
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {keyworddetection} from "../../img/projects"
import {survey_overhaul_menu, survey_details, survey_confidentiality, 
    survey_questions, survey_participants, survey_schedule, survey_review, survey_preview} from "../../img/projects"

function Survey() {

    const carouselArr = [{id: 1, img:survey_overhaul_menu, legend: "survey menu"}, {id: 2, img:survey_details, legend: "survey details page",  },
    {id: 3, img:survey_confidentiality, legend: "survey confidentiality page" }, {id: 4, img:survey_questions, legend: "survey questions page" },
    {id: 5, img:survey_participants, legend: "survey participant page" }, {id: 6, img:survey_schedule, legend: "survey schedule page" },
    {id: 7, img:survey_review, legend: "survey review page" }, 
    // {id: 8, img:survey_preview, legend: "survey preview page" }
]

  return (
    
    <BlueSectionInfoStyles>
        <div className={`title`}>
            <h1>Survey Admin Overhaul (ASP.NET)</h1>
            <div className="carousel">
                <Carousel autoPlay={true} interval={2500} infiniteLoop={true}>
                    {carouselArr.map(item => (
                        <div key={item.id}>
                            <img src={item.img} />
                            <p className="legend">{item.legend}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="orderedList">
              <ol>
                  <li>Enhanced end-user experience for admins to create surveys</li>
                  <li>Provide different combinations to tailor to customer’s need (scenarios in participant step)</li>
                  <li>Overhauled schedule to deliver better notification</li>
                  <li>Deliver better admin editor experience</li>
              </ol>
            </div>
        </div>
    </BlueSectionInfoStyles>
  )
}

export default Survey


const BlueSectionInfoStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: var(--color-primary);
    padding: 5rem;

    .carousel {
        width: 110%; 
    }

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
          color: white;
        }
    }
`