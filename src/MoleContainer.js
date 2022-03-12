// Import Mole component
import Mole from './Mole'
import EmptySlot from './EmptySlot'
import { useState } from 'react'

function MoleContainer(props) {
    // Display state
    let [displayMole, setDisplayMole] = useState(false)

    // Determine display to render
    displayMole ? <EmptySlot /> : <Mole />

    // Handle Mole Bopping
    const moleBopped = () => {
        //increment score by 1
        props.setScore(props.score + 1)
        //setDisplayMole to back to false
        setDisplayMole = false
    }

    return (
        <div>
            {displayMole}
            <Mole />
            <EmptySlot />
        </div>
    )
}

export default MoleContainer