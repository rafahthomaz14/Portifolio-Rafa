export default function Cards() {
    return (
        <div className="max-w-[1366px] px-6 mx-auto">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                <div className="Mre">
                    <img src="mre.jpeg" className="w-full lg:h-30  "/>
                    <h1 className="font-bold text-gray-50 mt-3">Mre Soluções</h1>
                    <p className="font-extralight text-gray-200 mt-2">
                         Landing Page personalizada
                    </p>
                </div>

                 <div className="Vila">
                    <img src="vila.jpeg" className="w-full lg:h-30 "/>
                    <h1 className="font-bold text-gray-50 mt-3">Villa Pomar Hortifruti</h1>
                    <p className="font-extralight text-gray-200 mt-2">
                         Landing Page personalizada
                    </p>
                </div>

                
            </section>
        </div>
    )
}
