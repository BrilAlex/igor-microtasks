import React from 'react';
import './App.css';
import {MicroTask01} from "./mircotasks/01_child_components/MicroTask01";
import {MicroTask02} from "./mircotasks/02_method_map/MicroTask02";
import {MicroTask03} from "./mircotasks/03_Button/Microtask03";
import {MicroTask04} from "./mircotasks/04_useState/Microtask04";
import {MicroTask05} from "./mircotasks/05_method_filter/MicroTask05";
import {MicroTask06} from "./mircotasks/06_input/MicroTask06";

function App() {
  return (
    <div style={{padding: "20px"}}>
      <MicroTask01/>
      <hr/>
      <MicroTask02/>
      <hr/>
      <MicroTask03/>
      <hr/>
      <MicroTask04/>
      <hr/>
      <MicroTask05/>
      <hr/>
      <MicroTask06/>
    </div>
  );
}

export default App;
