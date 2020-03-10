import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
position: absolute;
z-index:500;
top: 0;
left: 0;
right:0;
font-size:${props => props.fz || 0.7 }em;
text-align:center;
color:${Ilex.textos};
background-color: #fff;
padding:2em 1em 2.8em 1em;
border-radius:1.5em;
box-shadow:0 0 1em 0 rgba(0,0,0,0.2);
display:${props => props.visible ? 'block' : 'none'};
transform: translate(${ props => props.pos || '0'});
width:${props => props.w + 'em' || '100%' };
.btn-close{
    position: absolute;
    width:1.5em;
    height:1.5em;
    bottom:0.8em;
    right:1em;
        .hide{
            display:none;
        }
}

`
export const tooltip2 = css`
padding:0.5em 1em 0.5em 1em;
border-radius:0.5em;
font-size: 1em;
`

export const tooltip3 = css`
position: relative;
.tt{
    position:absolute;
    background-color:${Ilex.dragItem};
    display: inline-block;
    width:max-content;
    ${ props => props.maxwidth ? `max-width: ${props.maxwidth || '10'}em` : ``};
    padding: 0.5em;
    top:-0.5em;
    margin-left:1em;
    font-style:italic;
    font-weight:bold;
    font-size:0.8em;
    color:${Ilex.morado};
    ${ props => props.x || props.y ? `transform:translate(${ props.x || 0}em,${ props.y || 0}em)` : ``};    
    box-shadow:3px 2px 3px 0 rgba(0,0,0,0.1);
    &::before{
        content:"";
        position:absolute;
        width:1em;
        height:1em;
        background-color:${Ilex.dragItem};
        left:-.5em;
        top:0.67em;
        transform:rotate(45deg);
        
    }

}

`

export default styles
    