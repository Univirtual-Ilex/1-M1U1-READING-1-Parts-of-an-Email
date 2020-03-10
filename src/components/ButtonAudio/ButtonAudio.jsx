
//Import
import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import styles,{buttonAudio2, buttonAudio3, buttonAudio4} from './ButtonAudio_styles'
//

// Componente base
const ButtonAudio_base = ({src, w, h, p, py, px, pl, pt, pr, pb, ml, mt, mr, mb, my, mx, ...props}) => {
    const ilxAudio = useRef()
    const [running, playAudio] = useState(false)

    //
    const aPlay = () => {

        if(!running) {
            ilxAudio.current.play()
            playAudio(true)
        } else {
            ilxAudio.current.load()
            ilxAudio.current.pause()
            playAudio(false)
        }
    }
    //
    return (
        <div {...props}>
            <button className={'btn-clean ' + (running ? 'running' : '')} onClick={ aPlay }>
                { props.children ? props.children : <img className="img-play" src={running ? "./src/pause_btn.svg" : "./src/play_btn.svg"  } alt="Play Audio" /> }
            </button>
            <audio ref={ilxAudio} onEnded={()=>playAudio(false)}>
                <source src={ src }/>
                <span>No se puede reproducir el audio</span>
            </audio>
        </div>
    )
}
const ButtonAudio = styled(ButtonAudio_base)`${ styles }`
export const ButtonAudio2 = styled(ButtonAudio)` ${ buttonAudio2 }`
export const ButtonAudio3 = styled(ButtonAudio)`${buttonAudio3}`
export const ButtonAudio4 = styled(ButtonAudio3)`${buttonAudio4}`
export default ButtonAudio
