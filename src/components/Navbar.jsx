import React  from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        return ( 
           
                <div>
                    <nav className="navbar">
                        <ul className="navbar__ul">
                            <li className="navbar__ul-li">
                                <Link to="/" className="nav__link">Home</Link>
                            </li>
                            <li className="navbar__ul-li">
                                <Link to="/Popular" className="nav__link">Popular</Link>
                            </li>
                            <li className="navbar__ul-li">
                                <Link to="/PopularBattle" className="nav__link">Popular-battle</Link>
                            </li>
                            <li className="navbar__ul-li">
                                <Link to="/Weekly" className="nav__link">Weekly</Link>
                            </li>
                            <li className="navbar__ul-li">
                                <Link to="/WeeklyBattle" className="nav__link">Weekly-battle</Link>
                            </li>
                            <li className="navbar__ul-li">
                                <Link to="/Favorites" className="nav__link">Favorites</Link>
                            </li>
                        </ul>
                    </nav>   
                </div>  
         );
    }
}
export default Navbar;
