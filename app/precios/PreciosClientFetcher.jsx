'use client';

import { useEffect, useState } from 'react';
import Preciotablasgenerador from './preciotablasgenerador';

export default function PreciosClientFetcher() {
  const [precioTablas, setPrecioTablas] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/precios.json?v=${Date.now()}`, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(`Error al cargar precios: ${res.status}`);
        return res.json();
      })
      .then(setPrecioTablas)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!precioTablas) return <p className="text-center text-gray-400 py-10">Cargando precios...</p>;

  return <Preciotablasgenerador precioTablas={precioTablas} />;
}
