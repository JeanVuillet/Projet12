import logo from "../assets/logo.svg";
import "./HeaderFooter.scss";

import { FirstGraph, TestComp } from "../Graphs/FirstGraph/FirstGraph";

import { MainDiv } from "./MainDiv/MainDIv";

export function HeaderFooter() {
  return (
    <div className="App">
      <header className="App__header">
        <img src={logo} className="App__header__img" alt="logo" />

        <a className="App__header__nav" href="">
          Acceuil
        </a>
        <a className="App__header__nav" href="">
          {" "}
          Profil
        </a>
        <a className="App__header__nav" href="">
          {" "}
          Réglage
        </a>
        <a className="App__header__nav" href="">
          Communauté
        </a>
      </header>


    </div>
  );
}
