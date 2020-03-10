import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`

    color: ${Ilex.color_grisMedio};
    .bloque-columnas{
        column-count:4;
        column-gap: 3.5em;
        orphans:0;
        widows: 0;
        
        li{
            margin: 0.5em 0.5em;


            &:first-child{
                margin: 0em 0;
            }
        }
    }
    .lista-preguntas {
        display:flex;
        flex-direction: column;
        align-items:stretch;
        align-content:space-between;
        flex-wrap:wrap;
        height:25.4em;
        li{
            margin: 0.5em 0.5em;
            width: 10em ;
        }
    }
    .contenedor-txt{
        background-color: #f1f1f1;
        min-height: 30em;
        border-radius: 0.5em;
        padding: 1em;
        font-weight: lighter;
        text-align: justify;
        .sub-contenedor-img{
            img {
                max-width :100%;
                width: 100%;
            }
        }
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
        top: 4.3em;
    }
    .to{
        top: 6.55em;
    }
    .cc{
        top: 8.9em;
    }
    .subject{
        top: 11.3em;
    }
    .message{
        top:14em;
        max-width:85%;
        p{
        padding:0.25em 0;
        }
    }
    }
    .DraggableContainer{
        margin-left:5em;
        position:relative;
        top:2em;
    }

    .pestanaCheck{
    position: absolute;
    bottom:-1em;
}

`

export default styles
    