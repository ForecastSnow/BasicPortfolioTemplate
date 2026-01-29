import type { SVGProps } from "react";

type SkillCardProps = {

    section: string;

    icons: React.ComponentType<SVGProps<SVGSVGElement>>[];

};

export function SkillCard({ section, icons }: SkillCardProps) {

    return (

        <div className="flex flex-col items-center bg-gradient-to-bl from-fuchsia-100 dark:from-fuchsia-950 to-indigo-200 dark:to-indigo-950 border border-cyan-900 rounded-xl hover:shadow-[0_0_15px_3px_rgba(59,130,246,0.6)] transform transition-transform duration-300 hover:scale-102 h-[23rem] w-[20.5rem] md:h-[21.3rem] xl:w-[16.875rem] xl:h-[19rem] 2xl:w-[18.875rem] 2xl:h-[21rem]">

            <h4 className="text-slate-950 dark:text-white text-2xl m-4"> {section}</h4 >

            <div className="grid grid-cols-3 grid-rows-3 gap-10 md:gap-12">

                {icons.map((Icon, index) => <Icon className="w-16 h-16 md:w-13 md:h-13  xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 fill-black dark:fill-white" key={index} />)}

            </div>

        </div >

    );

}
