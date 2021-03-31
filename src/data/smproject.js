import React from 'react'
import {django, gatsby, graphql, mongodb, nextjs, python, rest} from "../img/familiar"
import {csharp, dotnet, sql, tailwind, typescript, sanity} from "../img/learning"
import {contextAPI, css, html, javascript , react, styled} from "../img/love"
import { DiGithubBadge } from "react-icons/di"
import { FiExternalLink } from "react-icons/fi"

const smproject = [
    {
        title: "Restaurant menu ",
        description: "Wes Bos' beginner to react course which help me tremedously on my journey",
        stack: [react, css, javascript],
        icon: <DiGithubBadge />,
        link: "https://github.com/Junfengou/Catch-of-the-day"
    },
    {
        title: "SpaceX rockets",
        description: "A simple application built utilizes GraphQL and ApolloClient to fetch information from SpaceX",
        stack: [react, css, graphql],
        icon: <DiGithubBadge />,
        link: "https://github.com/Junfengou/spacex-react-graphql"
    },
    {
        title: "Weather app",
        description: "An small application I built while learning the ins and outs of REST api and fetch external information",
        stack: [react, css, rest],
        icon: <DiGithubBadge />,
        link: "https://github.com/Junfengou/weather-app-react"
    },
    {
        title: "Quiz app with typescript",
        description: "A small side project I built while learning the fundamental of typescript",
        stack: [react, rest, typescript],
        icon: <DiGithubBadge />,
        link: "https://github.com/Junfengou/Quiz-app-typescript"
    },
    {
        title: "Social media site with Django",
        description: "My first ever web project built with Django both frontend and backend",
        stack: [python, django, html, css],
        icon: <FiExternalLink />,
        link: "http://marshpillow.pythonanywhere.com/"
    },
    
]

export default smproject;