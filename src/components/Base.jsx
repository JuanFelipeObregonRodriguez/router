import React,{useState, useEffect} from 'react'

const Base = () => {
     const [nombre, setNombre] = useState('Juan')
    useEffect( ()=>{

      setTimeout(()=>{

              setNombre('Felipe')
      }, 3000)

    })
    return (
        <div>
            <h1>pagina de base ruta/</h1>
            {nombre}
        </div>
    )
}
export default Base;
