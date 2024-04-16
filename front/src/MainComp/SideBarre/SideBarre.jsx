
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import "./SideBarre.scss"

export function SideBarre(){


    return(
<div className="sideBarre">
  <div className="sideBarre__empty"></div>
<div className="sideBarre__wrapper">
  <nav className="sideBarre__wrapper__nav">
    <div className="sideBarre__wrapper__nav__logoContainer">
      <img
        src={logo1} alt='logo1'
        className="sideBarre__wrapper__nav__logoContainer__logo"
      ></img>
    </div>
    <div className="sideBarre__wrapper__nav__logoContainer">
      <img
        src={logo2} alt='logo2'
        className="sideBarre__wrapper__nav__logoContainer__logo"
      ></img>
    </div>
    <div className="sideBarre__wrapper__nav__logoContainer">
      <img
        src={logo3} alt='logo3'
        className="sideBarre__wrapper__nav__logoContainer__logo"
      ></img>
    </div>
    <div className="sideBarre__wrapper__nav__logoContainer">
      <img
        src={logo4} alt='logo4'
        className="sideBarre__wrapper__nav__logoContainer__logo"
      ></img>
    </div>
  </nav>
  <div className="sideBarre__wrapper__textContainer">
    Copyright SportSee 2020
  </div>
</div>
</div>
    )
}