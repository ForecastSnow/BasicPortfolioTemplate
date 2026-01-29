import { useEffect, useRef, type SVGProps } from "react";
import GithubSVG from "../../assets/icons/various/github.svg?react"

type ProjectCard = {

    typeCard: string;
    subtitle: string;
    description: string;
    githubLink: string;
    deploymentLink?: string;
    icons: React.ComponentType<SVGProps<SVGSVGElement>>[];
    videoUrl?: string;
    staticUrl?: string;

}


export function ProjectCard({ typeCard, subtitle, description, githubLink, deploymentLink, icons, videoUrl, staticUrl }: ProjectCard) {

    const videoRef = useRef<HTMLVideoElement>(null);

    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {

        if (videoRef.current) {

            const playPromise = videoRef.current.play();

            if (playPromise !== undefined) {

                playPromise.catch((error) => {
                    console.log("Autoplay Error", error);
                });
            }
        }
    };

    const handleMouseLeave = () => {

        if (videoRef.current) {

            videoRef.current.pause();

            videoRef.current.currentTime = 0;

        }

    };

    useEffect(() => {

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.8
        };

        const handlePlay = () => {
            if (videoRef.current) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch((error) => {
                        console.log("Autoplay Error", error);
                    });
                }
            }
        };

        const handlePause = () => {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        };

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;

            const isMobile = window.matchMedia("(pointer: coarse)").matches;

            if (isMobile) {
                if (entry.isIntersecting) {
                    handlePlay();
                } else {
                    handlePause();
                }
            }
        }, options);

        if (cardRef.current) observer.observe(cardRef.current);

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    return (

        <>

            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={cardRef} className="flex flex-col-reverse justify-between items-center mx-auto w-[20.5rem] border-t border-slate-700 dark:border-gray-500 transform transition-transform duration-200 hover:scale-102 group  md:w-2xl xl:w-6xl xl:flex-row xl:h-[22.5rem] 2xl:w-7xl">

                <div className="flex-col items-end xl:h-[17.5rem] mb-8 xl:mb-3">

                    <p className="text-blue-500 dark:text-blue-400 text-sm mt-1 md:text-2xl md:mt-2 xl:text-xl xl:mt-0">{typeCard}</p>

                    <h4 className="text-slate-900 dark:text-white text-xl md:text-3xl md:mt-2 md:mb-2">{subtitle}</h4>

                    <p className="text-slate-900 dark:text-white h-auto mb-3 text-sm line md:text-base xl:h-[6.25rem] xl:w-[43rem] xl:mb-2">{description}</p>

                    <div className="flex flex-row ">

                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[6.25rem]  px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-950 hover:from-fuchsia-800 hover:to-fuchsia-950 transform scale-100 hover:scale-102 transition-all duration-300 will-change-transform">

                            Código<GithubSVG className="mt-[3px] ml-[7px] w-[14px] min-w-[14px] min-h-[14px] h-[14px] fill-white" />

                        </a>

                        {deploymentLink ?
                            (

                                <a href={deploymentLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[6.25rem] px-4 py-2 ml-5 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-950 hover:from-fuchsia-800 hover:to-fuchsia-950 transform scale-100 hover:scale-102 transition-all duration-300 will-change-transform">
                                    Deployment
                                </a>

                            )
                            :
                            null
                        }

                    </div>

                    <div className="flex flex-row mt-4">

                        {
                            icons.map((Icon, index) => <Icon className="mr-2 w-[1.7rem] h-[1.7rem] md:w-[3rem] md:h-[3rem] fill-black dark:fill-white" key={index} />)
                        }

                    </div>

                </div>

                {staticUrl ?
                    (
                        <div className="rounded-xl overflow-hidden bg-black mt-7 md:w-2xl xl:h-[17.5rem] xl:mt-2 xl:w-[27.5rem]">

                            {videoUrl ?

                                (<video ref={videoRef} src={videoUrl} poster={staticUrl} className="w-full h-full object-cover" muted loop playsInline />)
                                :
                                (<img className="w-full h-full object-cover" src={staticUrl} alt="Project preview" />)

                            }

                        </div>
                    )
                    :
                    null}

            </div>


        </>

    )


}