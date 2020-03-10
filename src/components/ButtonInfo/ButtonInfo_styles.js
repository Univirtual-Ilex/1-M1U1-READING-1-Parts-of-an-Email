import { css } from 'styled-components'
import Ilex from '../../App/variables'
import {padding} from '../Grid/Grid_styles'
const styles = css`
display: inline-block;
button{
    background-color: ${ props => props.bgColor || Ilex.violeta2};
    display: flex;
    align-items: center;
    font-family: ${Ilex.titulos};
    font-weight: bold;
    font-size: 1.1em;
    padding: ${ (props) => ( padding(props) === '0em'? '0.3em 0.6em' : padding(props) )};
    border-radius:0.6em;
    box-shadow: 0 0.3em 0 0 rgba(0,0,0,0.2);
    max-width: 19em;
    margin: 0.4em;
    cursor: pointer;
    transition: background  0.3s ease-in-out;
    &:hover{
        background-color: ${Ilex.morado}
    }
    span {
        color: #fff;
        display: inline-block;
        &:first-child{
        margin-right: 0.3em;
        }
        text-align: center;
        &.hide {
            display: none;
            margin-right: 0em;
        }
        img{
            width: 1.3em;
            height: 1.3em;
        }
    }
}
`

export default styles
    