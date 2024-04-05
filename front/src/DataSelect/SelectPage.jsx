import { useState } from "react";
import "./DataSelector.scss";
import { User } from "../FormatData/dataFormater.js";

import { userObject } from "../Graphs/FirstGraph/FirstGraph.jsx";

export function SelectPage() {
  let [data, setData] = useState(null);
  let [user, setUser] = useState(0);

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
  function exeApp() {
    User.type = data;
    User.id = user;
    console.log("user type is" + User.type, "userDatais" + User.id);
  }
  return (
    <div className="dataSelector">
      <div className="dataDiv">
        <div className="dataTxt">select your data</div>
        <div className="dataOptions">
          <div
            className="api"
            onClick={selectApi}
            style={{ border: `${data === "api" ? "solid 3px" : "none"}` }}
          >
            api
          </div>
          <div
            className="mock"
            onClick={selectMock}
            style={{ border: `${data === "mock" ? "solid 3px" : "none"}` }}
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
            style={{ border: `${user === 12 ? "solid 3px" : "none"}` }}
          >
            12
          </div>
          <div
            className="user13"
            onClick={select13}
            style={{ border: `${user === 13 ? "solid 3px" : "none"}` }}
          >
            13
          </div>
        </div>
      </div>

      <div className="live">
        <button className="liveButton" onClick={exeApp}>
          got live
        </button>
      </div>
    </div>
  );
}
