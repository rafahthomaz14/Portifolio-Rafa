import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaDatabase, FaCode, FaFire, FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa"
import Cards from "../../Components/Cards"
import Tecnologias from "../../Components/Tecnologias"
export default function Home() {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 lg:gap-10 w-full max-w-[1366px] px-6 mx-auto mt-25 mb-[40px]">

                <section className="relative bg-gray-50 rounded-lg pt-24">
                    <picture className="absolute -top-20 left-1/2 -translate-x-1/2">
                        <img
                            src="foto.jpeg"
                            className="w-40 h-40 rounded-full border-4 border-white object-cover"
                        />
                    </picture>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-bold text-2xl">Rafael Thomaz</h1>
                        <p className="font-light text-gray-500">Desenvolvedor Front End</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-6 px-6 mb-5">

                        <a
                            href="https://www.linkedin.com/in/rafael-thomaz-92559920a/"
                            target="_blank"
                            className="h-10 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-blue-600 hover:text-white transition"
                        >
                            <FaLinkedinIn size={22} />
                        </a>

                        <a
                            href="https://github.com/rafahthomaz14"
                            target="_blank"
                            className="h-10 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-900 hover:text-white transition"
                        >
                            <FaGithub size={22} />
                        </a>

                        <a
                            href="https://wa.me/5516993696126"
                            target="_blank"
                            className="h-10 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white transition"
                        >
                            <FaWhatsapp size={22} />
                        </a>

                        <a
                            href="mailto:rafael.thgomaz005@gmail.com"
                            className="h-10 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-red-500 hover:text-white transition"
                        >
                            <FaEnvelope size={22} />
                        </a>

                    </div>
                </section>

                <section className="bg-gray-50 rounded-lg lg:h-60 p-5">
                    <h1 className="font-bold text-2xl">Sobre</h1>
                    <p className="font-extralight mt-3 lg:text-[20px] text-[16px]">Sou formado em Análise e Desenvolvimento de Sistemas e técnico em Desenvolvimento de Sistemas, com foco em desenvolvimento Front-End. Possuo conhecimentos aplicados em projetos práticos ao longo da minha formação. Busco minha primeira oportunidade na área para aprender, crescer profissionalmente e contribuir com soluções digitais de qualidade.</p>
                </section>
            </div>

            <h1 className="font-bold text-2xl text-gray-50 w-full max-w-[1366px] mb-5 px-6 mx-auto flex items-center justify-center lg:justify-start ">Meus projetos</h1>
            <Cards />

            <section className="w-full max-w-[1366px] mx-auto px-6">
                <h1 className="font-bold mt-15 text-2xl text-gray-50 mb-8 flex items-center justify-center lg:justify-start">
                    Tecnologias e Linguagens
                </h1>

                <Tecnologias />

            </section>

        </>


    )
}
