
import React from 'react'
import { GrTooltip, GrGithub } from "react-icons/gr"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { MdWork } from "react-icons/md"

import { GithubIcon, GmailIcon, LinkedinIcon } from "../img/icons"



const navItems = [
    {
        icon: <LinkedinIcon />,
        link: {
            href: "https://www.mcdonalds.com/us/en-us.html",
            target: "_blank",
            rel: "noopener noreferrer",
        },
    },
    {
        icon: <GithubIcon />,
        link: {
            href: "https://www.mcdonalds.com/us/en-us.html",
            target: "_blank",
            rel: "noopener noreferrer",
        },
    },
    {
        icon: <GmailIcon />,
        link: {
            href: "https://www.mcdonalds.com/us/en-us.html",
            target: "_blank",
            rel: "noopener noreferrer",
        }
    }
];
   


export default navItems


/*
 icon: <GrGithub />,
        link: {
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
        },
        icon: <BsFillPersonLinesFill />,
        link: {
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
        },
        icon: <GrTooltip />,
        link: {
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
        }

*/