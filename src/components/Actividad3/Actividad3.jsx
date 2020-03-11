import React from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'

import {AreaDrop2} from '../AreaDrop'
import {DraggableItem2 }from '../Draggable'


// Styles
import styled from 'styled-components'
import styles from './Actividad3_styles'
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
import Ilex from '../../App/variables'
import {IRow, ICol} from '../Grid'


// Componente base
const Actividad3_base = ({staticContext, ...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={43} w={80}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='drag the information to the correct place in the email' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad3'} } />
            </UiButtonsContainer>

            <ICol mt={5}>
                <MainTitle color={Ilex.violeta2}>
                LOOK AT THE EMAIL AND DRAG THE INFORMATION TO THE CORRESPONDING PARTS OF THE E-MAIL
                </MainTitle>
            </ICol>

            <IRow justify="center" align="center" w={95}>
                <ICol w={60}>
                    <div className="fondo-correo-2">
                        <div className="mail-line from bold"> From  <AreaDrop2 className="areaDroppable areaFrom" id="from" /></div>
                        <div className="mail-line to bold">To <AreaDrop2 className="areaDroppable areaTo" id="to" /></div>
                        <div className="mail-line cc bold">CC <AreaDrop2 className="areaDroppable areaCc" id="cc" /></div>
                        <div className="mail-line subject bold">Subject Field <AreaDrop2 className="areaDroppable areaBold" id="subject" /></div>
                        <div className="mail-line message">
                            <AreaDrop2 className="areaDroppable areaMessageline" id="opening" />
                            <AreaDrop2 className="areaDroppable areaMessage"  id="message" />
                            <AreaDrop2 className="areaDroppable areaMessageline2"  id="closing" />
                            <AreaDrop2 className="areaDroppable areaMessageline3" id="footer" />
                        </div>
                    </div>

                </ICol>
                <ICol
                w={40}>
                    <div className="DraggableContainer estilos-correo">
                        <DraggableItem2><div className="mail-line" dropto="#message"> I am Karla Villegas, we met last Monday in the induction of our program, do you remember me? I received an e-mail from the university, it says I have to take a test next Friday and they sent me  a power point presentation with the information about it, but I do not understand what I have to do.</div></DraggableItem2>
                        <DraggableItem2> <div className="mail-line" dropto="#opening">Hey there José, how is everything?</div></DraggableItem2>
                        <DraggableItem2> <div className="mail-line colored link" dropto="#from">karla21@utp.edu.co</div></DraggableItem2>
                        <DraggableItem2> <div className="mail-line colored link" dropto="#to">jose.velez@utp.edu.co</div></DraggableItem2>
                        <DraggableItem2> <div className="mail-line" dropto="#footer">
                            Karla Villegas<br/>
                            BA student in Physics and Mathematics</div>
                        </DraggableItem2>
                        <DraggableItem2> <div className="mail-line colored" dropto="#subject">How to register for the OOP test?</div></DraggableItem2>
                        <DraggableItem2> <div className="mail-line colored link" dropto="#cc">filipeos@utp.edu.co</div></DraggableItem2>
                        <DraggableItem2> <div className="mail-line" dropto="#closing">Can you please help me?  I am sending you the presentation Thank you very much for your help</div></DraggableItem2>
                    </div>
                </ICol>

            </IRow>

        </Container>

    )
}
const Actividad3 = styled(Actividad3_base)`${ styles }

`

export default Actividad3
