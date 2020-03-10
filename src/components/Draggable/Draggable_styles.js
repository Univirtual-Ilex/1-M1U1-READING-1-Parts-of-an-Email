import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    background-color: #fff;
    border: 1px dashed ${Ilex.dragItem};
    color: ${Ilex.color_grisMedio};
    display: inline-block;
    padding: 0.6em 0.6em;
    border-radius: 0.8em;
    box-shadow: 0 0.25em 0 0.1em ${Ilex.dragItem};
    max-width:18em;
    vertical-align:middle;
    cursor: move;
    font-size:0.65em;
    margin:0.5em 0.5em;
    position:relative;
`
export default styles
