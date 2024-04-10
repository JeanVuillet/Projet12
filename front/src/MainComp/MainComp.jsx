import { Header } from "./Header/Header.jsx";
import { MainDiv } from "./MainDiv/MainDIv.jsx";
import { SelectPage } from "./SelectPage/SelectPage.jsx";
import { SideBarre } from "./SideBarre/SideBarre.jsx";

export function MainComp() {
  return (
    <>
      <SelectPage />
      <Header />
      <div className="main">
        <SideBarre />
        <MainDiv />
      </div>
    </>
  );
}
