import { useEffect, useState } from "react";
import { Api } from "./Api/Api";


export function ApiTester(){

let [apiData, setApiData]= useState()
 function getData(param){
    setApiData(param);
    console.log('tester'+param)
 

}

return(
    <>
    <Api userId={12} getData={getData}></Api>
    <div className="coucou">    { apiData ? apiData.data.userId : "Chargement en cours..."}</div>
    </>
)

}