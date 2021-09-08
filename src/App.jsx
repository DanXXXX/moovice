import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Navbar from './components/Navbar'
import Home from "./components/pages/Home";
import Popular from "./components/pages/Popular";
import PopularBattle from "./components/pages/PopularBattle";
import Weekly from "./components/pages/Weekly";
import WeeklyBattle from "./components/pages/WeeklyBattle";
import Favorites from "./components/pages/Favorites";
import Error404 from "./components/pages/Error404";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }
  render() { 
    return (  
      <>
        <h1>hello</h1>
          <BrowserRouter>
                <Navbar />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Popular" component={Popular} />
                        <Route path="/PopularBattle" component={PopularBattle} />
                        <Route path="/Weekly" component={Weekly} />
                        <Route path="/WeeklyBattle" component={WeeklyBattle} />
                        <Route path="/Favorites" component={Favorites} />
                        <Route path="*" component={Error404}/>
                    </Switch>
                </div>
          </BrowserRouter>
      </>
    );
  }
}

export default App;