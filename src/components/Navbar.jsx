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
                                <Link to="/movie" className="nav__link">Movie</Link>
                            </li>

                            {/* <li className="navbar__ul-li">    
                                <Link to="*" className="nav__link">Error404</Link>
                            </li> */}
                                
                        </ul>
                    </nav>

                    
                </div>
            
         );
    }
}
 
export default Navbar;
