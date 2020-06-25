import React, {useRef, useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import ButtonDown from '../ButtonDown'
import AreaDrop from '../AreaDrop'
import DraggableItem from '../Draggable'


// Styles
import styled from 'styled-components'
import styles from './Actividad2_styles'
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
import Ilex from '../../App/variables'
import {IRow, ICol} from '../Grid'

import Data from './Actividad2_data'
import Modal from '../Generales/Modal'

// Componente base
const Actividad2_base = ({staticContext, ...props}) => {

    // Refs de las areas
    const area_0 = useRef()
    const area_1 = useRef()
    const area_2 = useRef()
    const area_3 = useRef()
    const area_4 = useRef()
    const area_5 = useRef()
    const area_6 = useRef()
    const area_7 = useRef()


    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)


    const setStatusCheck = (id, status, target) => {
        var data = Data[id]
        data.status = status

        if(target){
            if(data.answer === target){
                data.right = 1
            }else{
                data.right = 0
            }
        }else{
            data.right = 0
        }

        console.log(Data)
    }


    const checkActivity = () => {
        var count = 0
        Data.map((data, i) => {
            if(data.right === 1){
                count ++
            }else{
                setErr(true)
                setModal(true)
            }

            if(count === Data.length){
                setOk(true)
                setModal(true)
            }
        })
    }


    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={43} w={70}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='drag the corresponding parts of the email to its correct location' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={() => window.location.reload()} />
            </UiButtonsContainer>

            <ICol mt={5}>
                <MainTitle color={Ilex.violeta2}>
                LOOK AT THE EMAIL AND DRAG THE INFORMATION TO THE CORRESPONDING PARTS OF THE E-MAIL
                </MainTitle>
            </ICol>

            <IRow justify="center" align="center" w={90}>
                <ICol w={70}>
                    <div className="fondo-correo-2">
                        <div className="mail-line from link">filipeos@utp.edu,co <AreaDrop x={1} y={-0.3} data-selected={''} data-target={'area_0'}   target={'area_0'} id={'area_0'} ref={eval('area_0')} ></AreaDrop></div>
                        <div className="mail-line to link">Zach Siegel <AreaDrop x={1} y={-0.30} data-selected={''} data-target={'area_1'}   target={'area_1'} id={'area_1'} ref={eval('area_1')}></AreaDrop></div>
                        <div className="mail-line cc link">Richard Irvan <AreaDrop x={1} y={-0.26} data-selected={''} data-target={'area_2'}   target={'area_2'} id={'area_2'} ref={eval('area_2')}></AreaDrop></div>
                        <div className="mail-line subject colored">Question about ancient Greece <AreaDrop x={1} y={0} data-selected={''} data-target={'area_3'}   target={'area_3'} id={'area_3'} ref={eval('area_3')}></AreaDrop></div>
                        <div className="mail-line message">
                            <div>Dear Mr. Siegel, <AreaDrop x={1} y={-0.3} data-selected={''} data-target={'area_4'}   target={'area_4'} id={'area_4'} ref={eval('area_4')}></AreaDrop> </div>
                            <br />
                            <div>I wanted to write you to let you know that i’m really enjoying the history mentioned we’ve been studying, especially Greek myths, I do have one question thought - Do greek people still believe in Zeus today? Thanks for your help with this.<AreaDrop x={1} y={0} data-selected={''} data-target={'area_5'}   target={'area_5'} id={'area_5'} ref={eval('area_5')}></AreaDrop></div>
                            <br />
                            <div>
                                <p>Best,</p>
                                <p>Felipe Sarmiento   </p>
                                <AreaDrop x={10} y={-2.8} data-selected={''} data-target={'area_6'}   target={'area_6'} id={'area_6'} ref={eval('area_6')}></AreaDrop>
                            </div>
                            <div className="mail-line from ">
                                <AreaDrop x={35} y={5.5} data-selected={''} data-target={'area_7'}   target={'area_7'} id={'area_7'} ref={eval('area_7')}></AreaDrop>
                            </div>

                        </div>
                    </div>

                </ICol>
                <ICol
                w={28}>
                    <div className="DraggableContainer">
                    {Data.map((data, index) => {
                        return(

                            <DraggableItem key={index}
                            elementId={index}
                            setStatus={setStatusCheck} 
                            draggable={'draggable_' + index} 
                            idArr={index} 
                            areaDrag={'#area'} 
                            target={data.belongsTo}  
                            ref={[]}>
                            
                            {data.text}</DraggableItem>
                        )
                    })}
                    </div>
                </ICol>

            </IRow>

            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'#/actividad2'} nxtUrl={'#/actividad3'} />
            <ICol className="pestanaCheck">
                <ButtonDown  onClick={checkActivity} className="next" text={'CHECK'}></ButtonDown>
            </ICol>
        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
