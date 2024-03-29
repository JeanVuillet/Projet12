import { ResponsiveContainer } from "recharts";
import { PieChart } from "recharts";
import { Pie } from "recharts";

import {USER_MAIN_DATA} from '../data/data.js';
import "./PieGraph.scss";

const data=USER_MAIN_DATA;

const todayScore=data[0].todayScore;

const pieData=[
    {
    name:'TodayScore',
    value:todayScore
    }
]
export function PieGraph() {
  return (
    <div className="pieDiv" >
      <ResponsiveContainer>
        <PieChart>
            <Pie   data={pieData} dataKey="value"
                            nameKey="name" // Valeur utilisée pour étiqueter chaque secteur
                            cx="50%" // Position horizontale du centre du cercle
                            cy="50%" // Position verticale du centre du cercle
                            outerRadius={150} // Rayon externe du cercle
                            fill="#8884d8" // Couleur de remplissage des secteurs
                            label // Activation de l'affichage des étiquettes
            >

            </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
