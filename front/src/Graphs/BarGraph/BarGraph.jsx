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

export function BarGraph() {

  let CustomTooltip = null;

  const { sharedData } = useData();
  const [localData, setLocalData] = useState([]);
  const [yAxisDomain, setYaxisDomain]=useState(null);


  useEffect(() => {
    getData();
    setDomain();
    CustomTooltip();
    //getData est une fonction asynchrone pour ramener les informations du mock ou de l api
    //et les stocker dans un State (localData)
    
    // sharedData est un objet recuperer grace a useContext qui a acces
    // a plusieurs methodes pour recuperer les data(voir FormData)
    async function getData() {

  if(sharedData){
  
      const myActiviy= await sharedData.getActivity();

       if (myActiviy) {
        //creation du tableau d objets utilisee comme data dans les props
      const theLocal=  myActiviy.map((session, index) => ({
          name: `${index + 1}`, 
          kilograms: session.kilogram, 
          calories: session.calories, 
        }))
        if(theLocal.length > 0 ){
          //enregistrement du tableau dans le useState
      setLocalData(theLocal);
        }

 
 
    //creation du toolTip pour afficher les valeurs lorsque la souris se deplace dans le graphique

    }}

  }
  function   CustomTooltip  () {

    if(localData){
    return (
      <div className="custom-tooltip">
        <p>{` ${localData.kilograms}kg`}</p>
        <p>{` ${localData.calories}Kcal`}</p>
      </div>
    );
    }
    else{ return 'could not get data'}
};
  function   setDomain(){
    if (localData.length>0){
   
   
         // Définition du domaine de l'axe Y pour les kilogrammes en commençant à minKilograms-10
         // et en finissant a maxKilograms+1
        
        const domain=[
         Math.floor(
           Math.min(...localData.map((entry) => entry.kilograms))
         ) - 10,
          Math.ceil(Math.max(...localData.map((entry) => entry.kilograms))) + 1,
        ];
   
         setYaxisDomain(domain);
        }
       }
  }
  , [sharedData]);

  return (
    <>
      <div className="leDiv">
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
              domain={localData?[
                0,
                Math.ceil(
                  Math.max(...localData.map((entry) => entry.calories))
                ) * 1.1,
              ]:'none'} // Définit le domaine personnalisé pour les calories
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
