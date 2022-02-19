import Headshot from '../assets/headshot-formal-blur-zoom.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import Express from "../assets/express.png"
export default {
    nav: {
        logo: 'Kamyar Mivehchi',
        links: [
            { text: 'Stack', to: 'stack' },
            { text: 'About', to: 'about' },
            { text: 'Project', to: 'mywork' },
            { text: 'Resume', to: 'myResume' },
            { text: 'Contact', to: 'mycontact' },
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

};