import {NavLink} from "react-router-dom";
import './Navigation.css'
interface Routes {
    'Home':string,
    'Products':string
    'About us':string
    'Cart':string
}
const Navigation = () =>{
  const listItems:string[] = ['Home','Products','About us','Cart']
    const routes :Routes = {'Home':'','Products':'Products','About us':'About','Cart':'Cart'}
  return (
      <header>
          <div className="header__wrapper">
              <nav className="header__nav">
                  <div className="header__logo-wrapper">
                      <h1 className="header__logo">Avion</h1>
                  </div>
                  <div className="header__list-wrapper">
                      <ul className="header__list">
                          {listItems.map((el)=>{
                              return (
                                  <li key={el} className="header__list-item">
                                      <NavLink to={`/${routes[el]}`}>{el}</NavLink>
                                  </li>
                              )
                          })}
                      </ul>
                  </div>
              </nav>
          </div>
      </header>
  )
};

export default Navigation