import { useEffect } from "react"
import molehill from './images/molehill.png'

function EmptySlot(props) {

    useEffect(() => {
        // Random number of seconds
        let randomSeconds = Math.floor(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={molehill} alt={'molehill'} />
        </div>
    )
}

export default EmptySlot