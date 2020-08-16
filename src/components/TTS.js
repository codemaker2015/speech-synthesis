import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function TTS() {
    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();

    return (
        <div>
            <h3>Text to speech</h3>
            <textarea
                rows="10"
                cols="100"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => speak({ text: value })}>Speak</button>
        </div>
    );
}

export default TTS;