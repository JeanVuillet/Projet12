import React, { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';
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
  const navigate= useNavigate();
// sharedData est un objet recuperer grace a useContext qui a acces
// a plusieurs methodes pour recuperer les data(voir FormData)
  const { sharedData } = useData();
  const [localData, setLocalData] = useState([]);
  const [yAxisDomain, setYaxisDomain]=useState(null);


  useEffect(() => {
    getData();


    
    //getData est une fonction asynchrone pour ramener les data du mock ou de l api
    //les mapper dans une liste d objets type:
    // {name:indice+1 de session 
    //  kilograms:kilogrames de session 
    //  calories:calories brulees de session
  //   }
    //et stocker cette liste dans dans un State (localData)
  async function getData() {

  if(sharedData){
  
      const myActiviy= await sharedData.getActivity();

      try{
       if (myActiviy) {
        //creation du tableau d objets utilisee comme data dans les props
      const theLocal=  myActiviy.map((session, index) => ({
          name: `${index + 1}`, 
          kilograms: session.kilogram, 
          calories: session.calories, 
        }))
   
          //enregistrement du tableau dans le useState
      setLocalData(theLocal);
     

 
      setDomain();
    //creation du toolTip pour afficher les valeurs lorsque la souris se deplace dans le graphique

    }
    else {
      throw  new Error('noData')
    }
      }
      catch(error)
      {
        navigate('/404')
      }
  }

  }

//SetDomaine genere le domaine de l'axe Y pour les kilogrammes 
//en commençant à la valeur min des kilogrames de localData-10
// et en finissant à la valeur max des kilogrames de localData+1
  function   setDomain(){
    if (localData.length>0){
   
   
         // Définition
        
        const domain=[
         Math.floor(
           Math.min(...localData.map((entry) => entry.kilograms))
         ) - 10,
          Math.ceil(Math.max(...localData.map((entry) => entry.kilograms))) + 1,
        ];
   
         setYaxisDomain(domain);

         CustomTooltip();
        }
       }

//CustomTooltip cree le Tooltip (div qui suit la souris dans le graph)
  // il contient les kilos et les calories de  cette section
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
  }
  , [sharedData]);

  return (
    <>
      <div className="barDiv">
        <ResponsiveContainer>
          {/* Création du graphique */}
          <div className="barHeader">
            <div className="title"> Activité quotidienne</div>
            <div className="legend">
              <div className="poids">
               <span className="circle1 round"></span>poids (kg) 
              </div>
              <div className="calories">
              <span className="circle2 round"></span> Calories brûlées (Kcal)
              </div>
            </div>
          </div>
          <BarChart
          className="barChart"
            data={localData} // Données à afficher
            margin={{ top: 10, right: 30, left: 40, bottom: 30 }} // Marge autour du graphique
            barSize={8} // Taille des barres
          >
            {/* Configuration de l'axe X */}
            <XAxis dataKey="name" />{" "}

            <YAxis
              yAxisId="kilograms" 
              orientation="right"
              domain={yAxisDomain} 
              tickCount={4}
              tick={(
                { x, y, payload } 
              ) => (
                <text
                  x={x + 15} 
                  y={y} 
                  dy={4} 
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
