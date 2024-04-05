
import { useState } from 'react'
import './DataSelector.scss'

export function DataSelector(){

let [data, setData]=useState(null);
let [user, setUser]=useState(null);
// let[dataOption, setDataOption]=useState(null)
// let[userOption, setUserOption]=useState(null)

function selectApi(){
    setData('api');

}
function selectMock(){
    setData('mock')
}
function select12(){
    setUser(12)
}
function select13(){
    setUser(13)
}
function exeApp(){

}
    return(
        <div className="dataSelector">
           <div className="dataDiv">
            <div className="dataTxt">select your data</div>
            <div className="dataOptions">
                <div className="api" onClick={selectApi}   style= {{border:`${data==='api'? 'solid 3px':'none'}`}}>api</div>
                <div className="mock" onClick={selectMock}  style={{border: `${data==='mock'? 'solid 3px':'none'}`}}>mock</div>
            </div>
            </div>

            <div className="userDiv">
                <div className="userTxt">select your user</div>
                    <div className="userOptions">
                    <div className="user12" onClick={select12} style= {{border:`${user===12? 'solid 3px':'none'}`}}>12</div>
                    <div className="user13" onClick={select13} style= {{border:`${user===13? 'solid 3px':'none'}`}}>13</div>
                </div>
            </div>
     
                <div className="live">
                <button className='liveButton' onCanPlay={exeApp}>got live</button>
                    </div>


        </div>

    )
}