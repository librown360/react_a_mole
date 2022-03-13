import { useEffect } from "react"
import mole from './images/mole.png'

function Mole(props) {

    useEffect(() => {
        // Random number of seconds
        let randomSeconds = Math.floor(Math.random() * 3000)
        // Create timer to display randomly display mole
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={mole} alt={'mole'}
            onClick={props.handleClick} />
        </div>
    )
}

export default Mole