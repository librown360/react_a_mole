// Import Mole component
import Mole from './Mole'
import EmptySlot from './EmptySlot'
import { useState } from 'react'

function MoleContainer(props) {
    // Display state
    let [mole, setMole] = useState(false)

    // Handle Mole Bopping
    const handleClick = (e) => {
        //increment score by 1
        props.setScore(props.score + 1)
        //setMole back to false
        setMole(false)
        }

    // Determine which display to render
    let displayMole =  mole ? <Mole setScore={props.setScore} toggle={setMole} handleClick={handleClick} /> : <EmptySlot toggle={setMole} />
       
    return (
        <div>
            {displayMole}
        </div>
    )
}

export default MoleContainer