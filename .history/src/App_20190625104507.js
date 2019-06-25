import React, { useState } from 'react';
import Buscador from './components/Buscador';

function App() {

  const [busqueda, guardarBusqueda] = useState('');

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
