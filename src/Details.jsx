//importing my profile image
import profile from "./assets/profile.jpg";

//importing the tekdek pictures
import bootstrap from "./assets/tekdek/bootstrap.png";
import css from "./assets/tekdek/css.png";
import expressjs from "./assets/tekdek/expressjs.png";
import git from "./assets/tekdek/git.png";
import github from "./assets/tekdek/github.png";
import html from "./assets/tekdek/html.png";
import javascript from "./assets/tekdek/javascript.png";
import mongodb from "./assets/tekdek/mongodb.png";
import mysql from "./assets/tekdek/mysql.png";
import nodejs from "./assets/tekdek/nodejs.png";
import npm from "./assets/tekdek/npm.png";
import react from "./assets/tekdek/react.png";
import tailwind from "./assets/tekdek/tailwind.png";
import vscode from "./assets/tekdek/vscode.png";


//importing my project pictures

import projectPic1 from "./assets/projects/project1.jpg";
import projectPic2 from "./assets/projects/project2.jpg";
import projectPic3 from "./assets/projects/project3.jpg";
import projectPic4 from "./assets/projects/project4.jpg";


//adding my personal information

export const personalInfo = {
    name: "Ranil Dissanayaka",
    tagline: "I love playing with code to see how it works!!!!!",
    img: profile,
    about: `I enjoy coding to see how things work, and have been doing it leisurly since the late 90's. I finally decided to pull the trigger and go through the process of making it my life's work!!!!`,
  };

  //i will be adding my actual social media information once i create and augment the rest not just my github page
  export const socialMediaUrl = {
    linkdein: "https://www.linkedin.com/",
    github: "https://github.com/RanilSD",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  };


  //work experience left for future augmentation

  export const workDetails = [
    {
      Position: "Backend Web Developer!!!",
      Company: `Add Your Company Name Here`,
      Location: "United States",
      Type: "Full Time",
      Duration: "Feb 2024 - Dec 2024",
    },
    {
      Position: "Frontend web Developer!!!",
      Company: `Add Your Company Name Here`,
      Location: "United States",
      Type: "Internship",
      Duration: "Feb 2024 - Dec 2024",
    },
    {
      Position: "Internship!!!",
      Company: `Add Your Company Name Here`,
      Location: "United States",
      Type: "Internship",
      Duration: "Feb 2024 - Dec 2024",
    },
  ];

  //my education information

  export const schoolDetails = [
    {
      Position: "Frontend/Backend Development",
      Company: "UCONN, Google, YouTube, Medium, W3Schools",
      Location: "Online",
      Type: "Full Time",
      Duration: "June 2023 - Present",
    },
    {
      Position: "Associates Degree in general studies",
      Company: `University of New Haven, and Gateway Community college`,
      Location: "Connecticut",
      Type: "Full Time",
      Duration: "2005-2009",
    },
  ];

  //exporting the tekdek tools

  export const techStackDetails = {
    bootstrap: bootstrap,
    css: css,
    expressjs: expressjs,
    git: git,
    github: github,
    html: html,
    javascript: javascript,
    mongodb: mongodb,
    mysql: mysql,
    nodejs: nodejs,
    npm: npm,
    react: react,
    tailwind: tailwind,
    vscode: vscode, 
  };


  //exporting my project details and leaving them vague so i can keep adding

  export const projectDetails = [
    {
      title: "What we cooking!?!?!",
      image: projectPic1,
      description: `This is a recipe search for people who want to plan their meals accordingly during the week when they arent sure what they want to cook/eat.`,
      previewLink: "https://ranilsd.github.io/recipe_sharing/",
      githubLink: "https://github.com/RanilSD/recipe_sharing",
    },
    {
      title: "Nerdit Gamer's Den!!!",
      image: projectPic2,
      description: `This is a chat/information gathering web app for gamers so they can search games, leave comments, and soon to save favorite screenshots and even upload their own!!!`,
      previewLink: "https://tranquil-journey-03963-148add2e6216.herokuapp.com/api/users/login",
      githubLink: "https://github.com/DannyFischler/carolinacougars",
    },
    {
      title: "Project title 3 soon to come!!!",
      image: projectPic3,
      description: `This is left empty for future projects!!!`,
      previewLink: "https://google.com",
      githubLink: "https://github.com",
    },
    {
      title: "Project title 4 soon to come!!!",
      image: projectPic4,
      description: `This is left empty for future projects!!!`,
      previewLink: "https://google.com",
      githubLink: "https://github.com",
    },

];

