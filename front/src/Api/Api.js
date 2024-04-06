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

export async function userApi(userId){

  try {
  const response =await fetch (`http://localhost:3000/user/${userId}`)
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des données");
  }

  const data= await response.json(); 

  return data;
}
catch (error) {
  console.error(error);
}

}

export async function perfApi(userId){
  
  try{
  const response = await fetch(`http://localhost:3000/user/${userId}/performance`)

  if(! response.ok) {
    throw new Error('data non reçu')
  }
  const data= await response.json();
  return data
}
catch(error){
  console.log(error)
}
    
}

export async  function averageSessions(userId){
  try{
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
  
    if(! response.ok) {
      throw new Error('data non reçu')
    }
    const data= await response.json();
    return data
  }
  catch(error){
    console.log(error)
  }
    

}