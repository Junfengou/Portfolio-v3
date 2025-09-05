import React from 'react'
import {block18, git, eventvesta, quantumworkplace, workInProgress, oneStaff} from "../img/projects"
import {django, gatsby, graphql, mongodb, nextjs, python, typescript, ruby, jquery} from "../img/familiar"
import {csharp, dotnet, sql, tailwind, sanity} from "../img/learning"
import {contextAPI, css, html, javascript , react, styled, reactNative, postgresql} from "../img/love"
import { DiGithubBadge } from "react-icons/di"
import { FiExternalLink } from "react-icons/fi"

const projectData = [
        {
            title: "OneStaff Medical",
            description: "Built with React, NextJS, .NET, and AWS",
            image: oneStaff,
            position: 'Fullstack software development',
            type: 'Professional project',
            stack: [
                dotnet,
                csharp,
                react,
                typescript,
                sql
            ],
            buttons: [
                // {
                //     text: "Company website",
                //     link: "https://www.quantumworkplace.com/",
                //     icon: <FiExternalLink />
                // },
                {
                    text: "Project showcase",
                    link: "https://www.onestaffmedical.com/",
                    icon: <FiExternalLink />
                }
            ]
        },
    {
        title: "Quantum Workplace",
        description: "Built various products using technologies such as C#, .NET, React, Typescript, SQL Server, and more...",
        image: quantumworkplace,
        position: 'Fullstack software development',
        type: 'Professional project',
        stack: [
            dotnet,
            csharp,
            react,
            typescript,
            sql
        ],
        buttons: [
            // {
            //     text: "Company website",
            //     link: "https://www.quantumworkplace.com/",
            //     icon: <FiExternalLink />
            // },
            {
                text: "Project showcase",
                link: "/quantum",
                icon: <FiExternalLink />
            }
        ]
    },
    {
        title: "Event Vesta",
        description: "Built various products using technologies such as Ruby on Rails, React Native, Typescript, PostgresQL, and more...",
        image: eventvesta,
        position: 'Fullstack software development',
        type: 'Professional project',
        stack: [
            ruby,
            jquery,
            typescript,
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
                link: "https://apps.apple.com/us/app/event-vesta/id1499716599",
                icon: <FiExternalLink />
            }
        ]
    },
    {
        title: "Travel Nurse",
        description: "Built with Blazor + Entity FrameWork + MudBlazor + PostgreSQL",
        image: workInProgress,
        position: 'Fullstack project',
        type: 'Personal Project',
        stack: [
            dotnet, 
            csharp,
            postgresql
        ],
        buttons: [
            // Frontend is hosted on Netlify
            // Backend is hosted on Heroku -> juntheworkingman@gmail.com
            {
                text: "GitHub Repo",
                link: "https://github.com/Two-Stiff/TravelNurse",
                icon: <DiGithubBadge />
            },
            // {
            //     text: "Visit site",
            //     link: "https://shopforweirdos.vercel.app/",
            //     icon: <FiExternalLink />
            // }
        ]
    },
    {
        title: "Block 18 Burger Joint Fullstack",
        description: "Fullstack application built with React, Gatsby, GraphQL, and Sanity",
        image: block18,
        position: 'Fullstack project',
        type: 'Personal Project',
        stack: [
            react,
            gatsby, 
            graphql,
            sanity
        ],
        buttons: [
            {
                text: "GitHub Repo",
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

    // Older projects....Probably best to comment them out instead of deleting them.

    // {
    //     title: "GitHub Creeper",
    //     description: "An web application I created in the early days of learning React and bunch of other fun stuff.",
    //     image: git,
    //     type: 'Personal project',
    //     stack: [
    //         react,
    //         javascript,
    //         css,
    //         contextAPI,
    //         styled
    //     ],
    //     buttons: [
    //         {
    //             text: "GitHub",
    //             link: "https://github.com/Junfengou/Github-Clone-Dark-react",
    //             icon: <DiGithubBadge />
    //         },
    //         {
    //             text: "Visit site",
    //             link: "https://githubcreeper.netlify.app/",
    //             icon: <FiExternalLink />
    //         }
    //     ]
    // },
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