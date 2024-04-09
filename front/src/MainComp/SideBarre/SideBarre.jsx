
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";

function SideBarre(){


    return(
<div className="App__sideBarre">
<div className="App__sideBarre__wrapper">
  <nav className="App__sideBarre__wrapper__nav">
    <div className="App__sideBarre__nav__logoContainer">
      <img
        src={logo1} alt='logo1'
        className="App__sideBarre__nav__logoContainer__logo"
      ></img>
    </div>
    <div className="App__sideBarre__nav__logoContainer">
      <img
        src={logo2} alt='logo2'
        className="App__sideBarre__nav__logoContainer__logo"
      ></img>
    </div>
    <div className="App__sideBarre__nav__logoContainer">
      <img
        src={logo3} alt='logo3'
        className="App__sideBarre__nav__logoContainer__logo"
      ></img>
    </div>
    <div className="App__sideBarre__nav__logoContainer">
      <img
        src={logo4} alt='logo4'
        className="App__sideBarre__nav__logoContainer__logo"
      ></img>
    </div>
  </nav>
  <div className="App__sideBarre__wrapper__textContainer">
    Copyright SportSee 2020
  </div>
</div>
</div>
    )
}