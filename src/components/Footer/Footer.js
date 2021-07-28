import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from "styled-components"
import navItems from '../../data/navItems'
import Social from '../Social/Social'
import {gatsby} from "../../img/familiar"

function Footer() {
    const [ ref, inView ] = useInView({ threshold: 0.2, triggerOnce: true })
    
    return (
        <FooterStyles>
            <div className="socials" ref={ref}>
                <div className={`${inView ? "icons" : null}`}>
                {
                    navItems.map((item, i) => (
                        <Social item={item} key={i} styleIt={`item${i}`} />
                        // <p>hmm</p>
                    ))
                }
                </div>
            </div>
            <div className={` ${inView ? "footerMsg" : null}`}>
                <h2>Build using <img src={gatsby.logo} alt={gatsby.title} /> with help from ☕ and 🍵</h2>
            </div>
        </FooterStyles>
    )
}

export default Footer

/*

<div className="socials" ref={ref}>
                <div className={`${inView ? "icons" : null}`}>
                {
                    navItems.map((item, i) => (
                        <Social item={item} key={i} styleIt={`item${i}`} />
                        // <p>hmm</p>
                    ))
                }
                </div>
            </div>
            <div className={` ${inView ? "footerMsg" : null}`}>
                <h2>Build using Gastby with help from ☕ and 🍵</h2>
            </div>

*/



const FooterStyles = styled.div`
    
    height: 20vh;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;

    .socials {
        display: flex;
        justify-content: center;
        align-items: center;


        .icons {
            display: flex;
            li {
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
            
    }

    .footerMsg {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        animation: fadeUp 1s ease-in forwards;
    }

    img {
        height: 1.7rem;
        object-fit: contain;

    }

    @keyframes firstSocialIn {
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
            transform: translateX(-4.2rem);
            opacity: 0;
        }
        40% {
            transform: translateX(-4.2rem);
            opacity: 0;
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
            opacity: 0;
        }
        80% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
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
