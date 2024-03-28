import './MainDiv.scss'
import { Welcome } from '../Welcome/Welcome'
import { FirstGraph } from '../FirstGraph/FirstGraph'

export function MainDiv(){

    return(<div className="mainDiv">

        <Welcome></Welcome>
        <FirstGraph/>
    </div>)
}