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
import { AriaGraph } from '../AriaGraph/AriaGraph.jsx'

import { useEffect, useState } from 'react'
import { DataSelector } from '../DataSelect/DataSelect.jsx'


export function MainDiv(){

    var [userData, setUserData]=useState();
    var[calorieCount,setCalorieCout]=useState();
    var[formattedCalorieCount, setFormatted]=useState();

    function getData(params){
        setUserData(params);
    }
    const data=USER_MAIN_DATA;

    useEffect(()=>{
        if(userData){
            setCalorieCout( userData.data.keyData.calorieCount);
            function calculate(){
    setFormatted(calorieCount?.toLocaleString("en-US", { minimumFractionDigits: 0 }));}
    calculate();
 } },[userData, calorieCount])

    return(
<div className="mainDiv">
<DataSelector/>
<div className='header'>
        <Welcome></Welcome>
</div>

<div className="main">
    <div className="graphs">
        <FirstGraph/>
        <PieGraph/>
        <PolygonGraph/>
        <AriaGraph/>
   
    </div>
 <div className="statZone">
    <StatComp icon={calories} mesure={formattedCalorieCount?`${formattedCalorieCount}` +'kCal':'non'} unite={'Calories'}/>
    <StatComp icon={proteins} mesure={userData?userData.data.keyData.proteinCount+'g':'non'} unite='Proteines'/>
    <StatComp icon={carbs} mesure={(userData)?userData.data.keyData.carbohydrateCount+'g':'none'} unite='Glucides'/>
    <StatComp icon={fats} mesure={userData?userData.data.keyData.lipidCount+'g':'non'} unite='Lipides'/>
 </div>

</div>
        
    </div>)
}