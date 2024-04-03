import './Api.scss';
import { useState, useEffect } from 'react';

export function Api({userId}){

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Appel à la route '/user/:id' de votre backend
        fetch(`/user/${userId}/activity`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
          
            })
            .then(data => {
// Assurez-vous de définir les données correctement
                console.log('voilqdata'); // Affichez les données dans la console
            })
            .catch(error => console.error(error)); // Gérez les erreurs de manière appropriée
    }, [userId]); // Assurez-vous de dépendre de userId pour rafraîchir les données si nécessaire
  
    // Affichez les données dans votre composant
    return (
        <div className="api">
            {/* Insérez ici votre code pour afficher les données */}
        </div>
    );
}
