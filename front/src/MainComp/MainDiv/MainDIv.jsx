import "./MainDiv.scss";
import { Welcome } from "./Welcome/Welcome.jsx";
import { FirstGraph } from "../../Graphs/FirstGraph/FirstGraph.jsx";
import { PieGraph } from "../../Graphs/PieGraph/PieGraph.jsx";

import { StatComp } from "./StatComp/StatComp.jsx";
import { USER_MAIN_DATA } from "../../data/data.js";
import calories from "../../assets/calories.svg";
import carbs from "../../assets/carbs.svg";
import fats from "../../assets/fat.svg";
import proteins from "../../assets/proteins.svg";
import { PolygonGraph } from "../../Graphs/PolygonGraph/PolygonGraph.jsx";
import { AriaGraph } from "../../Graphs/AriaGraph/AriaGraph.jsx";

import { useData } from "../../DataProvider/DataProvider.jsx";
import { useEffect, useState } from "react";
import { SelectPage } from "../SelectPage/SelectPage.jsx";

export function MainDiv() {
  const { sharedData } = useData();

  var [userData, setUserData] = useState();
  var [calorieCount, setCalorieCout] = useState();
  var [formattedCalorieCount, setFormatted] = useState();

  let keyData = null;
  useEffect(() => {
    MakeGraph();
    async function MakeGraph() {
      if (sharedData) {
        keyData = await sharedData.getKeyData();
        if (keyData) {
          setUserData(keyData);
          setCalorieCout(keyData.calorieCount);
          function calculate() {
            setFormatted(
              calorieCount?.toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })
            );
          }
          calculate();
        }
      }
    }
  }, [sharedData, calorieCount, keyData]);

  return (
    <div className="mainDiv">


      <div className="header">
        <Welcome></Welcome>
      </div>

      <div className="main">
        <div className="graphs">
          <FirstGraph />
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
              formattedCalorieCount
                ? `${formattedCalorieCount}` + "kCal"
                : "non"
            }
            unite={"Calories"}
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
