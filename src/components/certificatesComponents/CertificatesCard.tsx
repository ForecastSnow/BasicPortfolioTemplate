import { useState } from "react";

type CertificatesCard = {

    imgURI: string;
    title: string;
    subtitle: string;

}


export function CertificatesCard({ imgURI, title, subtitle }: CertificatesCard) {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="md:h-[9.375rem] bg-gradient-to-bl from-blue-300 dark:from-violeta-custom to-violet-200 dark:to-blue-second flex flex-col-reverse justify-end md:flex-row md:justify-between rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-black/20 dark:border-white/20">

            <div className="mb-4 mx-4 xl:m-4 md:w-[23.25rem]">

                <h4 className="text-slate-950 dark:text-white text-2xl md:text-4xl">{title}</h4>

                <p className="text-slate-950 dark:text-white text-sm mt-2.5">{subtitle}</p>

            </div>

            <img src={imgURI} alt={title} onClick={() => setIsOpen(true)} className="cursor-zoom-in w-[18.375rem] h-[11.909rem] md:w-[11.375rem] md:h-[7.375rem] m-4 rounded shadow-md hover:scale-105 transition-transform duration-200" />

            {isOpen &&
            
                (

                    <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">

                        <img src={imgURI} alt={title} onClick={(e) => e.stopPropagation()} className="max-w-[80%] max-h-[80%] rounded shadow-2xl cursor-zoom-out transition-transform duration-300 hover:scale-105" />

                    </div>

                )
            }

        </div>

    )

}