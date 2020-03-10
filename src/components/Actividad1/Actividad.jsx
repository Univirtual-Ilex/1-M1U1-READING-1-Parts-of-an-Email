import React from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'
import {Tooltip3} from '../Tooltip'



// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
import {IRow, ICol} from '../Grid'


const Actividad_base = ({staticContext, ...props}) => {


 
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={43} w={80}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Drag the mouse over the boxes to read the definition of each part' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>

            <ICol mt={5}>
                <MainTitle color={Ilex.violeta2}>
                CLICK ON EACH PART OF THE EMAIL TO SEE ITS DEFINITION
                </MainTitle>
            </ICol>

            <IRow justify="center" align="center" w={85}>
                <div className="fondo-correo-1">
                    <Tooltip3  ttmessage="senders’s mail address" className="mail-line from link">filipeos@utp.edu,co</Tooltip3>
                    <Tooltip3  ttmessage="recipient’s mail address" className="mail-line to link">Zach Siegel</Tooltip3>
                    <Tooltip3  ttmessage="Use CC to copy your message to someone else" className="mail-line cc link">Richard Irvan</Tooltip3>
                    <Tooltip3  ttmessage="Mention the reason(s) why you send the email" className="mail-line subject colored">Question about ancient Greece</Tooltip3>
                    <div  ttmessage="m2" className="mail-line message">
                        <Tooltip3 ttmessage="GREETING: Always required All words start with capitals,use a comma at the end">Dear Mr. Siegel,</Tooltip3>
                        <Tooltip3 ttmessage="BODY: Description of  what you want to say" x={-30} y={2}>I wanted to write you to let you know that i’m really enjoying the history mentioned we’ve been studying, especially Greek myths, I do have one question thought - Do greek people still believe in Zeus today? Thanks for your help with this.</Tooltip3>
                        <br />
                        <Tooltip3 maxwidth={30} x={10} y={1} ttmessage="CLOSING: Always required, A sentence giving thanks, wishing 
good luck, etc. Then write your name on the line below">
                            <p>Best,</p>
                            <p>Felipe Sarmiento   </p>
                        </Tooltip3>
                        <Tooltip3 ttmessage="ATTACHED:
Any files you want to send " x={56} y={8} maxwidth={10} className="mail-line from ">
                        </Tooltip3>

                    </div>
                </div>
            </IRow>

            <ICol mt={7.5} className="pestanaCheck">
                <ButtonCheck link={'/actividad2'} className="next" text={'Next'}></ButtonCheck>
            </ICol>
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad