
//Import
import React from 'react'
import styled from 'styled-components'
import styles,{ areaDrop2styles } from './AreaDrop_styles'

// Componente base
const AreaDrop_base = React.forwardRef(({title, id, ...props}, ref) => {
    return (
        <div {...props} id={id} ref={ref}>
            <h3>{title}</h3>
            <div>
                {props.children}
            </div>
        </div>
    )
})
const AreaDrop = styled(AreaDrop_base)`${ styles }`
export const AreaDrop2 = styled(AreaDrop_base)`${ areaDrop2styles }`
export default AreaDrop
