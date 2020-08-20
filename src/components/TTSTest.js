import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function TTS(props) {
    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();
  
    return (
        <div>
            {speak({text: props.msg})}
        </div>
    );
}

export default TTS;
