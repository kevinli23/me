import image1 from "../res/proj1.png";
import image2 from "../res/proj2.png";
import image3 from "../res/proj3.png";
import image4 from "../res/me300.png";
import image5 from "../res/image5.jpg";

import {
  faJava,
  faPython,
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faBootstrap,
  faLinux,
  faGit,
  faGithub,
  faNode,
  faChrome,
  faHackerrank,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faTensorflow, faCpp, faCsharp, faMongo, faDevpost, faResume } from "./Icons";

const icons = [faGithub, faLinkedin, faResume, faHackerrank, faDevpost];
const links = [
  "https://github.com/kevinli23",
  "https://www.linkedin.com/in/kevinli230/",
  "https://drive.google.com/file/d/15GXQqigZm1RIX0tZIU4c7UYjXpZYJPtw/view?usp=sharing",
  "https://www.hackerrank.com/cskevinli23",
  "https://devpost.com/kevinli23"
];
const delay = [2000, 2300, 2600, 2900, 3200];
export const menuIcons = [
    {"icon": icons[0], "link": links[0], "delay": delay[0]},
    {"icon": icons[1], "link": links[1], "delay": delay[1]},
    {"icon": icons[2], "link": links[2], "delay": delay[2]},
    {"icon": icons[3], "link": links[3], "delay": delay[3]},
    {"icon": icons[4], "link": links[4], "delay": delay[4]},
]

function Course(code, name, link) {
  this.code = code;
  this.name = name;
  this.link = link;
}

export const iconColors = {
  java: "#5382a1",
  python: "#FFD43B",
  js: "#f0db4f",
  html5: "#e34f26",
  css3: "#0072bb",
  react: "#00d9ff",
  bootstrap: "rgb(86, 62, 124)",
  linux: "#000000",
  git: "rgb(246, 79, 41)",
  github: "#000000",
  Tensorflow: "#f6bd3a",
  "C++": "#000000",
  "C#": "#000000",
  Mongo: "rgb(78, 169, 75)",
  node: "rgb(102, 159, 100)",
  chrome: "rgb(11, 164, 224)",
};

const Courses18 = [
  new Course(
    "CS 135",
    "Designing Functional Programs",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-CS.html#CS135"
  ),
  new Course(
    "CS 136",
    "Elementary Algorithm Design and Data Abstraction",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-CS.html#CS136"
  ),
  new Course(
    "SCI 206",
    "The Physics of How Things Work",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-SCI.html#SCI206"
  ),
  new Course(
    "MATH 135",
    "Algebra for Honours Mathematics",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-MATH.html#MATH135"
  ),
  new Course(
    "MATH 136",
    "Linear Algebra 1 for Honours Mathematics",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-MATH.html#MATH136"
  ),
  new Course(
    "MATH 137",
    "Calculus 1 for Honours Mathematics",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-MATH.html#MATH137"
  ),
  new Course(
    "MATH 138",
    "Calculus 2 for Honours Mathematics",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-MATH.html#MATH138"
  ),
  new Course(
    "ENGL 109",
    "Introduction to Academic Writing",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-ENGL.html#ENGL109"
  ),
  new Course(
    "ENGL 119",
    "Communications in Mathematics & Computer Science",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-ENGL.html#ENGL119"
  ),
  new Course(
    "ECON 101",
    "Introduction to Microeconomics",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-ECON.html#ECON101"
  )
];

const Courses19 = [
  // {code: 'CS 240', name: "Data Structures and Data Management"},
  // {code: 'CS 241', name: "Foundations of Sequential Programs"},
  new Course(
    "CS 245",
    "Logic and Computation",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-CS.html#CS245"
  ),
  new Course(
    "CS 246",
    "Object-Oriented Software Development",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-CS.html#CS246"
  ),
  new Course(
    "CS 251",
    "Computer Organization and Design",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-CS.html#CS251"
  ),
  // {code: 'MATH 239', name: "Introduction to Combinatorics"},
  new Course(
    "STAT 230",
    "Probability",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-STAT.html#STAT230"
  ),
  new Course(
    "ECON 201",
    "Microeconomic Theory for Business and Policy",
    "http://www.ucalendar.uwaterloo.ca/1920/COURSE/course-ECON.html#ECON201"
  )
];

export const Courses = [
  { year: 2019, arr: Courses19 },
  { year: 2018, arr: Courses18 }
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
    link: "https://github.com/kevinli23/Pengus-Dank-Adventure",
    icons: [faJava]
  },
  {
    name: "Dark Run",
    image: image2,
    description:
      "Puzzle Platformer made using Java and applies the core concepts of OOP. Uses a tile based mechanics for unit collision",
    link: "https://github.com/kevinli23/Dark-Run",
    icons: [faJava]
  },
  {
    name: "Chronovise",
    image: image3,
    description:
      "Chrome Extension to help you manage access to websites seperated by four different workspaces",
    link: "https://github.com/kevinli23/Chronovise-1.0",
    icons: [faHtml5, faCss3, faJs, faBootstrap, faChrome]
  },
  {
    name: "Portfolio Website",
    image: image4,
    description:
      "A React based portfolio website that uses a mix of Material Design and creativity!",
    link: "https://github.com/kevinli23/me",
    icons: [faReact, faCss3, faJs, faNode]
  },
  {
    name: "Hand Sign Ninjutsu Simular",
    image: image5,
    description:
      "Built at HTN19, where our team used handsign recognition and our voices to simulate ninjutsu from the anime Naruto in a one versus one AR battle",
    link:
      "https://devpost.com/software/ar-voice-control-and-ml-hand-sign-ninjutsu-battle-simulator",
    icons: [faPython, faReact, faJs, faTensorflow]
  }
];
