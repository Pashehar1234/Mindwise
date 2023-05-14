import React from "react";
import useSpeechRecognition  from "../hooks/useSpeechRecognitionHooks";

const Main  = () => {
    const { 
        text , 
        startListening , 
        stopListening , 
        isListening ,
        hasRecognitionSupport,
    } = useSpeechRecognition();


    return(
        <div>
            { hasRecognitionSupport ? (
                <>
                    <div>
                        <button onClick={startListening}> Start Listening </button>
                    </div>

                    <div>
                        <button onClick={stopListening}> Stop Listening </button>
                    </div>

                    {isListening ? (
                        <div>
                            Your browser is currently listening
                        </div>
                    ) : null}

                    {text}
                </>
            ): (
                <>
                    <div>
                        <button onClick={startListening}> Start Listening </button>
                    </div>

                    <div>
                        <button onClick={stopListening}> Stop Listening </button>
                    </div>

                    {isListening ? (
                        <div>
                            Your browser is currently listening
                        </div>
                    ) : null}

                    {text}
                </>
            )}
        </div>
    );
};

export default Main;