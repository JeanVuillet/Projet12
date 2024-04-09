
import { Header } from "./Header/Header.jsx"
import { MainDiv } from "./MainDiv/MainDiv.jsx"
import { SideBarre } from "./SideBarre/SideBarre.jsx"

export function MainComp(){

    return(
        <>
<Header/>
<div className="main">
<SideBarre/>
<MainDiv/>
</div>
</>
    )
}