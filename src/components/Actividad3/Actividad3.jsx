import React, {useRef,useState} from 'react'
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

import Data from './Actividad3_data'
import Modal from '../Generales/Modal'

// Componente base
const Actividad3_base = ({staticContext, ...props}) => {


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
                        <div className="mail-line from bold"> From  <AreaDrop2 className="areaDroppable areaFrom" data-selected={''} data-target={'area_0'}   target={'area_0'} id={'area_0'} ref={eval('area_0')} /></div>
                        <div className="mail-line to bold">To <AreaDrop2 className="areaDroppable areaTo" data-selected={''} data-target={'area_1'}   target={'area_1'} id={'area_1'} ref={eval('area_1')} /></div>
                        <div className="mail-line cc bold">CC <AreaDrop2 className="areaDroppable areaCc" data-selected={''} data-target={'area_2'}   target={'area_2'} id={'area_2'} ref={eval('area_2')} /></div>
                        <div className="mail-line subject bold">Subject Field <AreaDrop2 className="areaDroppable areaBold" data-selected={''} data-target={'area_3'}   target={'area_3'} id={'area_3'} ref={eval('area_3')} /></div>
                        <div className="mail-line message">
                            <AreaDrop2 className="areaDroppable areaMessageline" data-selected={''} data-target={'area_4'}   target={'area_4'} id={'area_4'} ref={eval('area_4')} />
                            <AreaDrop2 className="areaDroppable areaMessage"  data-selected={''} data-target={'area_5'}   target={'area_5'} id={'area_5'} ref={eval('area_5')} />
                            <AreaDrop2 className="areaDroppable areaMessageline2"  data-selected={''} data-target={'area_6'}   target={'area_6'} id={'area_6'} ref={eval('area_6')} />
                            <AreaDrop2 className="areaDroppable areaMessageline3" data-selected={''} data-target={'area_7'}   target={'area_7'} id={'area_7'} ref={eval('area_7')} />
                        </div>
                    </div>

                </ICol>
                <ICol
                w={40}>
                    <div className="DraggableContainer estilos-correo">
                    {Data.map((data, index) => {
                        return(

                            <DraggableItem2 key={index}
                            elementId={index}
                            setStatus={setStatusCheck} 
                            draggable={'draggable_' + index} 
                            idArr={index} 
                            areaDrag={'#area'} 
                            target={data.belongsTo}  
                            ref={[]}>
                            
                            <div className="mail-line" dropto="#message">{data.text.replace('<br/>', '\n')}</div></DraggableItem2>
                        )
                    })}
                    </div>
                </ICol>

            </IRow>

        </Container>

    )
}
const Actividad3 = styled(Actividad3_base)`${ styles }

`

export default Actividad3
