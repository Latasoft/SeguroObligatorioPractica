
import Link from 'next/link';

import socios from '/public/images/socios.jpg';
import aliansabciseguros from '/public/images/aliansabciseguros.jpg';
import aliansahdiseguros from '/public/images/aliansahdiseguros.png';
import aliansamutualdesegurosdechile from '/public/images/aliansamutualdesegurosdechile.png';

import NuevoImagenesDeslizador from './NuevoImagenesDeslizador';

export const metadata = {
    title: 'Socios'
}

export default function quienessomos() {
    return (
        <main className="">

            <section className="mt-16 sm:mt-16 md:mt-16 lg:mt-24 bg-cover bg-center shadow-[rgba(0,0,0,0.6)] shadow-lg" style={{ backgroundImage: `url(${socios.src})` }}>
                <div className=" bg-black bg-opacity-30 w-full mx-auto py-48">
                    <h2 data-aos-once="true" data-aos="fade-down" className=" max-w-screen-lg mx-auto text-center text-white text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase font-Poppins">Socios</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className=" max-w-screen-lg block w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 h-0.5 bg-[#E27905] mt-12 sm:mt-12 md:mt-14 lg:mt-16 mx-auto py-0 border-none " />
                </div>
            </section>

            <section className=" max-w-screen-lg mx-auto w-full my-20 sm:my-20 md:my-24 lg:my-28 ">
                <h2 data-aos-once="true" data-aos="fade-down" className=" w-full mx-auto mb-6 text-3xl uppercase font-extrabold text-center">Nuestos Socios</h2>
                
                <div className="mx-auto max-w-3xl w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-4 md:gap-6 lg:gap-8 my-12">

                    <div className="  mt-32 flex justify-center sm:justify-center md:justify-end lg:justify-end">
                        <div data-aos-once="true" data-aos="fade-down" className=" relative h-full text-center border-solid border-2 border-neutral-100 rounded-lg max-w-96 py-8 shadow-lg shadow-neutral-500">
                            <p data-aos-once="true" data-aos="flip-right" className="-mt-32"><img className="mx-auto" src={aliansamutualdesegurosdechile.src} alt=""/></p>
                            <h3 className=" font-bold text-lg sm:text-lg md:text-xl lg:text-xl px-6 uppercase font-Poppins  m-3 sm:m-3 md:m-6 lg:m-6">Mutual de Seguros</h3>
                            <p className="text-justify indent-5 hyphens-auto  font-normal text-sm sm:text-md md:text-lg lg:text-lg px-4 sm:px-4 md:px-6 lg:px-8">
                                Somos una Corporación de derecho privado, sin fines de lucro, que desde 1919 mantiene un lugar destacado en la industria aseguradora de vida en el país.</p>
                            <p className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                                <Link className="shadow-md shadow-neutral-500 text-sm font-semibold inline-block mx-auto uppercase text-white bg-sky-700 hover:bg-sky-600 px-6 py-3 rounded-md transition-all ease-in-out duration-700" href=" https://core.mutualdeseguros.cl/soap_ms/pago.php?tipodeventa=10" >Compra aquí</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <section className=" max-w-screen-lg mx-auto my-24 sm:my-24 md:my-24 lg:my-28 ">
                <NuevoImagenesDeslizador/>
                <div className=" w-11/12 sm:w-11/12 md:w-2/3 lg:w-2/3 bg-[#F68F2A] pt-20 sm:pt-20 pb-12 sm:pb-12 md:py-12 lg:py-12 mx-auto sm:mx-auto md:mx-8 lg:mx-8">
                    <div data-aos-once="true" data-aos="fade-down" className=" mx-6 sm:mx-6 md:ml-6 lg:ml-6 text-white ">
                        <h2 className="  mb-4 text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase font-extrabold">¿Sabía que…</h2>
                        <p className=" mb-4 text-lg sm:text-lg md:text-lg lg:text-xl leading-normal text-justify indent-5 hyphens-auto ">En el año 2021, según autoridades ha habido un incremento sustancial en accidentes automovilísticos.</p>
                        <p className=" mb-4 text-lg sm:text-lg md:text-lg lg:text-xl leading-normal text-justify indent-5 hyphens-auto ">Según el balance 2021 de Carabineros, hubo 79.520 incidentes viales a lo largo del país que provocaron la muerte de 1687 personas, el peor registro de decesos en 13 años.</p>
                        <p className=" text-lg sm:text-lg md:text-lg lg:text-xl leading-normal text-justify indent-5 hyphens-auto ">Fuente: <Link className="underline" href="https://www.emol.com/noticias/Nacional/2022/01/09/1043189/aumento-accidentes-viales-chile-2021.html"><strong>emol.com | <em>Aumento en accidentes viales en 2021 preocupa a las autoridades ¿Cuáles son sus posibles causas y soluciones?</em></strong></Link></p>
                    </div>
                </div>
            </section>

        </main>
    );
}


