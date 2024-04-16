import logo from "../../assets/logo.svg";
import "./Header.scss";

export function Header() {
  return (
    <header className="App__header">
      <div className="App__header__imgDiv">
        <img src={logo} className="App__header__imgDiv__img" alt="logo" />
      </div>
      <div className="App__header__nav">
        <a className="App__header__nav__link" href="Accueil">
          Accueil
        </a>
        <a className="App__header__nav__link" href="Profil">
          {" "}
          Profil
        </a>
        <a className="App__header__nav__link" href="Reglage">
          {" "}
          Réglage
        </a>
        <a className="App__header__nav__link" href="Communaute">
          Communauté
        </a>
      </div>
    </header>
  );
}
