const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const input = document.getElementById("taskInput");
    const language = document.getElementById("language");
    const list = document.getElementById("taskList");
    const output = document.getElementById("result");
    
    const start = document.getElementById("start-btn");
    const stop = document.getElementById("stop-btn");
    const addbtn = document.getElementById("add-btn");

    const counter = document.getElementById("counter");


    let recognition;

    if(!SpeechRecognition){
    alert("your browser not support speach recognition");
    }else{
      recognition = new SpeechRecognition();
    
    recognition.continuous = true;
    recognition.interimResults = false;


    start.addEventListener("click" , () => {
    recognition.lang = language.value;

    recognition.start();
    output.innerText = "🎤 Listening...";

    });

    stop.addEventListener("click", () => {
        recognition.stop();
        output.innerText = "Stopped.......";

    });

recognition.onresult = (event) => {

const transcript = event.results[event.results.length - 1][0].transcript.trim();

input.value = transcript;
addTask(transcript);


};
}

function addTask(task){

if(task === "") return;

const li = document.createElement("li");

li.innerHTML = `
<span>${task}</span>
<div>
<input type="checkbox" class="check">
<button class="delete"><i class="bi bi-trash3"></i>
</button>
</div>
`;

list.appendChild(li);

input.value="";

const check=li.querySelector(".check")
const text=li.querySelector("span")
const del=li.querySelector(".delete")

check.addEventListener("change", () =>{
    text.classList.toggle("completed");
});


del.addEventListener("click", () =>{
    li.remove();
});
}
addbtn.addEventListener("click" , () =>{
    addTask(input.value);
});

input.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        addTask(input.value);
    }
});
