import { useState } from "react";
import "./DataSelector.scss";
import { User } from "../FormatData/dataFormater.js";
import { useData } from "../DataProvider/DataProvider.jsx";

import { userObject } from "../Graphs/FirstGraph/FirstGraph.jsx";

export function SelectPage() {

  const { sharedData, setSharedData } = useData();

  let [origin, setData] = useState(null);
  let [id, setUser] = useState(0);
  let [visible, setVisible]= useState(true);

  function selectApi() {
    setData("api");
  }
  function selectMock() {
    setData("mock");
  }
  function select12() {
    setUser(12);
  }
  function select13() {
    setUser(13);
  }
   async function exeApp() {
   const  TheUser= new User(origin, id)
   const methode=  await TheUser.getActivity();
    console.log("user type is" + TheUser.origin, "userDatais" + methode);
    setSharedData(TheUser)
    setVisible('none');
  }
  return (
    <div className="dataSelector" style={{display:`${visible}`}}>
      <div className="dataDiv">
        <div className="dataTxt">select your data</div>
        <div className="dataOptions">
          <div
            className="api"
            onClick={selectApi}
            style={{ border: `${origin === "api" ? "solid 3px" : "none"}` }}
          >
            api
          </div>
          <div
            className="mock"
            onClick={selectMock}
            style={{ border: `${origin === "mock" ? "solid 3px" : "none"}` }}
          >
            mock
          </div>
        </div>
      </div>

      <div className="userDiv">
        <div className="userTxt">select your user</div>
        <div className="userOptions">
          <div
            className="user12"
            onClick={select12}
            style={{ border: `${id === 12 ? "solid 3px" : "none"}` }}
          >
            12
          </div>
          <div
            className="user13"
            onClick={select13}
            style={{ border: `${id === 13 ? "solid 3px" : "none"}` }}
          >
            13
          </div>
        </div>
      </div>

      <div className="live">
        <button className="liveButton" onClick={exeApp}>
          go live
        </button>
      </div>
    </div>
  );
}
