import { USER_MAIN_DATA } from "../data/data";
import { useState,useEffect } from "react";



const data= USER_MAIN_DATA.find(element=>element.id===12);

function Welcome(){
    var[userData, setUserData]=useState();
    const getData=(props)=>{
        setUserData(props)
return 1
    }
    return(
        
        <div className="welcomDiv">

        <div className="bonjour">Bonjour <span>{(userData)?userData.data.userInfos.firstName:'Roberto'}</span></div>
        <div className="bravo">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>
    )
};
export {Welcome};