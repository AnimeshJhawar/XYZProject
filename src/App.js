import React from "react";
import "./App.css";
import { Header } from "./Components/Header/index";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ParticleBg } from "./Components/ParticleBg";


export const App = () => {
   
    return (
      <Router>
        <div>
          <Header />
          <Switch  >
            <Route path="/home" children={<ParticleBg />} />
            
          </Switch>
          {/* <About />
          <Reports  />
          <Contact  />
          <Footer  /> */}
        </div>
      </Router>
    );
  
}

export default App;
