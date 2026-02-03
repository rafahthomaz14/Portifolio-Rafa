import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaDatabase, FaCode, FaFire,SiExpo } from "react-icons/fa"
import { motion } from "framer-motion";

export default function Tecnologias() {
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800 transition">
                <FaReact className="text-cyan-400 text-4xl" />
                <span className="text-gray-100 font-medium">React</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800 transition">
                <FaJs className="text-yellow-400 text-4xl" />
                <span className="text-gray-100 font-medium">JavaScript</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800 transition">
                <FaCode className="text-purple-500 text-4xl" />
                <span className="text-gray-100 font-medium">C#</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800 transition">
                <FaCode className="text-purple-400 text-4xl" />
                <span className="text-gray-100 font-medium">.NET</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800 transition">
                <FaHtml5 className="text-orange-500 text-4xl" />
                <span className="text-gray-100 font-medium">HTML5</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800 transition">
                <FaCss3Alt className="text-blue-500 text-4xl" />
                <span className="text-gray-100 font-medium">CSS3</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800 transition">
                <FaCss3Alt className="text-cyan-500 text-4xl" />
                <span className="text-gray-100 font-medium">Tailwind CSS</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800 transition">
                <FaBootstrap className="text-indigo-500 text-4xl" />
                <span className="text-gray-100 font-medium">Bootstrap</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800 transition">
                <FaDatabase className="text-sky-400 text-4xl" />
                <span className="text-gray-100 font-medium">SQL</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800 transition">
                <FaFire className="text-orange-400 text-4xl" />
                <span className="text-gray-100 font-medium">Firebase</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800 transition"
            >
                <FaReact className="text-cyan-400 text-4xl" />
                <span className="text-gray-100 font-medium">React Native</span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
                className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800 transition"
            >
                <SiExpo className="text-white text-4xl" />
                <span className="text-gray-100 font-medium">Expo</span>
            </motion.div>

        </div>
    )
}