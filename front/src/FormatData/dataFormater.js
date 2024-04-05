import { apiActivity } from "../Api/Api.js"
import { data } from "react";
import { USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from '../data/data.js'
export class User {

    constructor( origin, id){
    this.origin=origin
    this.id=id
    this.activitySessions=  this.getActivity(id, origin);
    }
    async getActivity(id, origin){

        if(origin==='api'){
        try{
        const data= await apiActivity(id);
        if (!data) {
          throw new Error('Les données de l\'API sont vides');
        }
        else(console.log('dataIs'+data))

     
        return data.data.sessions;
        } catch(error){
            console.log(error)
            return null;
        }
      }else if( origin==='mock'){
        const data=USER_ACTIVITY;
        const thisData=data.find((element)=>(element.userId=id))
        return thisData.sessions;
      }
    
      }
    }

