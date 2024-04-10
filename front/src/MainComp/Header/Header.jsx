import logo from "../../assets/logo.svg";
import "./Header.scss";

import { BarGraph, TestComp } from "../../Graphs/BarGraph/BarGraph";

import { MainDiv } from "../MainDiv/MainDIv";

export function Header() {
  return (
    <header className="App__header">
      <img src={logo} className="App__header__img" alt="logo" />

      <a className="App__header__nav" href="">
        Accueil
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
  );
}
