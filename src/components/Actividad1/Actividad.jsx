import React, {useRef} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import DraggableItem from '../Draggable'
import Area from '../AreaDrop'
import ButtonUi from '../ButtonControlUI'
import Modal from '../Generales/Modal'
import {ButtonAudio3,ButtonAudio4} from '../ButtonAudio'
import AreaCircle from '../AreaCircle'
import {Tooltip2} from '../Tooltip'


// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
import {IRow, ICol} from '../Grid'
// import interaction from './Actividad_interactions'
import dataItems from './Actividad_data'
import { useState } from 'react'
import ButtonInfo from '../ButtonInfo'

const Actividad_base = ({staticContext, ...props}) => {
    const [tooltipVisibility, setTooltipVisibility] = useState(false)
    const [itemsCompletados, modItemsCompletados] = useState([])
    const insertarItems = (val) => {
        if (itemsCompletados.indexOf(val) === -1 ) {
            modItemsCompletados( itemsCompletados.concat(val) )
        } else {
            console.log('Cant Register because is already in area')
            console.log(itemsCompletados)
            console.log('La cantidad de items en el array es? ', dataItems.length)
        }

    }
// Comprobar y aprobar el examen
    const comprobarPrueba = () => {
        console.log('Comprobando items',itemsCompletados, dataItems)
        if(itemsCompletados.length === dataItems.length) {
            
            return true
        }
        return false
    }
// Refs de las areas
const area_1 = useRef() 
const area_2 = useRef() 
const area_3 = useRef() 
const area_4 = useRef() 
const area_5 = useRef() 
const area_6 = useRef() 
const area_7 = useRef() 
const area_8 = useRef() 
const area_9 = useRef() 
const area_10 = useRef() 
const area_11 = useRef() 
const area_12 = useRef() 
const area_13 = useRef() 
const area_14 = useRef() 
const area_15 = useRef() 
const area_16 = useRef() 
const area_17 = useRef()
const area_18 = useRef() 
const area_19 = useRef() 
const area_20 = useRef() 
const area_21 = useRef() 
const area_22 = useRef() 
const area_23 = useRef() 
const area_24 = useRef() 
const area_25 = useRef() 
 
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={68} w={80}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='First listen to the audios, then organize the phrases in the boxes that correspond to each audio' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>

            <ICol mt={5}>
                <MainTitle color={Ilex.violeta2}>
                LISTEN TO THE CONVERSATIONS. READ THE SENTENCES AND PUT THEM IN THEIR  CORRESPONDING BOXES ACCORDING TO THE AUDIOS
                </MainTitle>
            </ICol>


            
            <IRow justify="center" w={85} gutters={1} align="center" pt={1.2}>
                <ICol w={62} align="center">
                    <IRow gutters={0.5} justify="center" className="listado-audio" py={0.405}>
                        <ButtonAudio3 src="./media/audio1.mp3">Audio 1</ButtonAudio3>
                        <ButtonAudio3 src="./media/audio2.mp3">Audio 2</ButtonAudio3>
                        <ButtonAudio3 src="./media/audio3.mp3">Audio 3</ButtonAudio3>
                        <ButtonAudio3 src="./media/audio4.mp3">Audio 4</ButtonAudio3>
                        <ButtonAudio3 src="./media/audio5.mp3">Audio 5</ButtonAudio3>
                    </IRow>
                </ICol>
                <ICol w={30} className="pos-relative">
                    <ButtonInfo bgColor="#0096ff" px={1} py={1}  onClick={() => setTooltipVisibility(!tooltipVisibility)}> CLICK HERE TO VOCABULARY PRACTICE </ButtonInfo>
                    <Tooltip2
                            visible={tooltipVisibility}
                            noclose
                            w="19.5"
                            pos="0.5em,5.3em"
                            >
                                <ButtonAudio4 src="./media/starving.mp3">Starving</ButtonAudio4>
                                <ButtonAudio4 src="./media/hungry.mp3">Hungry</ButtonAudio4>
                                <ButtonAudio4 src="./media/yummy.mp3">Yummy</ButtonAudio4>
                                <ButtonAudio4 src="./media/jogging.mp3">Jogging</ButtonAudio4>
                                <ButtonAudio4 src="./media/begginers.mp3">Begginers</ButtonAudio4>
                                <ButtonAudio4 src="./media/sleepy.mp3">Sleepy</ButtonAudio4>
                                <ButtonAudio4 src="./media/lectures.mp3">Lectures</ButtonAudio4>
                                <ButtonAudio4 src="./media/research.mp3">Research</ButtonAudio4>
                                <ButtonAudio4 src="./media/demanding.mp3">Demanding</ButtonAudio4>
                                
                    </Tooltip2>
                </ICol>

            </IRow>

            <DraggablesContainer>
                
                { dataItems.map((dato)=>{
                    return(
                        <DraggableItem 
                            name={dato.name} 
                            key={dato.id} 
                            elementId={dato.id} 
                            info={insertarItems} 
                            className='dragItem' 
                            areaDrag="#area" 
                            target={dato.areaTarget} 
                            ref={[area_1, area_2, area_3, area_4, area_5, area_6, area_7, area_8, area_9, area_10, area_11, area_12, area_13, area_14, area_15, area_16, area_17, area_18, area_19, area_20,area_21,area_22,area_23,area_24,area_25]}/>
                    )
                }) }

            </DraggablesContainer>
            <AreasContainer >
                <Area title='audio 1'>
                    <ICol pt={1} >
                        <AreaCircle  data-target="area_1" id="area_1" ref={area_1}> 1 </AreaCircle>
                        <AreaCircle  data-target="area_2" id="area_2" ref={area_2}> 2 </AreaCircle>
                        <AreaCircle  data-target="area_3" id="area_3" ref={area_3}> 3 </AreaCircle>
                        <AreaCircle  data-target="area_4" id="area_4" ref={area_4}> 4 </AreaCircle>
                        <AreaCircle  data-target="area_5" id="area_5" ref={area_5}> 5 </AreaCircle>
                    </ICol>

                </Area>
                <Area title='audio 2'> 
                    <ICol pt={1} >
                        <AreaCircle  data-target="area_6" id="area_6" ref={area_6}> 1 </AreaCircle>
                        <AreaCircle  data-target="area_7" id="area_7" ref={area_7}> 2 </AreaCircle>
                        <AreaCircle  data-target="area_8" id="area_8" ref={area_8}> 3 </AreaCircle>
                        <AreaCircle  data-target="area_9" id="area_9" ref={area_9}> 4 </AreaCircle>
                        <AreaCircle  data-target="area_10" id="area_10" ref={area_10}> 5 </AreaCircle>
                    </ICol>
                </Area>


                <Area title='audio 3'> 
                    <ICol pt={1} >
                        <AreaCircle  data-target="area_11" id="area_11" ref={area_11}> 1 </AreaCircle>
                        <AreaCircle  data-target="area_12" id="area_12" ref={area_12}> 2 </AreaCircle>
                        <AreaCircle  data-target="area_13" id="area_13" ref={area_13}> 3 </AreaCircle>
                        <AreaCircle  data-target="area_14" id="area_14" ref={area_14}> 4 </AreaCircle>
                        <AreaCircle  data-target="area_15" id="area_15" ref={area_15}> 5 </AreaCircle>
                    </ICol>                
                </Area>

                <Area title='audio 4'> 
                    <ICol pt={1} >
                        <AreaCircle  data-target="area_16" id="area_16" ref={area_16}> 1 </AreaCircle>
                        <AreaCircle  data-target="area_17" id="area_17" ref={area_17}> 2 </AreaCircle>
                        <AreaCircle  data-target="area_18" id="area_18" ref={area_18}> 3 </AreaCircle>
                        <AreaCircle  data-target="area_19" id="area_19" ref={area_19}> 4 </AreaCircle>
                        <AreaCircle  data-target="area_20" id="area_20" ref={area_20}> 5 </AreaCircle>
                    </ICol>                
                </Area>
                <Area title='audio 5'> 
                    <ICol pt={1} >
                        <AreaCircle  data-target="area_21" id="area_21" ref={area_21}> 1 </AreaCircle>
                        <AreaCircle  data-target="area_22" id="area_22" ref={area_22}> 2 </AreaCircle>
                        <AreaCircle  data-target="area_23" id="area_23" ref={area_23}> 3 </AreaCircle>
                        <AreaCircle  data-target="area_24" id="area_24" ref={area_24}> 4 </AreaCircle>
                        <AreaCircle  data-target="area_25" id="area_25" ref={area_25}> 5 </AreaCircle>
                    </ICol>                
                </Area>
            </AreasContainer>

            <Modal visible={comprobarPrueba()} ok w={25} nxtUrl='/actividad2' />
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad