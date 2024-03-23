import React from "react";

import SoundPlayPane from "./components/panes/SoundPlayPane";
import SoundStorePane from "./components/panes/SoundStorePane";

import SoundState from "./context/sound/SoundState";
import "./App.css";

const App = () => {
  return (
    <SoundState>
      <div id="drum-machine">
        <div className="title">Soundblaster 3000</div>
        <div className="panes">
          <SoundPlayPane />
          <SoundStorePane />
        </div>
      </div>
    </SoundState>
  );
};

export default App;
