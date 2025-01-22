const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang ="en-US"
const btn = document.querySelector("#btn")
btn.addEventListener("click",()=>{
    
    //converting text to voice//
    function speak(text){
const abc = new SpeechSynthesisUtterance(text)
window.speechSynthesis.speak(abc);
    }
    function handleCommands(command){
        if(command.includes("open youtube")){
            speak("opening youtube...")
            window.open("https://www.youtube.com","_blank");
        }else if(command.includes("open facebook")){
            speak("opening facebook...")
            window.open("https://www.facebook.com","_blank");
        }else if(command.includes("open instagram")){
            speak("opening instagram...")
            window.open("https://www.instagram.com","_blank");
    }else if(command.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("https://www.whatsapp.com","_blank")}
    else{
        speak("Searching on google...");
        window.open(
            `https://www.google.com/search?q=${encodeURIComponent(command)}`,
            "_blank"
          );
    }
    }
    speak("Hello, how can I help you")
    setTimeout(()=>{
        btn.innerHTML = "Listening..."
        btn.computedStyleMap.backgroundColor = "red"
        recognition.start()
    },2000);

    recognition.onresult = (event)=>{
const command = event.results[0][0].transcript.toLowerCase();
handleCommands(command)
    };
    recognition.onend = ()=>{
        btn.innerHTML = "🎙️start listening!"
        btn.computedStyleMap.backgroundColor = "none"   
    }
});
