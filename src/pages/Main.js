import React, { useEffect } from "react"
import SpeechRecognition , { useSpeechRecognition } from "react-speech-recognition"

const main = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  if ( !browserSupportsSpeechRecognition ){
    return <span> <h1>Your browser doesn't support speech recognition </h1></span>
  }

  const listencontinuosly = () => {
    SpeechRecognition.startListening({
        continuous: true,
        language: 'en-GB'
    })
  }

  return (
    <div>
        <p>Microphone: {listening ? 'on' : 'off' }</p>
        <button onClick={listencontinuosly}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
    </div>
  )
}

export default main;