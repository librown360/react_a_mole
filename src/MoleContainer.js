// Import Mole component
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props) {

    return (
        <div>
            <h2>Mole Container</h2>
            <Mole />
            <EmptySlot />
        </div>
    )
}

export default MoleContainer