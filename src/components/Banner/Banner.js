import React, { useState, useEffect } from 'react'
import navItems from '../../data/navItems'
import Social from '../Social/Social'
import BannerStyles from './BannerStyles'
import quoteData from "../../data/quotes"
import Name from "./Name";


const generateRandomNum = (numLength) => {
    return Math.floor(Math.random() * Math.floor(numLength));
}

function Banner() {
    const [quote, setQuote] = useState({})
    
     useEffect(() => {
        setQuote(quoteData[generateRandomNum(quoteData.length)])
    }, [])


    return (
        <BannerStyles>
            <div className="socials">{
                navItems.map((item, i) => 
                (<Social icon={item.icon} link={item.link} key={i}/>))
            }</div>

            <div className="main">
                <Name />
                <div className="line" />
                <h2 className="title">Web Developer</h2>
            </div>
            
            <div className="quotes">
                <h1>{quote.quote}</h1>
                <p>{quote.author}</p>
            </div>
        </BannerStyles>
    )
}

export default Banner
