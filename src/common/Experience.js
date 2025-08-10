
const TechStack = {
    Vue: "Vue",
    Nuxt: "Nuxt",
    Javascript: "Javascript",
    TypeScript: "TypeScript",
    Rails: "Ruby on Rails",
    GraphQL: "GraphQL",
    PostgreSQL: "PostgreSQL",
    React: "React",
    ReactNative: "React Native",
    NET: "C# / .NET",
    Blazor: "Blazor",
    EntityFramework: "Entity Framework",
    SqlServer: "SQL Server",
    Redis: "Redis",
    Azure: "Azure",
    AWS: "AWS",
    CloudWatch: "AWS CloudWatch",
    Grafana: "AWS Grafana",
    Cognito: "AWS Cognito Auth",
    Jira: "Jira",
    Asana: "Asana",
    JQuery: "JQuery",
    NewRelics: "NewRelics"
}

export const workExperience = [
    {
        id: 0,
        position: "Student Web Developer",
        company: "University of Omaha Nebraska",
        header: "",
        timeFrame: "2020 - 2020",
        accomplishments: [
            "Initiated and developed a research project for University of Nebraska Medical Center",
            "Utilized frontend tool like Vue and Nuxt",
            "Collaborated with other students to create full stack application"
        ],
        techStack: [
            TechStack.Vue, TechStack.Nuxt, TechStack.Javascript
        ]
    },
    {
        id: 1,
        position: "Fullstack Web/Mobile Developer",
        company: "Event Vesta",
        timeFrame: "2020 - 2022",
        header: "",
        accomplishments: [
            "Fullstack developer utilized tools such as Ruby on Rails and React Native",
            "Redesigned and implemented UI features for better user experience",
            "Map navigation integration for easy access finding events",
            "Implemented analytics to keep track of user actions and better understand what features user like the most",
            "Firebase dynamic link and calendar integration",
            "Search and filter content within the application",
            "Integrate Google event schema and Sitemap for better SEO"
        ],
        techStack: [
            TechStack.ReactNative, TechStack.Rails, TechStack.GraphQL, TechStack.PostgreSQL, TechStack.TypeScript, TechStack.Jira
        ]
    },
    {
        id: 2,
        position: "Full-Stack Software Developer",
        company: "Quantum Workplace",
        timeFrame: "2022 - 2023",
        header: "Fullstack application developer utilize technologies such as .NET and React to deliver great products",
        accomplishments: [
            "Cross squad collaboration to coordinate feature planning and implementation",
            "Engaged in code review and discussions with other developers to trade ideas",
            "Implemented and developed Keyword Detection feature to help survey admins to detect naughty languages",
            "Delivered new survey creation experience for survey admins to construct new surveys to fit their needs",
            "Communicate with customer facing team to resolve production bugs",
            "Develop features in various different patterns such as Repository Pattern, Mediator Pattern and Entity Framework",
            "Developed strong SQL skills and Server Side knowledge through building various products",
            "Follow the MVC pattern to develop key features",
            "Engaged in code review and resolve Pull Request comments",
            "Code refactor to improve feature performance and separation of business logics",
            "Task tracking and documentation using Asana",
            "Involve in sprint ceremonies (Task scrum, estimate, and planning)",
            "Error tracking using New Relics",
            "Solid understanding of Git Resource Control",
            "Effective communication between product management, developers, and quality assurance",
            "Assisted QA for product testing",
            "Participated in code deployment and production release",
            "Participated in weekly developer show and share to learn from other developers"
        ],
        techStack: [
            TechStack.NET, TechStack.React, TechStack.TypeScript, TechStack.JQuery, TechStack.EntityFramework, 
            TechStack.SqlServer, TechStack.Redis, TechStack.Azure, TechStack.NewRelics, TechStack.Asana
        ]
    },

    {
        id: 3,
        position: "Full-Stack Software Developer",
        company: "OneStaff Medical",
        timeFrame: "2023 - now",
        header: "Experienced in building scalable, user-centric applications using technologies such as .NET, Blazor, React, and Next.js. Proven track record of cross-functional collaboration, performance optimization, and delivering end-to-end product features in agile environments",
        accomplishments: [
            "Collaborated with developers, designers, and product managers to define product scope, user flows, and design patterns",
            "Contributed legacy product rewrite that significantly improved load times, enhanced user experience, and streamlined workflows",
            "Played a key role in migrating legacy features, reimagining them with modern UI/UX and improved functionality",
            "Delivered feature demos to stakeholders, effectively communicating progress and gathering feedback",
            "Actively participated in code reviews and pull request discussions to promote knowledge sharing and maintain code quality",
            "Worked with database administrators to ensure accurate mapping of legacy data structures to new application models",
            "Developed many core features include enabling users to build and merge custom PDF documents for formal submissions",
            "Supported QA efforts by debugging complex product and data-related issues, including SQL/database layer investigations",
            "Utilized AWS products such as Grafana/CloudWatch for monitoring and debugging production issues in real-time",
            "Maintained task progress and documentation using Jira for agile planning and tracking",
            "Started an application from scratch with Blazor as a test project. Pitched to the stakeholder and received great feedback. The project was greenlit to become a standalone product"
        ],
        techStack: [
            TechStack.NET, TechStack.Blazor, TechStack.AWS, TechStack.Cognito, TechStack.CloudWatch,
            TechStack.Grafana, TechStack.EntityFramework, TechStack.React, TechStack.TypeScript,
            TechStack.SqlServer, TechStack.Jira
        ]
    },
]