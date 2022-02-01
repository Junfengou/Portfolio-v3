import React from 'react'
import {block18, git, eventvesta} from "../img/projects"
import {django, gatsby, graphql, mongodb, nextjs, python, typescript, ruby, jquery} from "../img/familiar"
import {csharp, dotnet, sql, tailwind, sanity} from "../img/learning"
import {contextAPI, css, html, javascript , react, styled, reactNative} from "../img/love"
import { DiGithubBadge } from "react-icons/di"
import { FiExternalLink } from "react-icons/fi"

const projectData = [
    {
        title: "Event Vesta",
        description: "Online event platform and mobile app that can help you discover awesome events in your area",
        image: eventvesta,
        type: 'Professional project',
        stack: [
            ruby,
            jquery,
            javascript,
            css,
            reactNative
        ],
        buttons: [
            {
                text: "Website",
                link: "https://eventvesta.com/",
                icon: <FiExternalLink />
            },
            {
                text: "Mobile app",
                link: "https://mobileapp.eventvesta.com/",
                icon: <FiExternalLink />
            }
        ]
    },
    {
        title: "Block 18 Burger Joint",
        description: "The best burger in town! This is an fullstack application I built with bunch of goodies",
        image: block18,
        type: 'Personal Project',
        stack: [
            react,
            gatsby, 
            graphql,
            sanity
        ],
        buttons: [
            {
                text: "GitHub",
                link: "https://github.com/Junfengou/Block-18",
                icon: <DiGithubBadge />
            },
            {
                text: "Visit site",
                link: "https://block18.netlify.app/",
                icon: <FiExternalLink />
            }
        ]
    },
    {
        title: "GitHub Creeper",
        description: "An web application I created in the early days of learning React and bunch of other fun stuff.",
        image: git,
        type: 'Personal project',
        stack: [
            react,
            javascript,
            css,
            contextAPI,
            styled
        ],
        buttons: [
            {
                text: "GitHub",
                link: "https://github.com/Junfengou/Github-Clone-Dark-react",
                icon: <DiGithubBadge />
            },
            {
                text: "Visit site",
                link: "https://githubcreeper.netlify.app/",
                icon: <FiExternalLink />
            }
        ]
    },
    /* {
        title: "Learn Sql with Me!",
        description: "This is an API built with C# and .NET framework about SQL Commands",
        image: sqlcmd,
        type: 'Personal Project',
        progress: "Work in progress!",
        stack: [
            csharp, dotnet, sql,
        ],
        buttons: [
            {
                text: "GitHub",
                link: "https://github.com/Junfengou/Sql-Api-Dotnet",
                icon: <DiGithubBadge />
            }
        ]
    }, */

];

export default projectData;