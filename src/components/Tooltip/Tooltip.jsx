
//Import
import React from 'react'
import styled from 'styled-components'
import styles, {tooltip2, tooltip3} from './Tooltip_styles'
/**
 * 
 * noclose:Boolean = Define si está el botón de cerrar o no
 * closebtn: Function = emite un evento en el padre que cambia el estado de visibilidad del tooltip
 * pos:String = Posiciona el elemento con el valor de transform translate
 * w:String = Define el ancho del elemento en em si no está seteado automáticamente se setea en 100%
 * fz:Number = tamaño de la fuente, el valor automáticamente se calcula en em sobre el valor de la variable fontzise de variables.js
 * visible:Boolean = Define la visibilidad del tooltip
 * 
 */

// Componente Base tooltip Tipo2
const Tooltip3_base = ({visible, closebtn, fz, w, pos, noclose, ttmessage,x,y,maxwidth, ...props}) => {

    return (
        <div {...props}>   
            {props.children}
            <span className={"tt " + visible}>{ttmessage}</span>            
        </div>
    )
}

// Componente base
const Tooltip_base = ({visible, closebtn, fz, w, pos, noclose, ...props}) => {
    return (
        <div {...props}>
            { props.children }
            <button className='btn-clean btn-close' onClick={closebtn} >
                <img src="./src/btn-cerrar.svg" alt="Cerrar tooltip" className={noclose ? 'hide': 'visible'} />
            </button>
        </div>
    )
}
const Tooltip = styled(Tooltip_base)`${ styles }`
export const Tooltip2 = styled(Tooltip)`${ tooltip2 }`
export const Tooltip3 = styled(Tooltip3_base)`${ tooltip3 }`

export default Tooltip
