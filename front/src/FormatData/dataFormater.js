import { apiActivity, userApi,perfApi } from "../Api/Api.js";
import { data } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/data.js";

import { DataSelector } from "../DataSelect/SelectPage.jsx";

export class User {
  constructor(origin, id) {
    this.origin = origin;
    this.id = id;
  }

  async getActivity() {
    if (this.origin === "api") {
      try {
        const data = await apiActivity(this.id);
        if (!data) {
          throw new Error("Les données de l'API sont vides");
        } else console.log("dataIs" + data);

        const sessions = await data.data.sessions;
        console.log(console.log(Object.keys(data), sessions));

        return data.data.sessions;
      } catch (error) {
        console.log(error);
        return null;
      }
    } else if (this.origin === "mock") {
      const data = USER_ACTIVITY;
      const thisData = data.find((element) => (element.userId = this.id));
      return thisData.sessions;
    }
  }

  async getUserName(){

    if(this.origin === "api"){
      try{
const data= await  userApi(this.id)
if(!data.ok){
  throw new Error("Couldn't get user Data Info")
}
const name=  await data.data.userInfos.firstName;

console.log(console.log(Object.keys(data),name));
return name;
      }
      catch (error) {
        console.log(error);
        return null;
    }
  } else if (this.origin === "mock") {
const data=USER_MAIN_DATA;
const thisData = data.find((element) => (element.userId = this.id));
return thisData.userInfos.firstName;

  }
}

async getScore(){

  if(this.origin === "api"){
    try{
const data= await  userApi(this.id)
if(!data.ok){
throw new Error("Couldn't get user Data Info")
}
const todayScore=  await data.data.userInfos.todayScore;

console.log(console.log(Object.keys(data),todayScore));
return todayScore;
    }
    catch (error) {
      console.log(error);
      return null;
  }
} else if (this.origin === "mock") {
const data=USER_MAIN_DATA;
const thisData = data.find((element) => (element.userId = this.id));
return thisData.todayScore;

}
}
async getKeyData(){

  if(this.origin === "api"){
    try{
const data= await  userApi(this.id)
if(!data.ok){
throw new Error("Couldn't get user Data Info")
}
const keyData=  await data.data.userInfos.keyData;

console.log(console.log(Object.keys(data),keyData));
return keyData;
    }
    catch (error) {
      console.log(error);
      return null;
  }
} else if (this.origin === "mock") {
const data=USER_MAIN_DATA;
const thisData = data.find((element) => (element.userId = this.id));
return thisData.keyData;

}
}

async getPerformance(){
  if(this.origin === "api"){
    try{
const data= await  perfApi(this.id)
if(!data.ok){
throw new Error("Couldn't get user Data Info")
}
const performance=  await data.data;

console.log(console.log(Object.keys(data),performance));
return performance;
    }
    catch (error) {
      console.log(error);
      return null;
  }
} else if (this.origin === "mock") {
const data=USER_MAIN_DATA;
const thisData = data.find((element) => (element.userId = this.id));
return thisData;
}
}

async getAverageSessions(){
  if(this.origin === "api"){
    try{
const data= await  userApi(this.id)
if(!data.ok){
throw new Error("Couldn't get user Data Info")
}
const averageSession=  await data.data.sessions;

console.log(console.log(Object.keys(data),averageSession));
return averageSession;
    }
    catch (error) {
      console.log(error);
      return null;
  }
} else if (this.origin === "mock") {
const data=USER_AVERAGE_SESSIONS;
const thisData = data.find((element) => (element.userId = this.id));
return thisData.sessions;
}
}
}
