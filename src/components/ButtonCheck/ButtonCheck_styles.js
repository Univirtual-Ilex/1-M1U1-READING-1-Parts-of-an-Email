import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
display: block;
position: relative;
button{
    font-family:${Ilex.titulos};
    font-size:1.2em;
    color:${Ilex.violeta2};
    text-transform:uppercase;
    font-weight:bold;
    position: absolute;
    top:-1.3em;
    right:0;
    cursor:pointer;

    a{
        text-decoration:none;
        display: block;
        padding:0.8em 3em ;
        border-radius: 0 0 2em 2em;
        background-color: #fff;
        box-shadow: 0 0.5em 0.5em 0 rgba(0,0,0,0.1);
        &:active,&:link{
            color:#fff;
        }
        &:hover{
        background-color: ${Ilex.violeta2};
        color:#fff;
        border:2px solid #fff;
        }
    }
}

`

export default styles
    