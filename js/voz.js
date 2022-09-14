document.getElementById('voz_btn').addEventListener("click",()=>{

    falar(document.getElementById('texto_expo').innerHTML );
    console.log(document.getElementById('texto_expo').innerHTML )
});

function falar(texto) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}