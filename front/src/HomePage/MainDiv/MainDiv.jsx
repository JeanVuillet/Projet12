import "./MainDiv.scss";
import { Welcome } from "./Welcome/Welcome.jsx";
import { BarGraph } from "../../Graphs/BarGraph/BarGraph.jsx";
import { PieGraph } from "../../Graphs/PieGraph/PieGraph.jsx";
import { StatComp } from "./StatComp/StatComp.jsx";
import calories from "../../assets/calories.svg";
import carbs from "../../assets/carbs.svg";
import fats from "../../assets/fat.svg";
import proteins from "../../assets/proteins.svg";
import { PolygonGraph } from "../../Graphs/PolygonGraph/PolygonGraph.jsx";
import { AriaGraph } from "../../Graphs/AriaGraph/AriaGraph.jsx";

import { useData } from "../../data/DataProvider.jsx";
import { useEffect, useState } from "react";

export function MainDiv() {
  const { sharedData } = useData();

  var [userData, setUserData] = useState();
  var [Formatted, setFormatted] = useState();
 let keyData=null;
  useEffect(() => {
    MakeGraph();
    /**
     * Cette fonction recupere les donnes et les stock dans userData
     */
    async function MakeGraph() {
      if (sharedData) {
         keyData = await sharedData.getKeyData();
      if (keyData){
        setUserData(keyData);
        formate(keyData.calorieCount);
      }
       

/**
 *  Cette fonction formate le nombre de calories pour qu'il soit affiché
 * avec des séparateurs de milliers
 * et stock le resultat dans un useEffect Formatted
 * @param {*} calorieCount 
 */
        function formate(calorieCount) {
          let formatted=calorieCount?.toLocaleString("en-US", {
            minimumFractionDigits: 0,
          })
          setFormatted(formatted);
        }
        
      }
    }
  }, [sharedData, keyData]);

  return (
    <div className="mainDiv">
      <div className="header">
        <Welcome></Welcome>
      </div>

      <div className="main">
        <div className="graphs">
          <BarGraph />
          <div className="smallGraphs">
            <AriaGraph />
            <PolygonGraph />
            <PieGraph />
          </div>
        </div>
        <div className="statZone">
          <StatComp
            icon={calories}
            mesure={
              Formatted ? `${Formatted} kCal` : "non"
            }
            unite="Calories"
          />
          <StatComp
            icon={proteins}
            mesure={userData ? userData.proteinCount + "g" : "non"}
            unite="Proteines"
          />
          <StatComp
            icon={carbs}
            mesure={userData ? userData.carbohydrateCount + "g" : "none"}
            unite="Glucides"
          />
          <StatComp
            icon={fats}
            mesure={userData ? userData.lipidCount + "g" : "non"}
            unite="Lipides"
          />
        </div>
      </div>
    </div>
  );
}
