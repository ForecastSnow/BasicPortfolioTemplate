import { useState } from "react";
import { ProjectCard } from "./projectComponents/ProjectCard.tsx";
//import NodejsSVG from "../assets/icons/backend/nodejs.svg?react";
import TypeScriptSVG from "../assets/icons/backend/typescript.svg?react";
import ExpressSVG from "../assets/icons/backend/express.svg?react";
import ReactSVG from "../assets/icons/frontend/react.svg?react";
import ViteSVG from "../assets/icons/frontend/vitejs.svg?react";
import PythonSVG from "../assets/icons/backend/python.svg?react";
import JavascriptSVG from "../assets/icons/backend/javascript.svg?react";
import MongoDBSVG from "../assets/icons/backend/mongodb.svg?react";
import NestSVG from "../assets/icons/backend/nestjs.svg?react";
import postgresqlSVG from "../assets/icons/backend/postgresql.svg?react";
import HtmlSVG from "../assets/icons/frontend/html5.svg?react";
import SassSVG from "../assets/icons/frontend/sass.svg?react";
import TailwindSVG from "../assets/icons/frontend/tailwindcss.svg?react";
import DockerSVG from "../assets/icons/various/docker.svg?react";

//  Pay close attention to the syntax so that Vite understands that part of the Vite-plugin-svgr plugin ends the files as "?react"




const projects = [
    {

        typeCard: "Full Stack",
        subtitle: "to do list",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fuga deserunt consectetur, vel sapiente sit facilis. Facere iste nam vitae distinctio a. Recusandae sunt omnis doloribus assumenda magni eius animi!",
        githubLink: "https://github.com/ForecastSnow/ForeIA",   //  <== Add the link to your repository here
        deploymentLink: "https://tomasperez.work/foreia",   //  <== Remove or add the link to your deployed project
        icons: [TypeScriptSVG, JavascriptSVG, PythonSVG, ExpressSVG, MongoDBSVG, ViteSVG, ReactSVG, TailwindSVG, DockerSVG], //  <== Add the icons you want to the card here.
        staticUrl: "./img/projects/memePage.png", //  <== Add the link to your static image here.
        videoUrl: "./video/projects/"    //  <== You can add a video here, but make sure it's lightweight...

    },
    {

        typeCard: "Backend",
        subtitle: "pokemon api",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fuga deserunt consectetur, vel sapiente sit facilis. Facere iste nam vitae distinctio a. Recusandae sunt omnis doloribus assumenda magni eius animi!",
        githubLink: "https://github.com/ForecastSnow/NestAPI",
        deploymentLink: "https://tomasperez.work/apinest/",
        icons: [TypeScriptSVG, NestSVG, postgresqlSVG],
        staticUrl: "./img/projects/memePage.png",
        videoUrl: "./video/projects/"

    },
    {

        typeCard: "Frontend",
        subtitle: "web + css",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fuga deserunt consectetur, vel sapiente sit facilis. Facere iste nam vitae distinctio a. Recusandae sunt omnis doloribus assumenda magni eius animi!",
        githubLink: "https://github.com/ForecastSnow/ktmLandingWebClone",
        deploymentLink: "https://tomasperez.work/ktmLandingClone/",
        icons: [JavascriptSVG, HtmlSVG, SassSVG],
        staticUrl: "./img/projects/memePage.png",
        videoUrl: "./video/projects/"

    },

];

export function Project() {
    const [activeType, setActiveType] = useState("Todos");

    const filteredProjects = activeType === "Todos" ?

        projects
        :
        projects.filter((project) => project.typeCard === activeType);


    return (
        <section id="projects" className="w-full h-auto flex justify-around bg-gradient-to-b from-white to-gray-200  dark:from-black dark:to-blue-second">

            <div className="mt-5 md:w-3xl lg:w-5xl xl:w-6xl xl:mt-18 2xl:w-7xl">

                <h3 className=" text-center font-semibold mb-5 text-red-700 dark:text-yellow-text md:text-2xl xl:text-left">Mis proyectos destacados</h3>

                <ul className="flex justify-between text-xs w-[17.5rem] h-[2rem] mt-8 bg-gradient-to-r from-blue-600 via-80% to-purple-600 rounded-full mx-auto md:text-base md:w-[25rem] md:h-[2.625rem] xl:mx-0">

                    <li onClick={() => setActiveType("Todos")} className={`flex justify-center items-center cursor-pointer px-2.5 md:px-4 py-2 rounded-full text-white border-white transition-colors ${activeType === "Todos" ? "bg-fuchsia-950/50" : "hover:bg-fuchsia-950/30"}`}>
                        Todos
                    </li>

                    <li onClick={() => setActiveType("Full Stack")} className={`flex justify-center items-center cursor-pointer px-2.5 md:px-4 py-2 rounded-full text-white border-white transition-colors ${activeType === "Full Stack" ? "bg-fuchsia-950/50" : "hover:bg-fuchsia-950/30"}`}>
                        Full Stack
                    </li>

                    <li onClick={() => setActiveType("Frontend")} className={`flex justify-center items-center cursor-pointer px-2.5 md:px-4 py-2 rounded-full text-white border-white transition-colors ${activeType === "Frontend" ? "bg-fuchsia-950/50" : "hover:bg-fuchsia-950/30"}`}>
                        Frontend
                    </li>

                    <li onClick={() => setActiveType("Backend")} className={`flex justify-center items-center cursor-pointer px-2.5 md:px-4 py-2 rounded-full text-white border-white transition-colors ${activeType === "Backend" ? "bg-fuchsia-950/80" : "hover:bg-fuchsia-950/30"}`}>
                        Backend
                    </li>

                </ul>

                <div className="flex flex-col mt-8 ">{filteredProjects.map((item, index) => (<ProjectCard key={index} {...item} />))}</div>

            </div>

        </section >
    );

};