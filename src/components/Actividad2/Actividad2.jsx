import React from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'
import AreaDrop from '../AreaDrop'
import DraggableItem from '../Draggable'


// Styles
import styled from 'styled-components'
import styles from './Actividad2_styles'
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
import Ilex from '../../App/variables'
import {IRow, ICol} from '../Grid'

// Componente base
const Actividad2_base = ({staticContext, ...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={43} w={80}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='drag the corresponding parts of the email to its correct location' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad2'} } />
            </UiButtonsContainer>

            <ICol mt={5}>
                <MainTitle color={Ilex.violeta2}>
                LOOK AT THE EMAIL AND DRAG THE INFORMATION TO THE CORRESPONDING PARTS OF THE E-MAIL
                </MainTitle>
            </ICol>

            <IRow justify="center" align="center" w={90}>
                <ICol w={70}>
                    <div className="fondo-correo-2">
                        <div className="mail-line from link">filipeos@utp.edu,co <AreaDrop x={1} y={-0.3}></AreaDrop></div>
                        <div className="mail-line to link">Zach Siegel <AreaDrop x={1} y={-0.30}></AreaDrop></div>
                        <div className="mail-line cc link">Richard Irvan <AreaDrop x={1} y={-0.26}></AreaDrop></div>
                        <div className="mail-line subject colored">Question about ancient Greece <AreaDrop x={1} y={0}></AreaDrop></div>
                        <div className="mail-line message">
                            <div>Dear Mr. Siegel, <AreaDrop x={1} y={-0.3}></AreaDrop> </div>
                            <br />
                            <div>I wanted to write you to let you know that i’m really enjoying the history mentioned we’ve been studying, especially Greek myths, I do have one question thought - Do greek people still believe in Zeus today? Thanks for your help with this.<AreaDrop x={1} y={0}></AreaDrop></div>
                            <br />
                            <div>
                                <p>Best,</p>
                                <p>Felipe Sarmiento   </p>
                                <AreaDrop x={10} y={-2.8}></AreaDrop>
                            </div>
                            <div className="mail-line from ">
                                <AreaDrop x={35} y={5.5}></AreaDrop>
                            </div>

                        </div>
                    </div>

                </ICol>
                <ICol
                w={28}>
                    <div className="DraggableContainer">
                        <DraggableItem>From</DraggableItem>
                        <DraggableItem>Closing</DraggableItem>
                        <DraggableItem>Body</DraggableItem>
                        <DraggableItem>Greeting</DraggableItem>
                        <DraggableItem>Attached</DraggableItem>
                        <DraggableItem>Subject</DraggableItem>
                        <DraggableItem>CC</DraggableItem>
                        <DraggableItem>To</DraggableItem>
                    </div>
                </ICol>

            </IRow>

            <ICol className="pestanaCheck">
                <ButtonCheck link={'/actividad3'} className="next" text={'Next'}></ButtonCheck>
            </ICol>
        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
