import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import "./PieGraph.scss";
import { useState, useEffect } from "react";
import { useData } from "../../data/DataProvider";

import { useNavigate } from "react-router-dom";

export function PieGraph() {
  const [todayScore, setTodayScore] = useState(0);
  const [endAngle, setEndAngle] = useState(0);
  const [pieData, setPieData] = useState([]);

  const { sharedData, errorMessge, setErrorMessage } = useData();
  let navigate = useNavigate();

   let myScore=null;

  useEffect(() => {
    pieMake();

    /**
     * cette fonction recupere le score le stock dans un useEffect (myScore)
     * et appelle les 3 fonctions de calcule des 
     * data des que le score est mis a jour
     */
    async function pieMake() {
      if (sharedData) {
        myScore = await sharedData.getScore();
        try {
          if (!myScore) {
            throw new Error("noMyScore");
          }
        } catch (error) {
          setErrorMessage("error details:" + errorMessge + error);
          navigate("/404");
        }

    
        getPercentage(myScore);
   
      }
    }

  }, [sharedData,myScore ]);
  /**
   * calcule le pourcentage et le stock dans un usteState tscore
   * @param {*} myScore 
   */
  function getPercentage(myScore) {
    if (myScore > 0) {
    let  tscore = myScore * 100;
      setTodayScore(tscore);
      getEndAngle(tscore);

    }
  }

  /**
   * calcule l angle final a partir de tscore
   * @param {*} tscore 
   */
  function getEndAngle(tscore) {
    if (tscore) {
      setEndAngle(220 - (tscore * 360) / 100);
      SetPieData(tscore);
    }
  }

  /**
   *   Formatage
   * definie le useState pieData comme un objet {name: zone1  value :tscore}qui sera utilisee en props
   * @param {*} tscore 
   */
  function SetPieData(tscore) {
    if (tscore) {
      setPieData([
        {
          name: "Zone1",
          value: tscore,
        },
      ]);
    }
  }

  return (
    <div className="pieDiv">
      <div className="title">Score</div>
      <ResponsiveContainer className="pieContainer">
        <div className="whiteCircle">
          <div className="score">{todayScore}%</div>
          <div className="text">de votre objectif</div>
        </div>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            innerRadius={76}
            outerRadius={82}
            label={false}
            labelLine={false}
            startAngle={220}
            endAngle={endAngle}
          >
            <Cell
              fill="#FF0000"
              cornerRadius={10}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
