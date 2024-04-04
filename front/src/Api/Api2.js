export async function Api2 (userId){

try{

const response=await fetch(`http://localhost:3000/user/${userId}`)

const data= response.json()

return data
}
catch (error){
    console.log('error')
}
}