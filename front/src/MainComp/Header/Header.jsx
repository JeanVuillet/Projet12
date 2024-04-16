import logo from "../../assets/logo.svg";
import "./Header.scss";

import { BarGraph, TestComp } from "../../Graphs/BarGraph/BarGraph";

import { MainDiv } from "../MainDiv/MainDiv";

export function Header() {
  return (
    <header className="App__header">
      <div className="App__header__imgDiv">
      <img src={logo} className="App__header__imgDiv__img" alt="logo" />
      </div>
      <div className="App__header__nav">
      <a className="App__header__nav__link" href="">
        Accueil
      </a>
      <a className="App__header__nav__link" href="">
        {" "}
        Profil
      </a>
      <a className="App__header__nav__link" href="">
        {" "}
        Réglage
      </a>
      <a className="App__header__nav__link" href="">
        Communauté
      </a>
      </div>
    </header>
  );
}
