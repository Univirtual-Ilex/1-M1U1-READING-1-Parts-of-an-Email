import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`

       
.contenedorButton{
    text-align:right;
    padding-right:3em;
}

li{
    margin:0.5em 0;
}

.baseWord {
    color: ${Ilex.color_gris};
    text-align: center;
    font-size: 1.1em;
    padding: 0.6em 0;
}

.wordsContainer {
    text-align: center
}

.fondo-correo-2{
    width:65em;
    max-width:100%;
    height:30em;
    padding:0 3em;
    top:-1em;
    position: relative;
    box-sizing: border-box;
    background-image:url(./src/SVG/bg-correo2.svg);
    background-repeat: no-repeat;
    background-position: center center;
    font-size:1.1em;
    .mail-line{
        color:${Ilex.grisOscuro};
        position:absolute;
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
        top: 5.7em;
    }
    .to{
        top: 7.95em;
    }
    .cc{
        top: 10em;
    }
    .subject{
        top: 12em;
    }
    .message{
        top:14em;
        max-width:85%;
        p{
        padding:0.25em 0;
        }
    }
    .bold{
        font-weight:bolder;
    }
    }

    .estilos-correo{
        height:30em;
        padding:0 0em;
        top:3em;
        position: relative;
        box-sizing: border-box;
        font-size:.9em;
    .mail-line{
        color:${Ilex.color_grisMedio};
        display: inline-block;
        margin:0.5em 0;
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
    }

`
export const Olist = styled.ol`
    color:${Ilex.textos};
    text-align:center;
    list-style:none;
    counter-reset:contador;

`

export const Item = styled.li`
    font-weight:normal;
    counter-increment:contador;
    padding:0;
    margin:0.2em 0;
    &::before{
        content:counter(contador)')';
        font-weight:bold;
        margin-right:0.75em;
    }
`


export default styles
    