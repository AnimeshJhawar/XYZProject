import React, { Component } from "react";
import { Slide } from "react-reveal";
import ReactDOM from "react-dom";
import Switch from "./Switch";
import Toggle from "./Toggle";
import Hello from "./ReportDetailed";
function App() { 
  return(null); 
}
const onToggle = state => {
};

class Reports extends Component {
  
   render() {
    if (!this.props.data) return null;
    
    return (
    <section id="reports">
        <h1><span>The Main Task</span></h1>
               <div className="row">
                  <Slide left duration={1000}>
                 <div className="eight columns">
                  <form action="" method="post" id="report" name="report">
                     <label htmlFor="Name">
                      Leader's Name <span className="required">*</span>
                     </label>
                     <input
                      type="text"
                      defaultValue=""
                      size="20"
                      id="Name"
                      name="Name"
                      onChange={this.handleChange}
                     />
                     <label htmlFor="Date">
                      Start Date* </label>
                     <input
                      type="date"
                      id="Date"
                      onChange={this.handleChange}
                     />
                     <label htmlFor="Date">
                      End Date* </label>
                     <input
                      type="date"
                      id="Date"
                      onChange={this.handleChange}
                     />
                     <label htmlFor="Duration">
                      No. of Lockdown Periods<span className="required">*</span>
                     </label>
                     <Hello/>
                     <label >Are you sure you want to submit?</label>
                     <input type="Submit"/>
                     </form>
                     </div>
                     <label>
                       <h3>We have researched everything
                         0% plagiarism from any source.
                       </h3>
                       <div className="App">
                         <Toggle onToggle = { onToggle }>
                         {({ on, onToggle }) => (
                          <div>
                           <Switch on={on} onSwitch={onToggle} />
                         </div>
                         )}
                        </Toggle>
                        </div>
                        </label>
                        <label>
                       <h3>please read and assure 
                         the above point again.
                       </h3>
                       <div className="App">
                         <Toggle onToggle = { onToggle }>
                         {({ on, onToggle }) => (
                          <div>
                           <Switch on={on} onSwitch={onToggle} />
                         </div>
                         )}
                        </Toggle>
                        </div>
                        </label>    
                     </Slide>
                     </div>
      </section> 
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default Reports;
