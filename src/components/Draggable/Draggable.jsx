//Import
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import styles,{draggable2styles} from './Draggable_styles'
//import BocinaButton from '../BocinaButton'
import { gsap, TweenMax } from 'gsap'
import { Draggable} from 'gsap/Draggable'
// Componente base
// Es un draggable con drop target
// PROPS
/**
 * areaDrag: #id del elemento que se va a usar como contenedor importante usar el #
 * audio: String url de la locación del audio
 * name: Contenido del texto del elemento arrastrable. No usa propchildren
 * target: #id del elemento al que va a apuntar
 * elementId: es un identificador que funciona para definir la identidad de cada instancia
 * // Base 
 * ref: Recibe la referencia o el conjunto de referencias html del elemento al que apuntará como droppable
 */

const Draggable_base = React.forwardRef(({areaDrag, name, target, elementId, status,setStatus,idArr, draggable, info, ...props }, ref ) => {
    
    const itemDraggable = useRef()
    useEffect ( () => {
        gsap.registerPlugin(Draggable)
        Draggable.create( itemDraggable.current , { 
            type: 'x,y',
            edgeResistance:0.65,
            bounds:areaDrag,
            throwProps:true,
            zIndex:500,
            // liveSnap: { points:[{x:100, y:100}], radius: 50}, // {x:100, y:100}, {x:50, y:50}, {x:100, y:100} Puntos en la posición 0x y 0y tambien en la 50x y 50y
            inertia:true,
            onDrag: function (e) {
                //console.log(this.x, this.y)

                // console.log(this.hitTest(target))
                // console.log(ref[0].current.dataset.target)
            },
            onDragEnd: function (e) {
                var count = 0
                target.map((item, i) => {
                    const div = document.querySelector('#' + item)
                    if(div){
                        if(!this.hitTest(div, '80%')){
                            count ++
                        }else{
                            div.removeAttribute('id')
                            div.dataset.selected = draggable
                            setStatus(elementId, 1, item)
                        }
                    }else{
                        var hidden_div = document.querySelector('[data-target=' + item + ']')
                        if(draggable === hidden_div.dataset.selected){
                            hidden_div.setAttribute('id', hidden_div.dataset.target)
                        }
                        count ++
                    }
                    if(count == target.length){
                        TweenMax.to(this.target, 0.2, {x:0, y:0})
                        return false
                    }
                })
            }
        })
    } , [areaDrag, target, ref, elementId, info])


    return (
        <div {...props} ref={itemDraggable}>
            <div className='draggable' >
            <span>{ props.children }</span>
            </div>

        </div>
        
    )
})

const DraggableItem = styled(Draggable_base)`${ styles }`
export const DraggableItem2 = styled(Draggable_base)`${draggable2styles}`
export default DraggableItem
