import { css } from 'styled-components'
import Ilex from '../../App/variables'

const area = 3.5

const styles = css`
border:0.5em solid ${Ilex.violeta2};
text-align:center;
margin:0.5em auto;
width: ${area}em;
height: ${area}em;
border-radius:50%;
display: flex;
align-items:center;
justify-content:center;
.innerCircle {
    background-color:${Ilex.morado};
    border-radius:50%;
    width:${area/1.8}em;
    height:${area/1.8}em;
    display: flex;
    align-items:center;
    justify-content:center;
    color: #fff;
    font-weight:bold;
}
`

export default styles
    