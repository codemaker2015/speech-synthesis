import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

function STT() {
  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    <div>
      <h3>Speech to text</h3>
      <textarea
        rows="10"
        cols="100"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onMouseDown={listen} onMouseUp={stop}>
        🎤
      </button>
      {listening && <div>Go ahead I'm listening</div>}
    </div>
  );
}

export default STT;