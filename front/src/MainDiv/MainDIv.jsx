import './MainDiv.scss'
import { Welcome } from '../Welcome/Welcome'
import { FirstGraph } from '../FirstGraph/FirstGraph'
import Pie from '../PieGraph/PieGraph'

import { StatComp } from '../StatComp/StatComp'
import { USER_MAIN_DATA } from '../data/data'
import calories from '../assets/calories.svg'
import carbs from '../assets/carbs.svg'
import fats from '../assets/fat.svg'
import proteins from '../assets/proteins.svg'
import { PieGraph } from '../PieGraph/PieGraph'
import { PolygonGraph } from '../PolygonGraph/PolygonGraph.jsx'

export function MainDiv(){

    const data=USER_MAIN_DATA;
    const calorieCount = data[0].keyData.calorieCount;
    const formattedCalorieCount = calorieCount.toLocaleString("en-US", { minimumFractionDigits: 0 });

    return(
<div className="mainDiv">
<div className='header'>
        <Welcome></Welcome>
</div>

<div className="main">
    <div className="graphs">
        <FirstGraph/>
        <PieGraph/>
        <PolygonGraph></PolygonGraph>
   
    </div>
 <div className="statZone">
    <StatComp icon={calories} mesure={`${formattedCalorieCount}` +'kCal'} unite={'Calories'}/>
    <StatComp icon={proteins} mesure={data[0].keyData.proteinCount+'g'} unite='Proteines'/>
    <StatComp icon={carbs} mesure={data[0].keyData.carbohydrateCount+'g'} unite='Glucides'/>
    <StatComp icon={fats} mesure={data[0].keyData.lipidCount+'g'} unite='Lipides'/>
 </div>
</div>
        
    </div>)
}