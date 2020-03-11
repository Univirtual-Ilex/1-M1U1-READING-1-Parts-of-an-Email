import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    display:inline-block;
    position:absolute;
    background-color: ${Ilex.dragItem};
    width:10em;
    height:2em;
    box-shadow:3px 2px 3px 0 rgba(0,0,0,0.1);
    ${ props => props.x || props.y ? `transform:translate(${ props.x || 0}em,${ props.y || 0}em)` : ``};
    &::before{
        content:"";
        position:absolute;
        width:1em;
        height:1em;
        background-color:${Ilex.dragItem};
        left:-.3em;
        top:0.50em;
        transform:rotate(45deg);
        
    }
`

export const areaDrop2styles = css`

&.areaDroppable{
        display: inline-block;
        position: absolute;
        /*background-color: green;*/
        height:2em;
        width:25em;
        top:-0.35em;
        left: 4em;
        &.areaMessage{
            left: 0;
            top:1.75em;
            width:33em;
            height:4em;
            /*background-color: pink;*/
        }
        &.areaMessageline{
            left: 0;
            top:-.5em;
            /*background-color: red;*/
        }
        &.areaMessageline2{
            left: 0;
            top: 6em;
            /*background-color: blue;*/
        }
        &.areaMessageline3{
            left: 0;
            top:8.2em;
            /*background-color: red;*/
        }
    }

`

export default styles
    