'use client'; // Marca este archivo como un componente del lado del cliente

import React from 'react';

const ImageScroll = () => {
    const handleImageClick = () => {
        // Usamos scrollIntoView para hacer un deslizamiento hacia la sección
        const section = document.getElementById('targetSection');
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <p className="text-center">
            <img
                className="mx-auto w-24 mt-12 hover:translate-y-4 hover:transition-all hover:duration-300 translate-y-0 transition-all duration-300"
                src="/images/preciosIcon.svg" // Asegúrate de que la ruta es correcta
                alt="Precios Icon"
                onClick={handleImageClick} // Evento onClick para hacer el scroll
            />
        </p>
    );
};

export default ImageScroll;