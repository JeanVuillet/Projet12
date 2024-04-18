import { useState } from "react";
import "./SelectPage.scss";
import { User } from "../data/dataFormater.js";
import { useData } from "../data/DataProvider.jsx";

import { useNavigate } from "react-router-dom";

export function SelectPage() {
  const { setSharedData } = useData();

  let [origin, setOrigin] = useState(null);
  let [id, setUser] = useState(0);

  const navigate = useNavigate();
/**
 * cette fonction defini origin comme api
 */
  function selectApi() {
    setOrigin("api");
  }
  /**
 * cette fonction defini origin comme mock
 */
  function selectMock() {
    setOrigin("mock");
  }
  /**
 * cette fonction defini user comme 12
 */
  function select12() {
    setUser(12);
  }
    /**
 * cette fonction defini user comme 18
 */
  function select18() {
    setUser(18);
  }
  /**
   * Cette fonction cree un objet User avec en parametre origin et id
   * precedement definis et stockes
   * puis stock cet objet dans un useContext (sharedData)
   * puis envoie l utilisateur sur la page/homepage
   * 
   * dans le cas ou origin et id n ont pas ete selectionnes
   * l utilisateur est envoye sur la page d erreur 404
   */
  async function exeApp() {
    if (origin && id) {
      const TheUser = new User(origin, id);

      setSharedData(TheUser);

      navigate("/homepage");
    } else {
      navigate("/404");
    }
  }
  return (
    <div className="dataSelector">
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
            onClick={select18}
            style={{ border: `${id === 18 ? "solid 3px" : "none"}` }}
          >
            18
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
