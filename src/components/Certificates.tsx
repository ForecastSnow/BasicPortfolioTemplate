import { CertificatesCard } from "./certificatesComponents/CertificatesCard";


const certificatesData = [

    {
        imgURI: "./img/certificates/certificate.jpg",
        title: "JavaScript",
        subtitle: "Certificado en JavaScript, la lógica del navegador.",

    },
    {
        imgURI: "./img/certificates/certificate.jpg",
        title: "Desarrollo Web",
        subtitle: "HTML y CSS: Fundamentos para Desarrollo Web Estático",

    },
    {
        imgURI: "./img/certificates/certificate.jpg",
        title: "React Js",
        subtitle: "Desarrollo con React y contenido dinámico con APIs",

    },
    

]

export function Certificates() {

    return (

        <>
            <section id="certificate" className="bg-indigo-200 dark:bg-blue-main flex flex-col items-center justify-center w-full pb-8">

                <div className="w-[20.5rem] border-t border-slate-700 dark:border-white md:w-2xl xl:w-6xl 2xl:w-7xl" >

                    <h3 className="my-12 text-2xl font-semibold text-red-700 dark:text-yellow-text text-center xl:text-left">Certificaciones</h3>

                    <div className="grid grid-cols-1 grid-rows-7 xl:grid-cols-2 xl:grid-rows-2 gap-10">
                        {
                            certificatesData.map((item, index) => <CertificatesCard key={index} {...item} />)
                        }
                    </div>

                </div >

            </section>

        </>
    )

}