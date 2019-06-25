import React, { useState } from "react";

function Buscador() {
  const [terminoBusqueda, guardarTerminoBusqueda] = useState("");

  const buscarImagen = e => {
      e.preventDefault();

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
    </form>
  );
}

export default Buscador;
