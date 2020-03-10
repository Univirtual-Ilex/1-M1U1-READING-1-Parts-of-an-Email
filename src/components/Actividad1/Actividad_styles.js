import styled, {css} from 'styled-components'
// eslint-disable-next-line
import Ilex from '../../App/variables'
// eslint-disable-next-line
import animations from './Actividad_animations'

const mistyles = css`
.listado-audio{
    div{
        margin-bottom:1em;
    }
}
.pos-relative{
    position: relative;
}

.fondo-correo-1{
    width:65em;
    max-width:100%;
    height:30em;
    padding:0 3em;
    position: relative;
    box-sizing: border-box;
    background-image:url(./src/SVG/bg-correo.svg);
    background-repeat: no-repeat;
    background-position: center center;
    font-size:1.1em;
    .mail-line{
        position:absolute;
        color: ${Ilex.color_grisMedio};
        display: inline-block;
    }
    .link{
        font-weight: bold;
        color: ${Ilex.violeta2};
        text-decoration: underline;
    }
    .colored{
        font-weight: bold;
        color: ${Ilex.violeta2};
    }
    .from{
        top: 4em;
        left: 6.5em;
    }
    .to{
        top: 6.2em;
        left: 5.2em;
    }
    .cc{
        top: 8.9em;
        left: 5.2em;
    }
    .subject{
        top: 11em;
        left:10.2em;
    }
    .message{
        top:14em;
        p{
        padding:0.25em 0;
        }
    }
}
.pestanaCheck{
    position: absolute;
    bottom:-1em;
}

`

export const DraggablesContainer = styled.div`
    width: 90%;
    margin: auto;
    padding: 0.4em 1em;
    text-align:center;
`

export const AreasContainer = styled(DraggablesContainer)`

    display:flex;
    justify-content:center;
    align-items: center ;
`

export const ProgressbarContainer = styled.div`
    width: 60%;
    margin:auto;
`

export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    right:0;
    position:absolute;
    right:1.6em;
    top:1em;

`

export default {mistyles , DraggablesContainer, AreasContainer, ProgressbarContainer}