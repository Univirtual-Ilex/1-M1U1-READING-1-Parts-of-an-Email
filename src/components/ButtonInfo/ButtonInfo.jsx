
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonInfo_styles'

/**
 * 
 * imgUrl:String recibe la ruta de la imagen de ícono, se recomienda un elemento cuadrado
 * bgColor:String recibe un valor rgb||rgba||hex ... de color
 * 
 */


// Componente base
const ButtonInfo_base = ({ children, imgUrl, bgColor, p, pl, pt, pr, pb, px, py , ...props}) => {
    return (
        <div {...props}>
            <button className="btn-clean">
                <span className= { !imgUrl ? 'hide' : 'elem-visible'}>
                    <img src={imgUrl || 'src/svg/camara.svg'} alt="Ver texto de apyo"/>
                </span>
                <span>
                { children || 'Open'}
                </span>                
            </button>

        </div>
    )
}
const ButtonInfo = styled(ButtonInfo_base)`${ styles }`

export default ButtonInfo
