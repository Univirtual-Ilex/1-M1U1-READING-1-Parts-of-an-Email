import { css } from 'styled-components'
import Ilex from '../../App/variables'
import {margin, padding } from '../Grid/Grid_styles'
// import Ilex from '../../App/variables'
const styles = css`
position: relative;
button{
    background: linear-gradient(90deg, #1B1E5A, #863FFD);
    box-shadow: 0 0.5em 0 0 ${Ilex.verde};
    color: #fff;
    padding: 0.615em 3em;
    border-radius:1em;
    transition: all 0.4s ease-out;
    cursor:pointer;
    &:hover{
        background-image: linear-gradient(90deg, ${Ilex.color_amarilloOscuro}, ${Ilex.rosa});
        box-shadow: 0 0.5em 0 0 ${Ilex.violeta}; 
    }
    img.img-play{
        width:0.78em;
        height:auto;
    }

}
`
export const buttonAudio2 = css`
.bocina{
    font-size: 1.8em
}
button{
    box-shadow: 0 0.5em 0 0 ${Ilex.dragItem};
    padding: ${props => padding(props)};
    margin : ${props => margin(props)};
}
button.running{
    box-shadow: 0 0.5em 0 0 ${Ilex.verde};
}


`

export const buttonAudio3 = css`

button{
    box-shadow: 0 0.4em 0 0 ${Ilex.dragItem};
    border-radius:0.5em;
    font-size: 1.1em;
    text-transform:uppercase;
    font-weight:bolder;
    font-family:${Ilex.titulos};
    padding: ${ (props) => ( padding(props) === '0em'? '0.5em 0.6em' : padding(props) )};
    background: transparent;
    background-color:${Ilex.violeta2};
    display:flex;
    align-items:center;
    &::before{
        content:'';
        display:inline-block;
        width: 1.3em;
        height:1.3em;
        background-image:url(./src/SVG/bocina.svg);
        background-size:contain;
        background-repeat: no-repeat;        
    }
}

button.running{
    box-shadow: 0 0.5em 0 0 ${Ilex.verde};
}

`
export const buttonAudio4 = css`
    button{
        background-color: #fff;
        color:#0096ff;
        display: block;
        width:100%;
        margin:0;
        box-shadow:none;
        &:hover{
        background-image: none;
        box-shadow: none; 
        }
        &::before{
            content:'';
            display:none;
        }
        &.running{
            color: ${Ilex.verde};
            box-shadow: none;
        }
    }
    

`


export default styles
    