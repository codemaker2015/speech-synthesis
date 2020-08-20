import React from 'react';
import './App.css';
import TTSTest from './components/TTSTest';
import TTS from './components/TTS';
import STT from './components/STT';

function App() {
  
  return (
    <div className="App">
      <TTS/>
      <STT/>
      {/* <TTSTest msg="Hello World"/> */}
    </div>
  );
}

export default App;
