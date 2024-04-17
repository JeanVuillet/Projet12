import { Header } from "./Header/Header.jsx";
import { MainDiv } from "./MainDiv/MainDiv.jsx";
import { SideBarre } from "./SideBarre/SideBarre.jsx";
import "./HomePage.scss";

export function HomePage() {
  return (
    <>
      <Header />
      <div className="homePage">
        <SideBarre />
        <MainDiv />
      </div>
    </>
  );
}
