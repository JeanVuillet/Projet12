import { Header } from "./Header/Header.jsx";
import { MainDiv } from "./MainDiv/MainDiv.jsx";
import { SelectPage } from "./SelectPage/SelectPage.jsx";
import { SideBarre } from "./SideBarre/SideBarre.jsx";
import './MainComp.scss'

export function MainComp() {
  return (
    <>
      <SelectPage />
      <Header />
      <div className="mainComp">
        <SideBarre />
        <MainDiv />
      </div>
    </>
  );
}
