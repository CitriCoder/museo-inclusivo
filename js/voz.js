document.getElementById('voz_btn').addEventListener("click",()=>{

    falar(document.getElementById('texto_expo').innerHTML );
    console.log(document.getElementById('texto_expo').innerHTML )
});

function falar(texto) {
    var msg = new SpeechSynthesisUtterance(texto);
    var voices = window.speechSynthesis.getVoices();
    msg.volume = 1; // 0 to 1
    msg.rate = 0.7; // 0.1 to 10
    msg.pitch = 1; //0 to 2
    msg.lang = 'es-AR';
    speechSynthesis.speak(msg);
}