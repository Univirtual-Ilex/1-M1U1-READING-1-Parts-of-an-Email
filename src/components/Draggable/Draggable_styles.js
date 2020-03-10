import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    background-color: ${Ilex.dragItem};
    color: ${Ilex.grisOscuro};
    display: block;
    width:max-content;
    padding: 0.4em 0.5em;
    cursor: move;
    border-radius:0.2em;
    font-weight:bolder;
    font-family:${Ilex.titulos};
    font-size:1.2em;
    text-transform:uppercase;
    margin:0.5em 0.5em;
    position:relative;

`
export default styles
