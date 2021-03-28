import React from 'react'
import {SocialStyles} from "./SocialStyles"

function Social({icon, link}) {
    return (
        <SocialStyles>
            <a {...link}>{icon}</a>
        </SocialStyles>
    )
}

export default Social
