import Headshot from '../assets/headshot-formal-blur-zoom.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import Express from "../assets/express.png"
import noteGIF from '../assets/NoteTaker.gif';
import typeGIF from '../assets/typing-demo (1).gif';
import workoutGIF from '../assets/WokoutWiz.gif';
import weatherGIF from '../assets/weatherDash.gif';

export default {
    nav: {
        logo: 'Kamyar Mivehchi',
        logoSmall: 'KM',
        links: [
            { text: 'About' },
            { text: 'Projects' },
            { text: 'Skills' },
            { text: 'Contact' },
        ],
    },
    header: {
        img:
            '',
        imgPlaceholder:
            `${Headshot}`,
        text: ['Kamyar Mivehchi'],
        typical: [
            'Web Developer. ',
            2000,
            'Chemist. ',
            2000,

        ],
        btnText: 'Discover',
    },

    stack: {
        title: 'Stack',
        tech: [
            {
                img: `${Mongo}`,
                alt: 'mongodb',
            },
            {
                img: process.env.PUBLIC_URL + '/logo512.png',
                alt: 'react',
            },
            {
                img: `${Express}`,
                alt: 'express',
            },
            {
                img: `${Node}`,
                alt: 'node',
            },
        ],
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
    },

    project: {
        title: 'Projects',
        data: [
            {
                title: 'Type{Scripts}',
                img: `${typeGIF}`,
                git: 'https://github.com/Kam-Mivehchi/TypeScripts',
                live: 'https://typescripts-btc.herokuapp.com/',
                desc: "Type{Scripts} is a typing game for all developers, new and experienced alike where users are able to see their typing skills when typing code.We noticed that a lot of the typing quizes or games didn't offer developer modes where you can type code instead of randomwords and sentences and sought to provide a solution in the form of Typescripts. This being our very first full stack development project, we learned a lot about technical skills and socialskills when working in a team.",
                tech: ["JavaScript", "Handlebars", 'CSS'],
            },
            {
                title: 'Workout Wizard',
                img: `${workoutGIF}`,
                git: 'https://github.com/Kam-Mivehchi/project-1',
                live: 'https://runaariga.github.io/project-1/',
                desc: "Application where the user is able to find a workout specifically to certain muscle groups.If the user selects a muscle group, application will provide a list of workouts and videos",
                tech: ["JavaScript", "HTML", 'CSS'],
            },
            {
                title: 'Weather Dashboard',
                img: `${weatherGIF}`,
                git: 'https://github.com/Kam-Mivehchi/Weather-Dashboard',
                live: 'https://runaariga.github.io/Weather-Dashboard/',
                desc: "Weather Dashboard is a sleek and responsive solution to recive weather information from around the world.This application allows user input(string input or button preset) to change the forecast to reflect their desired location.Weather data is updated dynamically with the use of Open Weather API and JavaScript.",
                tech: ["JavaScript", "HTML", 'CSS'],
            },
            {
                title: 'Note Taker',
                img: `${noteGIF}`,
                git: 'https://github.com/Kam-Mivehchi/Note-Taker',
                live: 'https://notetaker-km.herokuapp.com/',
                desc: "Weather Dashboard is a sleek and responsive solution to recive weather information from around the world.This application allows user input(string input or button preset) to change the forecast to reflect their desired location.Weather data is updated dynamically with the use of Open Weather API and JavaScript.",
                tech: ["JavaScript", "HTML", 'CSS'],
            }
        ]
    },
    resume: {
        cat1: 'Chemical',
        cat2: 'Programming',
        skills: {
            programming: ["JavaScript",
                "MongoDB",
                "SQL",
                "HTML",
                "Node.js",
                "Progressive Web Development",
                "Cascading Style Sheets(CSS)",
                "Adobe Illustrator",
                "Adobe Photoshop",

            ],
            chemical: [
                "ICP/AES",
                "FTIR/RAMAN",
                "Research and Development (R&D)",
                "Quality Control",
                "Analytical Skills",
                "Method Development",
                "Microsoft Suite",
                "AutoCAD"


            ]


        }
    }

};