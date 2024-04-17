import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";

import "./PolygonGraph.scss";
import { useNavigate } from "react-router-dom";

import { useData } from "../../data/DataProvider.jsx";
export function PolygonGraph() {

  const [polygonData, setPolygonData] = useState(null);

  const navigate = useNavigate();
  let { sharedData, setErrorMessage } = useData();

  let data=null;

  useEffect(() => {
    graphMaker();
  }, [sharedData, data]);
  //cette fonction recupere les datasPerformance grace a l objet sharedData
  //stock l objet dans le useEffect perfData
  //et appelle la fonction mapper() et la fonction calc()

  async function graphMaker() {
    if (sharedData) {
       data = await sharedData.getPerformance();
      try {
        if (!data) {
          throw new Error("noPolygonData");
        }
      } catch (error) {
        setErrorMessage("error details:" + error);
        navigate("/404");
      }
      if (data) {
     
        mapper(data.data);
     
      }
    }
  }

  //cette fonction mapp perfData en une liste d objets
  //{ subject : element du tableau mySubject
  //value:cette valeur de perfData
  //}

  function mapper(perfData) {
    if (perfData) {
      const mySubject = [
        "Cardio",
        "Energie",
        "Endurance",
        "Force",
        "Vitesse",
        "Intensité",
      ];

     const myValue = perfData.map((element, index) => ({
        subject: mySubject[index],
        value: element.value,
      }));
      calc(myValue);
    }
  
  }
  
  // cette fonction stock le tableau de myValue a l envers
  //car l ordre des donnes recu est inverse par rapport au graphique
  let calc = (myValue) => {
    if (myValue) {
      setPolygonData(myValue.reverse());
    }
  };

  


  return (
    <div className="polygonGraph">
      <ResponsiveContainer className={"responsivCont"}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="60%"
          data={polygonData ? polygonData : []}
          style={{ border: "solid" }}
        >
          <PolarGrid
            gridType="polygon"
            radialLines={false}
            polarRadius={[0, 8.5, 18, 38, 57, 77]}
          />
          <PolarAngleAxis
            dataKey="subject"
            className="keys"
            tick={{ fill: "white" }}
            radius={0}
          />
          <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />

          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
