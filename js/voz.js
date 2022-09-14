document.getElementById('voz_btn').addEventListener("click",()=>{

    falar(document.getElementById('texto_expo').innerHTML );
    console.log(document.getElementById('texto_expo').innerHTML )
});

function falar(texto) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = texto;
    msg.lang = "es-MX";
    msg.rate = 0.7;
    msg.pitch = 1;
    speechSynthesis.speak(msg);
}