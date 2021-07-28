
import React from 'react'
import { GrTooltip, GrGithub } from "react-icons/gr"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { MdWork } from "react-icons/md"

import { GithubIcon, GmailIcon, LinkedinIcon } from "../img/icons"



const navItems = [
    {
        icon: <LinkedinIcon />,
        link: {
            href: "https://www.linkedin.com/in/junfeng-ou-a359b41a4/",
            target: "_blank",
            rel: "noopener noreferrer",
        },
    },
    {
        icon: <GithubIcon />,
        link: {
            href: "https://github.com/Junfengou",
            target: "_blank",
            rel: "noopener noreferrer",
        },
    },
    {
        icon: <GmailIcon />,
        link: {
            href: "mailto:junfengou@gmail.com",
            target: "_blank",
            rel: "noopener noreferrer",
        }
    },
    {
        icon: <GithubIcon />,
        link: {
            href: "https://github.com/Junfengou",
            target: "_blank",
            rel: "noopener noreferrer",
        },
    },
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