import React from 'react'
import {useParams} from 'react-router-dom'
const Inicio = () => {
    const {nombre, edad, apellido} = useParams()
    return (
        <div>
            <h1>pagina de inicio</h1>
            <p>{nombre}</p>
            <p>{edad}</p>
            <p>{apellido}</p>
        </div>
    )
}
export default Inicio;
