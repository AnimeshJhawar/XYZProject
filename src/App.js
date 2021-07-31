import React from "react";
import { Header } from "./Components/Header/index";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ParticleBg } from "./Components/ParticleBg";
import { Form } from "./Components/Form";
import { Home } from "./Components/Home";


export const App = () => {
   
    return (
      <Router>
        <div>
          <Header />
          <Switch  >
            <Route path="/home" children={<ParticleBg children={<Home />} />} />
            <Route path="/tool" children={<ParticleBg children={<Form />} />} />
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
