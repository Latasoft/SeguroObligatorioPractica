import Link from 'next/link';

import seguroObligatorioBlanco from '/public/images/seguroobligatorio_blanco.png';
import instagramLogo from '/public/images/instagram.svg';
import facebookLogo from '/public/images/facebook.svg';
import phoneIcon from '/public/images/phone.svg';
import locationDotIcon from '/public/images/location-dot.svg';
import envelopeIcon from '/public/images/envelope.svg';

export function Footer() {
    return (
        <footer className="bg-[#1e1e1e] text-white w-full  ">
            <section className=" max-w-screen-lg mx-auto pt-6">
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 mb-6 text-center inline-block align-top">
                    <h3 className="">
                        <img className="inline-block w-44 " src={seguroObligatorioBlanco.src} alt="Seguro Obligatorio Blanco" />
                    </h3>
                    <p className="mt-3 text-md">© 2022 Seguro Obligatorio<br/>Creado por Seguro Obligatorio</p>
                    <p className=" mt-6 ">
                        <img className="inline-block w-6 h-6 mx-3 " src={facebookLogo.src} alt="" />
                        <img className="inline-block w-6 h-6 mx-3 " src={instagramLogo.src} alt="" />
                    </p>
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 mb-6 text-center inline-block align-top">
                    <h3 className="my-3 uppercase text-lg font-bold">Atención público</h3>
                    <p className="my-3">
                        Lunes a Viernes<br/>
                        8:30 hrs. a 14:00 hrs.   
                    </p>
                </div>{/*
                <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 my-6 text-center inline-block align-top">
                    <h3 className="my-3 uppercase text-lg font-bold">Datos de contacto</h3>
                    <address className="block my-3 text-md not-italic leading-loose ">
                        <Link href="mailto:contacto.obligatorio@gmail.com"><img className="inline-block w-4 mr-3" src={envelopeIcon} alt="Correo electrónico" />contacto.obligatorio@gmail.com</Link><br/>
                        <Link href="tel:+56322233491"><img className="inline-block w-4 mr-3" src={phoneIcon} alt="Telefono" />(32) 2233491</Link><br/>
                        <img className="inline-block w-4 mr-3" src={locationDotIcon} alt="Dirección" />Av. Colón 3192. Valparaíso
                    </address>
                </div> */}
            </section>
            <section className=" mx-auto border-t-2 border-solid border-white border-opacity-10">
                <p className=" text-center w-full p-4 text-white text-opacity-70">© 2024 Seguros online. All rights reserved</p>
            </section>
        </footer>
    );
};
