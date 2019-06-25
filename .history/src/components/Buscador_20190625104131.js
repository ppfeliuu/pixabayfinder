import React, { useState } from "react";
import Error from './Error';

function Buscador() {
  const [terminoBusqueda, guardarTerminoBusqueda] = useState("");
  const [error, guardarError] = useState(false);

  const buscarImagen = e => {
      e.preventDefault();

      if(terminoBusqueda === '') {
          guardarError(true);
          return;
      }

      guardarError(false);


  }

  return (
    <form
        onSubmit={buscarImagen}
    >
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search by image name, sports, café or any"
            onChange={e => guardarTerminoBusqueda(e.target.value)}
          />
        </div>

        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Search"
          />
        </div>
      </div>
      {componente}
    </form>
  );
}

export default Buscador;
