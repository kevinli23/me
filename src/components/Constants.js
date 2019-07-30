import image1 from '../res/proj1.png';
import image2 from '../res/proj2.png';
import image3 from '../res/proj3.png';

import { faJava, faPython, faJs, faHtml5, faCss3, faReact, faBootstrap, faLinux, faGit, faGithub, faNode, faChrome } from "@fortawesome/free-brands-svg-icons";
import { faTensorflow, faCpp, faCsharp, faMongo} from './Icons';

export const iconColors = {
    'java': "#5382a1",
    'python': "#FFD43B",
    'js': "#f0db4f",
    'html5': "#e34f26",
    'css3': "#0072bb",
    'react': "#00d9ff",
    'bootstrap': 'rgb(86, 62, 124)',
    'linux': '#000000',
    'git': 'rgb(246, 79, 41)',
    'github': '#000000',
    'Tensorflow': '#f6bd3a',
    'C++': '#000000',
    'C#': '#000000',
    'Mongo': 'rgb(78, 169, 75)',
    'node': 'rgb(102, 159, 100)',
    'chrome': 'rgb(11, 164, 224)'
}

const Courses18 = [
    {code: 'MATH 135', name: "Algebra for Honours Mathematics"},
    {code: 'MATH 136', name: "Linear Algebra 1 for Honours Mathematics"},
    {code: 'MATH 137', name: "Calculus 1 for Honours Mathematics"},
    {code: 'MATH 138', name: "Calculus 2 for Honours Mathematics"},
    {code: 'CS 135', name: "Designing Functional Programs"},
    {code: 'CS 136', name: "Elementary Algorithm Design and Data Abstraction"}
];

const Courses19 = [
    {code: 'CS 240', name: "Data Structures and Data Management"},
    {code: 'CS 241', name: "Foundations of Sequential Programs"},
    {code: 'CS 245', name: "Logic and Computation"},
    {code: 'CS 246', name: "Object-Oriented Software Development"},
    {code: 'CS 251', name: "Computer Organization and Design"},
    {code: 'MATH 239', name: "Introduction to Combinatorics"},
    {code: 'STAT 230', name: "Probability"}
];

export const Courses = [
    {year: 2019, arr: Courses19},
    {year: 2018, arr: Courses18}
];

export const aboutMeText = [
    `Whomever is reading this, Hello! I'm currently a second year Computer Science Student at the University of Waterloo. I have been programming for about
    three years and am actively learning new things daily! I am currently employed at Intelex Technologies Inc. where I work as a software developer. At the moment, I am
    interested in Machine Learning (especially the mathematics that goes behind it!) as well as various other JavaScript libraries such as React and Node.`,

    `Aside from programming and learning, on my spare time I enjoy playing basketball (and keeping up with the NBA), watching cooking videos, following politics and
    playing a bit of video games.`,

    `I am currently seeking an internship opportunity for the summer (May to August) of 2020 that involves Software Development or Machine Learning!`,

    `Languages | Tools | Frameworks that I am familar with:`
];

export const projectInformation = [
    {
        name: "Pengu's Dank Adventure", 
        image: image1,
        description: `Platformer game that was made using JFrame and Graphics2D for rendering and Thread based execution for updates.
                      Also utilizes sockets for a Java backend that accepts simple login and message packets`,
        link: 'https://github.com/kevinli23/Pengus-Dank-Adventure',
        icons: [faJava]
    },
    {
        name: "Dark Run", 
        image: image2,
        description: 'Puzzle Platformer made using Java',
        link: 'https://github.com/kevinli23/Dark-Run',
        icons: [faJava]
    },
    {
        name: "Chronovise",
        image: image3,
        description: 'Chrome Extension to help you manage access to websites seperated by four different workspaces',
        link: 'https://github.com/kevinli23/Chronovise-1.0',
        icons: [faHtml5, faCss3, faJs, faBootstrap, faChrome]
    }
]