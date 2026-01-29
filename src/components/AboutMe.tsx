
export function AboutMe() {


    return (
        <>
            <section id="aboutMe" className="bg-gradient-to-b pb-12 from-blue-200 dark:from-cyan-950 to-indigo-200 dark:to-blue-main flex flex-col items-center justify-center w-full ">

                <div className=" border-t border-slate-700 dark:border-white w-[20.5rem] md:w-2xl xl:w-6xl 2xl:w-7xl">

                    <h3 className="text-2xl my-12 text-center text-red-700 dark:text-yellow-text xl:text-left">Sobre Mi</h3>

                    <div className="flex flex-col-reverse md:gap-x-7 md:flex-row items-center justify-between">

                        <div className="flex flex-col justify-between h-[20.5rem] w-[full] xl:h-[28rem] xl:w-[43.75rem] text-slate-950 dark:text-white">

                            <p className="my-5 xl:my-0 text-sm md:my-0 xl:text-balance text-lg xl:text-2xl">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat voluptates eum aperiam porro quisquam in sunt sequi nostrum minima, illo amet corrupti at neque illum debitis voluptatum! Repellendus, ex omnis!
                            </p>

                            <p className="mb-5 md:mb-0 xl:mb-0 text-sm xl:text-balance xl:text-2xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos repellendus explicabo est cum. Officia ipsam officiis accusantium rem? Soluta iusto ab aliquam officiis cumque similique consequuntur atque sapiente vel?
                            </p>

                            <p className="text-sm xl:text-balance xl:text-2xl">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nihil voluptas, necessitatibus harum itaque odit veniam laudantium ducimus omnis at autem alias. Unde sint hic minima molestias qui tempora cum.
                            </p>

                        </div>

                        <img className="rounded-3xl md:rounded-4xl w-[20.5rem] xl:w-[28rem] transform transition-transform duration-200 hover:scale-102 aspect-square" src="./img/linusTorvalds.jpg" alt="linus Torvalds photo" /> {/* la foto debe ser 1:1 */}

                    </div>

                </div>

            </section>

        </>

    )

}