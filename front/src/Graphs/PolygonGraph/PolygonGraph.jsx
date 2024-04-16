import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";
import { USER_PERFORMANCE } from "../../data/data.js";
import "./PolygonGraph.scss";
import { useNavigate } from "react-router-dom";

import { useData } from "../../DataProvider/DataProvider.jsx";
export function PolygonGraph() {
  const [perfData, setPerfData] = useState(null);

  const [values, setValues] = useState([]);
  const [newValues, setNewValues] = useState(null);

  const [maxDataValue, setMaxData] = useState();

  const navigate = useNavigate();
  let { sharedData, setErrorMessage } = useData();

  let myValue = null;

  // cette fonction calcule et stock la valeur max et et tableau de myValue a l envers
  //car l ordre des donnes recu est inverse par rapport au graphique
  let calc = () => {
    if (myValue) {
      setMaxData(Math.max(myValue.map((element) => element.value)));

      setNewValues(myValue.reverse());
    }
  };

  //cette fonction mapp perfData en une liste d objets
  //{ subject : element du tableau mySubject
  //value:cette valeur de perfData
  //}

  function mapper() {
    if (perfData) {
      const mySubject = [
        "Cardio",
        "Energie",
        "Endurance",
        "Force",
        "Vitesse",
        "Intensité",
      ];

      myValue = perfData.map((element, index) => ({
        subject: mySubject[index],
        value: element.value,
      }));
    }
  }
  useEffect(() => {
    //cette fonction recupere les datasPerformance grace a l objet sharedData
    //stock l objet dans le useEffect perfData
    //et appelle la fonction mapper() et la fonction calc()
    async function graphMaker() {
      if (sharedData) {
        const data = await sharedData.getPerformance();
        try {
          if (!data) {
            throw new Error("noPolygonData");
          }
        } catch (error) {
          setErrorMessage("error details:" + error);
          navigate("/404");
        }
        if (data) {
          setPerfData(data.data);
          mapper();
          calc();
        }
      }
    }

    graphMaker();
  }, [sharedData, perfData]);

  return (
    <div className="polygonGraph">
      <ResponsiveContainer className={"responsivCont"}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="60%"
          data={newValues ? newValues : []}
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
