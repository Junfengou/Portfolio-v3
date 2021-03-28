
import React from 'react'
import { GrTooltip, GrGithub } from "react-icons/gr"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { MdWork } from "react-icons/md"



const navItems = [
    {
        icon: <BsFillPersonLinesFill />,
        link: {
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
        },
    },
    {
        icon: <GrGithub />,
        link: {
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
        },
    },
    {
        icon: <GrTooltip />,
        link: {
            href: "#",
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