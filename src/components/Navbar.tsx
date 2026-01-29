import { useState, useEffect } from "react";

import HomeSVG from "../assets/icons/navbar/house.svg?react";
import FolderCodeSVG from "../assets/icons/navbar/folderCode.svg?react";
import UserSVG from "../assets/icons/navbar/user.svg?react";
import BlocksSVG from "../assets/icons/navbar/blocks.svg?react";
import FileBadgeSVG from "../assets/icons/navbar/fileBadge.svg?react";

export function Navbar() {

    const [theme, setTheme] = useState(() => {
        if (localStorage.getItem("theme") === "light") { return "light" } else { return "dark" }
    })

    useEffect(() => {

        if (theme === "dark") {

            document.querySelector("html")?.classList.add("dark")

        } else {

            document.querySelector("html")?.classList.remove("dark")

        }

    }, [theme])

    const changeTheme = () => {

        localStorage.setItem("theme", theme === "light" ? "dark" : "light")

        setTheme(currentTheme => currentTheme === "light" ? "dark" : "light")

    }

    return (

        <header className={"fixed z-[10] h-16 top-0 left-0 right-0 flex items-center justify-between md:backdrop-blur-md"}>

            <nav className="mx-auto overflow-y-hidden min-w-0 flex items-center bg-white dark:bg-slate-800 rounded-2xl md:rounded-xl border-1 border-slate-700 md:border-0 md:bg-transparent md:dark:bg-transparent md:w-2xl md:justify-between xl:w-6xl 2xl:w-7xl">

                <ul className="flex gap-4 p-1 md:gap-8">

                    <li onClick={() => { document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) }} className="text-slate-950 dark:text-white cursor-pointer hover:text-blue-700 text-slate-950 dark:hover:text-amber-300 transition"> <p className="hidden md:block" >Inicio</p> <HomeSVG className="w-[1.5rem] h-[1.5rem] p-0.5 md:hidden " /> </li>
                    <li onClick={() => { document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) }} className="text-slate-950 dark:text-white cursor-pointer hover:text-blue-700 text-slate-950 dark:hover:text-amber-300 transition"> <p className="hidden md:block" >Proyectos</p> <FolderCodeSVG className="w-[1.5rem] h-[1.5rem] p-0.5 md:hidden " /> </li>
                    <li onClick={() => { document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) }} className="text-slate-950 dark:text-white cursor-pointer hover:text-blue-700 text-slate-950 dark:hover:text-amber-300 transition"> <p className="hidden md:block" >Habilidades</p> <BlocksSVG className="w-[1.5rem] h-[1.5rem] p-0.5 md:hidden " /> </li>
                    <li onClick={() => { document.getElementById("aboutMe")?.scrollIntoView({ behavior: "smooth" }) }} className="text-slate-950 dark:text-white cursor-pointer hover:text-blue-700 text-slate-950 dark:hover:text-amber-300 transition"> <p className="hidden md:block" >Sobre mí</p> <UserSVG className="w-[1.5rem] h-[1.5rem] p-0.5 md:hidden " /> </li>
                    <li onClick={() => { document.getElementById("certificate")?.scrollIntoView({ behavior: "smooth" }) }} className="dark:text-white cursor-pointer hover:text-blue-700 dark:hover:text-amber-300 transition"> <p className="hidden md:block" >Certificaciones</p> <FileBadgeSVG className="w-[1.5rem] h-[1.5rem] p-0.5 md:hidden " /> </li>


                </ul>

                <button onClick={() => changeTheme()} className=" p-1 rounded-full hover:bg-amber-300/30 transition cursor-pointer md:rounded-xl md:p-2">

                    {theme === "dark" ?
                        (
                            <svg className="w-6 h-6 text-amber-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">

                                <path fillRule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clipRule="evenodd" />

                            </svg>
                        )
                        :
                        (
                            <svg className="w-6 h-6 text-amber-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">

                                <path fillRule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clipRule="evenodd" />

                            </svg>
                        )}

                </button>

            </nav>

        </header>

    );

}




