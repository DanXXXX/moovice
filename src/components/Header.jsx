import React  from 'react';
import Navbar from './Navbar'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <h1 className="page__title">header</h1>
                <header className="header">
                    <Navbar />
                </header>
            </>    
         );
    }
}
 
export default Header;
