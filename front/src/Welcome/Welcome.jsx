import { USER_MAIN_DATA } from "../data/data";


const data= USER_MAIN_DATA.find(element=>element.id===12);
function Welcome(){
    return(
        <div className="welcomDiv">
        <div className="bonjour">Bonjour <span>{data.userInfos.firstName}</span></div>
        <div className="bravo">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>
    )
};
export {Welcome};