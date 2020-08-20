import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import speech from 'speech-js';


class TTS extends React.Component {

    speak(msg){
        speech.synthesis(msg, 'en-US')
    }

    text() {
        const recognition = speech.recognition('en-US') // speech recognition module
        recognition.continuous = true;
        recognition.start()

        recognition.onresult = e => {
            console.log(e.results)
        let result = e.results[0][0].transcript
        speech.synthesis(result, 'en-US')
        }
    }

    // speak(msg) {
    //     let utterance = new SpeechSynthesisUtterance(msg);
    //     speechSynthesis.speak(utterance);
    // }

    render(){
    return (
        <div>
            <h3>Text to speech</h3>
         
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() =>  this.speak("Please wait to load posenet")}>Speak</button>
            <button onClick={() =>  this.text()}>Text</button>
            
        </div>
    )
    }
}

export default TTS;

