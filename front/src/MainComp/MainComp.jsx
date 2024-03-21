import logo from '../assets/logo.svg'
import './MainComp.scss'
import logo1 from'../assets/logo1.svg'
<assets />


function MainComp() {
  return (
    <div className="App">
      <header className="App__header">
      
        <img src={logo} className="App__header__img" alt="logo" />
   
 
        <a
          className="App__header__nav"
          href=""
    
        >
          Acceuil
        </a>
        <a
        className="App__header__nav"
        href=''
        > Profil</a>
                <a
   className="App__header__nav"
   href=''
        > Réglage</a>
                <a
         className="App__header__nav"
         href=''
        >Communauté</a>

      </header>
      <div className='App__sideBarre'>
        <div className='App__sideBarre__wrapper'>
          <nav className='App__sideBarre__wrapper__nav'>
            <div className='App__sideBarre__nav__logoContainer'>
            <img src={logo1} className='App__sideBarre__nav__logoContainer__logo'></img>
            </div>
            <div className='App__sideBarre__nav__logoContainer'>
            <img src={logo1} className='App__sideBarre__nav__logoContainer__logo'></img>
            </div>
            <div className='App__sideBarre__nav__logoContainer'>
            <img src={logo1} className='App__sideBarre__nav__logoContainer__logo'></img>
            </div>
            <div className='App__sideBarre__nav__logoContainer'>
            <img src={logo1} className='App__sideBarre__nav__logoContainer__logo'></img>
            </div>
          </nav>
          <div className='App__sideBarre__wrapper__textContainer'>
          Copyright SportSee 2020
          </div>

        </div>
      </div>
    </div>
  );
}

export default MainComp;
