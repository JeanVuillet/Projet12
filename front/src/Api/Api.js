import "./Api.scss";

export async function apiActivity( userId ) {
  try {
    // Appel à la route '/user/:id' de votre backend
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`);

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
 const data=  await response.json();

return data;// Appelle getData avec les données mises à jour
  } catch (error) {
    console.error(error);
  }
}