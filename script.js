const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


if(!SpeechRecognition){
    alert("your browesr not support to speech recognition");
}else{
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-In';

    const output = document.getElementById("result");
    const input = document.getElementById("taskInput")
    const language = document.getElementById("language")
    const list = document.getElementById("tasklist")
    
    const start = document.getElementById("start-btn");
    const stop = document.getElementById("stop-btn");

    start.addEventListener("click", () =>{
        
        recognition.lang = language.value;
        recognition.start();
        output.innerText = "Listening.....";
        start.classList.add("listening");
    });

    stop.addEventListener("click" , () => {
        recognition.stop();
        start.classList.add("listening");
    });

    recognition.onresult = (e) => {
        let transcript = "";

        for(let i = e.resultIndex; i < e.results.length; i++){
            transcript += e.results[i][0].transcript;   
        }
    
    output.innerText = transcript;
    input.value = transcript;

    const li = document.createElement("li");
    li.innerText = transcript;
    
    list.appendChild(li);


}

}
