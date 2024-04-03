import { index } from "d3";
import "./Api.scss";
import { useState, useEffect } from "react";

export function Api({ userId }) {
  let [userData, setUserData] = useState(null);

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
        setUserData( data); // Affichez les données dans la console
        // Assurez-vous de définir les données correctement
console.log(userData);
      })
      .catch((error) => console.error(error)).then(
     
      ) // Gérez les erreurs de manière appropriée
  }, [userId]); // Assurez-vous de dépendre de userId pour rafraîchir les données si nécessaire

  // Affichez les données dans votre composant
  return (
    <div className="api">
  {userData ? userData.data.userId : 'Chargement en cours...'}
    </div>
  );
}
