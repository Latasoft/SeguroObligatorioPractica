'use client';

import { useEffect, useState } from 'react';
import Preciotablasgenerador from './preciotablasgenerador';
import PreciotablasgeneradorBci from './preciotablasgeneradorBci';

import precioTablasData from '../../data/precioTablas.json';
import precioTablasBciData from '../../data/precioTablasBci.json';

export default function PreciosClientFetcher() {
  const [precioTablas, setPrecioTablas] = useState(null);
  const [precioTablasBci, setPrecioTablasBci] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setPrecioTablas(precioTablasData);
      setPrecioTablasBci(precioTablasBciData);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  if (!precioTablas || !precioTablasBci) {
    return (
      <p className="text-center text-gray-400 py-10">
        Cargando precios...
      </p>
    );
  }

  return (
    <>
      <Preciotablasgenerador precioTablas={precioTablas} />
      <PreciotablasgeneradorBci precioTablasBci={precioTablasBci} />
    </>
  );
}
