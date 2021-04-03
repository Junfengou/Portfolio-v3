import React from 'react'
import {SocialStyles} from "./SocialStyles"

function Social({item, styleIt}) {
    return (
        <SocialStyles >
            <a className={`${styleIt}`} {...item.link}>{item.icon}</a>
        </SocialStyles>
    )
}

export default Social
