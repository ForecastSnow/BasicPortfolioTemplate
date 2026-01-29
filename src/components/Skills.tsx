import { SkillCard } from "./skillsComponents/SkillsCard"
import ReactSVG from "../assets/icons/frontend/react.svg?react"
import ViteSVG from "../assets/icons/frontend/vitejs.svg?react"
import Html5SVG from "../assets/icons/frontend/html5.svg?react"
import CssSVG from "../assets/icons/frontend/css.svg?react"
import tailwindSVG from "../assets/icons/frontend/tailwindcss.svg?react"
import SassSVG from "../assets/icons/frontend/sass.svg?react"

import ExpressSVG from "../assets/icons/backend/express.svg?react"
import MongoDBSVG from "../assets/icons/backend/mongodb.svg?react"
import TypeScriptSVG from "../assets/icons/backend/typescript.svg?react"
import NestSVG from "../assets/icons/backend/nestjs.svg?react"
import JestSVG from "../assets/icons/backend/jest.svg?react"
import postgresql from "../assets/icons/backend/postgresql.svg?react"
import NodeSVG from "../assets/icons/backend/nodejs.svg?react"

import VscodeSVG from "../assets/icons/various/vscode.svg?react"
import GithubSVG from "../assets/icons/various/github.svg?react"
import GitSVG from "../assets/icons/various/git.svg?react"
//import Cs6SVG from "../assets/icons/various/photoshop.svg?react"
import NpmSVG from "../assets/icons/various/npm.svg?react"
//import CloudflareSVG from "../assets/icons/various/cloudflare.svg?react"

import DockerSVG from "../assets/icons/various/docker.svg?react"
import GoSVG from "../assets/icons/backend/golang.svg?react"
import PythonSVG from "../assets/icons/backend/python.svg?react"

export function Skills() {

    const skillsData = [
        {
            section: "Backend",
            icons: [NodeSVG, TypeScriptSVG, ExpressSVG, NestSVG, JestSVG, postgresql, MongoDBSVG]

        },
        {
            section: "Frontend",
            icons: [Html5SVG, CssSVG, ViteSVG, ReactSVG, tailwindSVG, SassSVG]

        },
        {
            section: "Herramientas",
            icons: [VscodeSVG, NpmSVG, GithubSVG, GitSVG]

        },
        {
            section: "Aprendiendo",
            icons: [PythonSVG, DockerSVG, GoSVG,]

        },

    ]

    return (

        <>
            <section id="skills" className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-gray-200 dark:from-blue-second to-blue-200 dark:to-cyan-950 pb-12">

                <div className="border-t border-slate-700 dark:border-white w-[20.5rem] md:w-2xl xl:w-6xl 2xl:w-7xl">

                    <h3 className="my-12  text-2xl font-semibold text-red-700 dark:text-yellow-text text-center xl:text-left" >Mis habilidades</h3>

                    <div className="w-full flex flex-col items-center">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 md:grid-rows-2 xl:flex flex-row justify-between w-full">

                            {skillsData.map((items, index) => <SkillCard key={index} {...items} />)}

                        </div>

                    </div>

                </div>

            </section>

        </>

    )

}