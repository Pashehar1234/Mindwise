import { useEffect, useState } from "react"
import SpeechRecognition from "react-speech-recognition"


let recognition = null
if ("webkitSpeechRecongnition" in window) {
  recognition = new SpeechRecognition()
  recognition.continuous = true
  recognition.lang = "en-US"
}

const useSpeechRecognition = () => {
  const [text, setText] = useState("")
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    if (!recognition) return
    recognition.onresult = event => {
      console.log("onresult event: ", event)
      setText(event.results[0][0].transcript)
      recognition.stop()
      setIsListening(false)
    }
  }, [])

  const startListening = () => {
    setText("")
    setIsListening(true)
    recognition.start()
  }

  const stopListening = () => {
    setIsListening(false)
    recognition.stop()
  }

  return {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recognition
  }
}

export default useSpeechRecognition;