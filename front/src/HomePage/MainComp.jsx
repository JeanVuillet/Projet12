import { Header } from "./Header/Header.jsx";
import { MainDiv } from "./MainDiv/MainDiv.jsx";
import { SideBarre } from "./SideBarre/SideBarre.jsx";
import "./MainComp.scss";

export function MainComp() {
  return (
    <>
      <Header />
      <div className="mainComp">
        <SideBarre />
        <MainDiv />
      </div>
    </>
  );
}
