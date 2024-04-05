import { apiActivity } from "../Api/Api.js"
import { data } from "react";
import { USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from '../data/data.js'

import { DataSelector } from "../DataSelect/SelectPage.jsx";


export  class User {

constructor(origin,id){

    this.origin = origin;
    this.id=id;
             }
  





 
         async getActivity(){

        if(this.origin==='api'){
        try{
        const data= await apiActivity(this.id);
        if (!data) {
          throw new Error('Les données de l\'API sont vides');
        }
        else(console.log('dataIs'+data))

        const sessions= await data.data.sessions
        console.log(console.log(Object.keys(data), sessions))

        return data.data.sessions;
        } catch(error){
            console.log(error)
            return null;
        }
      }else if( this.origin==='mock'){
        const data=USER_ACTIVITY;
        const thisData=data.find((element)=>(element.userId=this.id))
        return thisData.sessions;
      }
    
      }
    }

