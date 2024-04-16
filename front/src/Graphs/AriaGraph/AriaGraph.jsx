import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./AriaGraph.scss";
import { useData } from "../../data/DataProvider.jsx";

export function AriaGraph() {
  const [rightDiv, setRightDiv] = useState(null);
  const [toolTime, setToolTime] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const [maxValue, setMaxValue] = useState(null);
  const [minValue, setMinValue] = useState(null);
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  let { sharedData, setErrorMessage } = useData();
  let newData = null;
  let navigate = useNavigate();

  //cette fonction map newData en une liste d objets
  // {day:le jour time:dure de la session index: l'index de la session}
  // et appel setValues()
  async function getNewData(data2) {
    if (data2) {
      newData = await data2.map((element, index) => ({
        day: days[index],
        time: element.sessionLength,
        index: index,
      }));

      setValues(newData);
    }
  }
  //cette fonction stock dans des useState newData, le temps max de newData et le temps min de newData(pour les props du graphique)
  function setValues(newData) {
    if (newData) {
      setGraphData(newData);
      setMaxValue(Math.max(...newData.map((element) => element.time)));
      setMinValue(Math.min(...newData.map((element) => element.time)));
    }
  }

  useEffect(() => {
    // cette fonction recupere le data de AverageSessions grace a l objet sherdData
    async function makeAriagraph() {
      if (sharedData) {
        const data2 = await sharedData.getAverageSessions();
        try {
          if (!data2) {
            throw new Error("no averageSession data");
          }
        } catch (error) {
          setErrorMessage("error details:" + error);
          navigate("/404");
        }
        getNewData(data2);
      }
    }

    makeAriagraph();
  }, [sharedData, newData]);
 
  const CustomTooltip = ({ active, payload }) => {
    useEffect(() => {
    if (active && payload && payload.length) {
      const { time, index } = payload[0].payload;
      setToolTime(time);
      // Calcul de la largeur restante jusqu'à dimanche
      const rightSpace = (6 - index) * (100 / 6.5) + 4; // 258 est la largeur du graphique

      setRightDiv(rightSpace);
    }
  }, [active, payload]);
    return (
      <div className="custom-tooltip" style={{ lineHeight: 0 }}>
        <p className="label">{`${toolTime} min`}</p>
      </div>
    );
  };
  return (
    <div className="ariaDiv">
      <div className="calcDiv"></div>
      <div className="rightDiv" style={{ width: `${rightDiv}%` }}></div>
      <div className="txt">Durée moyenne des sessions</div>
      <ResponsiveContainer className="ariaContainer">
        <AreaChart
          data={graphData}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          fill="none"
        >
          <XAxis
            dataKey="day"
            domain={[-1, 8]}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis domain={[minValue - 30, maxValue + 30]} hide={true} />
          <Tooltip content={<CustomTooltip />} hide={true} />
          <Area
            dataKey="time"
            stroke="white"
            strokeWidth="2"
            fill="none"
            type="natural"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
