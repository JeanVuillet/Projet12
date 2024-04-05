import React, { useState, useEffect } from "react";
import { User } from "../../FormatData/dataFormater.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; // Importation des composants de Recharts

import "./TestComp.scss"; // Importation du fichier de style CSS
import { useData } from '../../DataProvider/DataProvider.jsx';

export function FirstGraph() {
  // Initialisation avec une valeur par défaut
  let yAxisDomain = []; // Initialisation avec une valeur par défaut
  let CustomTooltip = null;

  const { sharedData } = useData();
  var [apiData, setApiData] = useState();
  var [localData, setLocalData] = useState([]);

  async function test() {
    if(sharedData){
    const myVar = await sharedData;
const result= await myVar.getActivity();
console.log('fialyOk'+result)
    }
  }
  test();
  useEffect(() => {

    if (apiData) {
      // Transformation des données pour les adapter au format utilisé par Recharts
      setLocalData(
        apiData.data.sessions.map((session, index) => ({
          name: `${index + 1}`, // Nom du jour
          kilograms: session.kilogram, // Poids en kilogrammes
          calories: session.calories, // Calories brûlées
        }))
      );
      // Vérification si les données pour le septième jour existent

      // Recherche du poids minimum dans les données
      const minKilograms = Math.floor(
        Math.min(...localData.map((entry) => entry.kilograms))
      );

      // Définition du domaine de l'axe Y pour les kilogrammes en commençant à minKilograms
      yAxisDomain = [
        minKilograms - 1,
        Math.ceil(Math.max(...localData.map((entry) => entry.kilograms))) + 1,
      ];

      CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          const TooltipData = payload[0].payload; // Données de la barre survolée
          return (
            <div className="custom-tooltip">
              <p>{` ${localData.kilograms}kg`}</p>
              <p>{` ${localData.calories}Kcal`}</p>
            </div>
          );
        }
        return null;
      };
    }
  }, [apiData, User]);

  return (
    <>
      <div className="leDiv">
        <div>{apiData && apiData.data ? apiData.data.useId : "lolo"}</div>

        <ResponsiveContainer>
          {/* Création du graphique */}
          <div className="header">
            <div className="title"> Activité quotidienne</div>
            <div className="legend">
              <span className="circle1 round"></span>poids (kg)
              <span className="circle2 round"></span>Calories brûlées (Kcal)
            </div>
          </div>
          <BarChart
            data={localData} // Données à afficher
            margin={{ top: 20, right: 30, left: 40, bottom: 30 }} // Marge autour du graphique
            barSize={8} // Taille des barres
          >
            {/* Configuration de l'axe X */}
            <XAxis dataKey="name" />{" "}
            {/* Utilise les noms des jours comme étiquettes */}
            {/* Configuration de l'axe Y pour les kilogrammes */}
            <YAxis
              yAxisId="kilograms" // Identifiant de l'axe pour les kilogrammes
              orientation="right" // Orientation de l'axe (côté droit)
              domain={yAxisDomain} // Définit le domaine personnalisé pour les kilogrammes
              tickCount={4}
              tick={(
                { x, y, payload } // Configuration des étiquettes
              ) => (
                <text
                  x={x + 15} // Position horizontale du texte décalée de 15 pixels par rapport à l'axe
                  y={y} // Position verticale du texte alignée avec l'axe
                  dy={4} // Décalage vertical supplémentaire du texte de 4 unités vers le bas
                  textAnchor="start" // Ancrage du texte à "start" (alignement à gauche)
                  fill="#666" // Couleur de remplissage du texte en gris foncé
                  className="couou" // Classe CSS attribuée au texte
                >
                  {payload.value} {/* Affichage des valeurs des kilogrammes */}
                </text>
              )}
            />
            {/* Configuration de l'axe Y pour les calories */}
            <YAxis
              yAxisId="calories" // Identifiant de l'axe pour les calories
              orientation="right" // Orientation de l'axe
              hide
              domain={[
                0,
                Math.ceil(
                  Math.max(...localData.map((entry) => entry.calories))
                ) * 1.1,
              ]} // Définit le domaine personnalisé pour les calories
              tick={(
                { x, y, payload } // Configuration des étiquettes
              ) => (
                <text
                  x={x + 15}
                  y={y}
                  dy={4}
                  textAnchor="start"
                  fill="#666"
                  className="couou"
                >
                  {Math.round(payload.value)}{" "}
                  {/* Conversion des calories en pixels */}
                </text>
              )}
            />
            <Tooltip content={CustomTooltip} />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />{" "}
            {/* Lignes de grille horizontales */}
            {/* Affichage des barres pour les kilogrammes */}
            {
              <Bar
                dataKey="kilograms"
                fill="#282D30"
                yAxisId="kilograms"
                radius={[10, 10, 0, 0]}
              />
            }
            {/* Affichage des barres pour les calories */}
            {
              <Bar
                dataKey="calories"
                fill="#E60000"
                yAxisId="calories"
                radius={[10, 10, 0, 0]}
              />
            }
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
