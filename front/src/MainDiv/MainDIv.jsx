import './MainDiv.scss'
import { Welcome } from '../Welcome/Welcome'
import { FirstGraph } from '../FirstGraph/FirstGraph'
import { StatZone } from '../StatZone/StatZone'
import { StatComp } from '../StatZone/StatComp/StatComp'

export function MainDiv(){

    return(<div className="mainDiv">
<div className='header'>
        <Welcome></Welcome>
</div>

<div className="main">
    <div className="graphs">
        <FirstGraph/>
    </div>
 <div className="statZone">
    <StatComp/>
    <StatComp/>
    <StatComp/>
    
 </div>
</div>
        
    </div>)
}