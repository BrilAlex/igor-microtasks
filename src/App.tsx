import React from 'react';
import './App.css';
import {MicroTask01} from "./mircotasks/01_child_components/MicroTask01";
import {MicroTask02} from "./mircotasks/02_method_map/MicroTask02";
import {MicroTask03} from "./mircotasks/03_Button/Microtask_03";
import {MicroTask04} from "./mircotasks/04_useState/Microtask_04";

function App() {
  return (
    <>
      <MicroTask01/>
      <hr/>
      <MicroTask02/>
      <hr/>
      <MicroTask03/>
      <hr/>
      <MicroTask04/>
      <hr/>
    </>
  );
}

export default App;
