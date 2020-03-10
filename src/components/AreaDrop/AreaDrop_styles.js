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

export default styles
    