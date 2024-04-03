import { useState } from "react";
import { Api } from "./Api/Api";


export function ApiTester(){

let [apiData, setApiData]= useState()

function getData(param){
    setApiData(param);
}
return(
    <>
    <Api userId={12} getData={getData}></Api>
    <div className="coucou">    {apiData && apiData.id ? apiData.id : "Chargement en cours..."}</div>
    </>
)

}