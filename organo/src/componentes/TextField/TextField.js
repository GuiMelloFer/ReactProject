//import { useState } from 'react'
import './TextField.css'

export const TextField = (props) => {

    //concatenação de strings 
   const placeholderModificada = `${props.placeholder}....`

   const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
}

    return (
        <div className="campo-texto">
             <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}
