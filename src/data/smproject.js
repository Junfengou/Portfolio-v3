import React from 'react'
import {django, gatsby, graphql, mongodb, nextjs, python, rest, typescript} from "../img/familiar"
import {csharp, dotnet, sql, tailwind, sanity} from "../img/learning"
import {contextAPI, css, html, javascript , react, styled} from "../img/love"
import { DiGithubBadge } from "react-icons/di"
import { FiExternalLink } from "react-icons/fi"

const smproject = [
    {
        title: "Portfolio Version 1",
        description: "First iteration of my personal portfolio. I've developed quite of bit of frontend skills since then.",
        tech: "Stack",
        stack: [react, styled, javascript],
        icon: <FiExternalLink />,
        link: "https://jundiscoverweb.netlify.app/"
    },
    {
        title: "GitHub Creeper",
        description: "An web application I created in the early days of learning React and bunch of other fun stuff.",
        tech: "Stack",
        stack: [react, javascript, contextAPI],
        icon: <FiExternalLink />,
        link: "https://githubcreeper.netlify.app/"
    },
    {
        title: "Restaurant menu",
        description: "Wes Bos' beginner to react course which help me tremedously on my journey",
        tech: "Stack",
        stack: [react, css, javascript],
        icon: <DiGithubBadge />,
        link: "https://github.com/Junfengou/Catch-of-the-day"
    },
    {
        title: "SpaceX rockets",
        description: "A simple application built utilizes GraphQL and ApolloClient to fetch information from SpaceX",
        tech: "Stack",
        stack: [react, css, graphql],
        icon: <DiGithubBadge />,
        link: "https://github.com/Junfengou/spacex-react-graphql"
    },
    {
        title: "Weather app",
        description: "An small application I built while learning the ins and outs of REST api and fetch external information",
        tech: "Stack",
        stack: [react, css, rest],
        icon: <DiGithubBadge />,
        link: "https://github.com/Junfengou/weather-app-react"
    },
    {
        title: "Quiz app with typescript",
        description: "A small side project I built while learning the fundamental of typescript",
        tech: "Stack",
        stack: [react, css, typescript],
        icon: <DiGithubBadge />,
        link: "https://github.com/Junfengou/Quiz-app-typescript"
    },

    // Older projects....Probably best to comment them out instead of deleting them.

    // {
    //     title: "Social media site with Django",
    //     description: "My first ever web project built with Django both frontend and backend",
    //     tech: "Stack",
    //     stack: [python, django, css],
    //     icon: <FiExternalLink />,
    //     link: "http://marshpillow.pythonanywhere.com/"
    // },
    
]

export default smproject;