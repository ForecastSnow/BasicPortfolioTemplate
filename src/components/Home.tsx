import { useState } from 'react';
import NodejsSVG from '../assets/icons/backend/nodejs.svg?react';
import TypeScriptSVG from "../assets/icons/backend/typescript.svg?react"
import GithubSVG from "../assets/icons/various/github.svg?react"
import ReactSVG from "../assets/icons/frontend/react.svg?react"
import ViteSVG from "../assets/icons/frontend/vitejs.svg?react"
import TailwindSVG from "../assets/icons/frontend/tailwindcss.svg?react"





export function Home() {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("no pusiste el email"); // <== Enter your email address so it can be copied by the SVG.
        setCopied(true);
        setTimeout(() => setCopied(false), 400);
    };

    return (<>
        <section id="home" className="flex flex-col items-center bg-gradient-to-b from-gray-500 dark:from-blue-main via-80% and to-white dark:to-black ">

            <div className="flex flex-col items-center justify-between px-6 py-4 md:w-42xl xl:w-6xl 2xl:w-7xl">

                <h1 className="mt-20 text-yellow-text text-4xl  md:text-6xl xl:text-7xl 2xl:text-8xl">Software Developer</h1>

                <h2 className="text-slate-900 dark:text-white -translate-y-[1.875rem] mt-7 text-5xl  md:text-[5.25rem] xl:text-[6.25rem] 2xl:text-[9.25rem]">Linus Torvalds</h2>

                <h3 className="text-slate-900 dark:text-gray-text -translate-y-[2.5rem] mt-3  md:text-2xl xl:text-3xl 2xl:text-4xl">Full Stack Python</h3>

            </div>

            <div className="flex items-center max-h-16 -translate-y-[3.125rem] ">

                <NodejsSVG className="w-6 h-6 mx-[0.55rem]        md:w-7 md:h-7       xl:w-8 xl:h-8        2xl:w-10 2xl:h-10 2xl:m-3" />
                <TypeScriptSVG className="w-6 h-6 mx-[0.55rem]        md:w-7 md:h-7       xl:w-8 xl:h-8       2xl:w-10 2xl:h-10 2xl:m-3" />
                <TailwindSVG className="w-6 h-6 mx-[0.55rem]        md:w-7 md:h-7       xl:w-8 xl:h-8       2xl:w-10 2xl:h-10 2xl:m-3" />
                <ReactSVG className="w-6 h-6 mx-[0.55rem]        md:w-7 md:h-7       xl:w-8 xl:h-8       2xl:w-10 2xl:h-10 2xl:m-3" />
                <ViteSVG className="w-6 h-6 mx-[0.55rem]        md:w-7 md:h-7       xl:w-8 xl:h-8       2xl:w-10 2xl:h-10 2xl:m-3" />
                <GithubSVG className="w-6 h-6 mx-[0.55rem]        md:w-7 md:h-7       xl:w-8 xl:h-8       2xl:w-10 2xl:h-10 2xl:m-3 fill-black dark:fill-white" />

            </div>

            <div className=" flex justify-between -translate-y-[2.5rem] min-w-[13.875rem] md:min-w-[15.875rem] xl:min-w-[17.875rem] 2xl:min-w-[21.875rem]">


                <a href="https://www.linkedin.com" target="_blank" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white inline-flex items-center justify-center rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold cursor-pointer text-xs px-4 py-0.5 min-w-[6.375rem] px-4 py-2 md:min-w-[6.375rem]  xl:min-w-[7.375rem] xl:text-sm xl:px-5 xl:py-2 2xl:min-w-[9.375rem] 2xl:text-base 2xl:px-6 2xl:py-3">Linkedin</a>

                <a href="/Curriculum.pdf" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white inline-flex items-center justify-center rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold cursor-pointer text-xs px-4 py-0.5 min-w-[6.375rem] px-4 py-2 md:min-w-[6.375rem]  xl:min-w-[7.375rem] xl:text-sm xl:px-5 xl:py-2 2xl:min-w-[9.375rem] 2xl:text-base 2xl:px-6 2xl:py-3">Descargar CV</a>

            </div>

            <div className="flex -translate-y-[1.875rem]">

                <p className="dark:text-white text-sm md:text-base xl:text-xl 2xl:text-2xl">linusTorvalds@linux.linux</p> {/* <== your mail!! */}

                <button className="ml-3 cursor-pointer transform scale-100 hover:scale-120 transition-all duration-200 will-change-transform" onClick={handleCopy}>

                    {copied ?

                        <svg className="translate-y-[0.2rem] w-3.5 h-3.5 md:w-4 md:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
                        </svg>
                        :
                        <svg className="translate-y-[0.2rem] w-3.5 h-3.5 md:w-4 md:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z" clipRule="evenodd" />
                        </svg>

                    }
                </button >

            </div >

        </section >

    </>)
}