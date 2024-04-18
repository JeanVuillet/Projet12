import { useState, useEffect } from "react";

import { useData } from "../../../data/DataProvider";
import "./Welcome.scss";

function Welcome() {
  const { sharedData } = useData();
  var [userData, setUserData] = useState();

  useEffect(() => {
    /**
     * cette fonction recupere les donnes et les stock dans userData
     */
    async function setName() {
      if (sharedData) {
        const data = await sharedData.getUserName();
        setUserData(data);
      }
    }
    setName();
  }, [sharedData]);

  return (
    <div className="welcomDiv">
      <div className="bonjour">
        Bonjour <span className="name">{userData ? userData : "Roberto"}</span>
      </div>
      <div className="bravo">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </div>
  );
}
export { Welcome };
