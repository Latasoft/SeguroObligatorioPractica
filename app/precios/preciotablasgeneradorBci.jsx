import React from 'react';
import Link from 'next/link';

const PreciotablasgeneradorBci = ({ precioTablasBci }) => {
  return (
    <>
      {precioTablasBci.map((tabla, index) => (
        <div key={index} className=" my-20 mx-6">
          <h3 data-aos-once="true" data-aos="flip-down" className="bg-sky-600 text-white text-center text-xl sm:text-xl md:text-2xl lg:text-2xl py-3 sm:py-3 md:py-4 lg:py-6 mb-6 font-bold uppercase rounded-se-full rounded-es-full ">{tabla.mes}</h3>
          <div className={` mx-auto  ${(tabla.seguros.length > 1) ? ' flex flex-col md:flex-row ': 'flex flex-col' } gap-10 justify-center items-center `}>
            {tabla.seguros.map((seguro, seguroIndex) => (
              <div data-aos-once="true" data-aos="fade-up" key={seguroIndex} className={` flex flex-col h-full w-full max-w-96 mx-0 border-solid border-2 border-neutral-100 rounded-md py-6 shadow-lg shadow-neutral-500 `}>
                <h4 className=" w-full aspect-h-1 aspect-w-4"><img className="mx-auto w-auto h-4/5 object-center" src={seguro.nombre} alt="preciosBCISeguros" /></h4>
                <dl className=" w-full grid grid-cols-4 px-4 py-6 lg:px-6">
                  <dt className="inline-block col-span-3 py-2 text-[#E27905] font-extrabold text-left text-lg">Tipo de vehículos</dt>
                  <dt className="inline-block col-span-1 py-2 text-[#E27905] font-extrabold text-left text-lg">Precio</dt>
                  {seguro.precios.map((precio, precioIndex) => (
                    <React.Fragment key={precioIndex}>
                      <dt className="inline-block col-span-3 py-2 pr-2 text-gray-600 text-left text-base tracking-tight border-t-2 border-dotted border-black border-opacity-10">{precio.vehiculoTipo}</dt>
                      <dd className="inline-block col-span-1 py-2      text-gray-600 text-left text-base tracking-tight border-t-2 border-dotted border-black border-opacity-10">$ {precio.precio}</dd>
                    </React.Fragment>
                  ))}
                </dl>
                <p className="flex flex-grow w-full items-end justify-center"><Link className=" inline-block px-4 py-2 bg-transparent hover:bg-sky-600 font-bold uppercase border-2 border-solid text-sky-600 rounded-lg hover:text-white border-sky-600 transition-all ease-linear duration-200" href={seguro.compra} alt="">Comprar</Link></p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PreciotablasgeneradorBci;
