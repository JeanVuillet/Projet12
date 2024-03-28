
import calories from '../assets/calories.svg';
import proteinesIcon from '../assets/protein-icon.svg';
import glucidesIcon from '../assets/fat-icon.svg';
import carbsIcon from'../assets/carbs-icon.svg';
import './StatZone.scss';



import { StatComp } from "./StatComp/StatComp"
export function StatZone(){
    return(
        <div className="statZone">
      statzone
            <StatComp icon={calories} mesure={'200'} unite={'KG'}/> 

       
        </div>
    )
}