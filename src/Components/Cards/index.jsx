import { motion } from "framer-motion";


export default function Cards() {
    const projetos = [
          {
            Imagem: "desk2.png",
            Titulo: "Consulta de Situação Cadastral",
            Descricao: "Verificação para decisão rápida de abertura de cadastro",
            Tecnologias: "React JS | Tailwind | API",
            Link: "https://github.com/rafahthomaz14/Consulta_CNPJ"
        },
        {
            Imagem: "mre.jpeg",
            Titulo: "Mre Soluções",
            Descricao: "Landing Page personalizada.",
            Tecnologias: "TypeScript | JavaScript | CSS",
            Link: "https://github.com/rafahthomaz14/MRE_Solucoes"
        },
        {
            Imagem: "vila.jpeg",
            Titulo: "Villa Pomar Hortifruti",
            Descricao: "Landing Page personalizada.",
            Tecnologias: "HTML | CSS | JavaScript",
            Link: "https://github.com/rafahthomaz14/Hortifruti"
        },
        {
            Imagem: "plantech.jpg",
            Titulo: "Plantech",
            Descricao: "Software de gerenciamento de fazendas urbanas.",
            Tecnologias: "C# | SQLite | JavaScript",
            Link: "https://github.com/rafahthomaz14/Projeto_Plantech"
        },
        {
            Imagem: "ecommerce.jpeg",
            Titulo: "E-commerce",
            Descricao: "Ecommerce simples com filtros e botao de compras",
            Tecnologias: "React JS | Tailwind | JavaScript",
            Link: "https://github.com/rafahthomaz14/E-commerce"
        },
        {
            Imagem: "orcamento.jpeg",
            Titulo: "App Orçamento",
            Descricao: "Front End do aplicativo de orçamento para freelancers",
            Tecnologias: "React Native | Nativewind | Expo",
            Link: "https://github.com/rafahthomaz14/App_orcamento"
        }
    ]
    return (
        <div className="max-w-[1366px] px-6 mx-auto">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                {projetos.map((projeto, index) => (

                    <motion.div
                        initial={{ opacity: 0, y: 120 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                        key={index} className="Mre relative group">
                        <img src={projeto.Imagem} className="w-full lg:h-30  " />
                        <h1 className="font-bold text-gray-50 mt-3">{projeto.Titulo}</h1>
                        <p className="font-extralight text-gray-200 mt-2 ">{projeto.Descricao}</p>
                        <p className="font-extralight text-gray-500 mb-2 ">{projeto.Tecnologias}</p>

                        <a
                            href={projeto.Link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-12 h-12 text-white hover:scale-110 transition-transform"
                            >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.623-5.48 5.92.43.372.814 1.102.814 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    </motion.div>

                ))}
            </section>
        </div>
    )
}
