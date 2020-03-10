
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './AreaCircle_styles'

// Componente base
const AreaCircle_base = React.forwardRef(({id, ...props}, ref) => {
    return (
        <div {...props}>
            <div className="innerCircle" id={id} ref={ref}>
                { props.children }
            </div>
        </div>
    )
})
const AreaCircle = styled(AreaCircle_base)`${ styles }`
export default AreaCircle
