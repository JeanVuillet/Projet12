import { index } from "d3";
import "./Api.scss";
import { useState, useEffect } from "react";

export function Api({ userId, getData }) {
  var [activityData, setActivityData] = useState(null);

  useEffect(() => {
    // Appel à la route '/user/:id' de votre backend
    fetch(`http://localhost:3000/user/${userId}/activity`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((data) => {
        setActivityData(data); 
     // Affiche les données dans la console
        getData(data); // Appelle getData avec les données mises à jour
      })
      .catch((error) => console.error(error)).then(
     
      ) // Gérez les erreurs de manière appropriée
  }, [userId]); // Assurez-vous de dépendre de userId pour rafraîchir les données si nécessaire

  // Affichez les données dans votre composant
  return (
    <div className="api">

    </div>
  );
}


export function UserApi({ userId, getData }){

    let [userData,setUserData]=useState(null);
    // let [score, setScore] = useState(null);
    // let[calories, setCalories]=useState(null);
    // let [proteines, setProteines]=useState(null);
    // let [carbos, setCarbos]=useState(null);
    // let [lipids, setLipids]=useState(null);

    useEffect(() => {
      // Appel à la route '/user/:id' de votre backend
      fetch(`http://localhost:3000/user/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données");
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data); 
// Affiche les données dans la console
          getData(data); // Appelle getData avec les données mises à jour
        })
        .catch((error) => console.error(error)).then(
       
        ) // Gérez les erreurs de manière appropriée
    }, [userId]); // Assurez-vous de dépendre de userId pour rafraîchir les données si nécessaire
  return(
    <div className="score"></div>
  )
}


export function PerfApi( {userId, getPerf}){
 var [perf, setPerf]=useState(null);

 useEffect(()=>{
    fetch(`http://localhost:3000/user/${userId}/performance`)
 
    .then( (response)=>{ 
        if(!response.ok){throw new Error('data didnt come')}
    return response.json();
    }
        ).then((data)=>{
            console.log(data)
            setPerf(data)
            getPerf(data)})
   
        .catch((error) => console.error(error))
            
},[userId]);

}