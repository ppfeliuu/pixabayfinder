import React from 'react';
import Imagen from './Imagen';

function ListadoImagenes({imagenes}) {

    return(
        <div className="col-12 p-5 row">
            {imagenes.map(imagen => (
                <Imagen
                    imagen={imagen}
                />
            ))}
        </div>
    )
}

export default ListadoImagenes;