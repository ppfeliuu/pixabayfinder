import React, { useState, useEffect } from 'react';
import Buscador from './components/Buscador';
import ListadoImagenes from './components/ListadoImagenes'

function App() {

  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {

    const consultarAPI = async () => {

      if (busqueda === '') return;

      const imagenesPorPagina = 30;
      const key = '12870273-c39a14222df9094c61ef8e3c8';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      // console.log(resultado);
      guardarImagenes(resultado.hits);
      const calcularPaginas = Math.ceil( resultado.totalHits / imagenesPorPagina );
      guardarTotalPaginas(calcularPaginas);
    }

    consultarAPI();
  }, [busqueda]);

  const paginaAnterior = () => {
    let nuevaPaginaAnterior = paginaActual - 1;
  }

  const paginaSiguiente = () => {

  }

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Images finder</p>
        <Buscador 
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      
      <div className="row justify-content-center">
        <ListadoImagenes 
          imagenes={imagenes}
        />

        <button onClick={paginaAnterior} type="button" className="btn btn-info mr-1">Back &laquo;</button>
        <button onClick={paginaSiguiente} type="button" className="btn btn-info mr-1">Next &raquo;</button>
      </div>
    </div>
  );
}

export default App;
