import React, { useState } from 'react';

function Buscador() {

    const [terminoBusqueda, guardarTerminoBusqueda] = useState('');

    return (
        <form>
            <div className="form-group col-md-6">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search by image name, sports, café or any"
                    />
            </div>

            <div className="form-group col-md-5">
                <input
                    type="submit"
                    className="btn btn-lg btn-danger btn-block"
                    value="Search"                    
                    />
            </div>

        </form>
    );
}

export default Buscador;