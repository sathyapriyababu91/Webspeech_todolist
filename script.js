const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


if(!SpeechRecognition){
    alert("your browesr not support to speech recognition");
}else{
    const recognition = new SpeechRecognition();


    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-IN";

    const output = document.getElementById("result");
    const input = document.getElementById("taskInput");
    const language = document.getElementById("language");
    const list = document.getElementById("taskList");
    
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
        start.classList.remove("listening");
    });

    recognition.onresult = (e) => {
       const result = e.results[e.resultIndex];

       if(result.isFinal){
        const transcript = result[0].transcript.trim();

    
    output.innerText = transcript;
    input.value = transcript;
    

    const li = document.createElement("li");
        li.innerHTML = `${transcript}
        <button class="delete-btn">❌</button>`;
    
    
    list.appendChild(li);

        const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();



});
}       
};
}