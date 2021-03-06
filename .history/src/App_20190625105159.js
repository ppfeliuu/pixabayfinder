import React, { useState, useEffect } from 'react';
import Buscador from './components/Buscador';

function App() {

  const [busqueda, guardarBusqueda] = useState('');

  useEffect(() => {

    const consultarAPI = async () => {
      const imagenesPorPagina = 30;
      const key = '12870273-c39a14222df9094c61ef8e3c8';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);

      console.log(respuesta);
    }

    consultarAPI();
  }, [busqueda])

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Images finder</p>
        <Buscador 
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      
      <div className="row justify-content-center">

      </div>
    </div>
  );
}

export default App;
