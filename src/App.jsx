import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./components/Home";
import Movie from "./components/Movie";
import Error404 from "./components/Error404";

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
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Movie" component={Movie} />
                        <Route path="*" component={Error404}/>
                    </Switch>
                </div>
          </BrowserRouter>
      </>
    );
  }
}

export default App;