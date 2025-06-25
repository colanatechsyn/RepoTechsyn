async function call_mic() {
    document.getElementById('audio_start_api').style.scale = "1.3";
    document.getElementById('audio_start_api').style.backgroundImage = "url('../src/assets/img/microfone_on.png')";
    
    const mic_audio = new Audio(mic_audio_link);
    mic_audio.play();

    const palavroes = [
        "...."
    ];

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert("Seu navegador não suporta reconhecimento de voz.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.interimResults = true;
    recognition.start();

    recognition.onresult = function(event) {
        const resultado = event.results[0][0].transcript;
        const resultado_formatado_symbols = resultado.replace(/[.,?!]/g, '');
        let resultado_formatado_PBC = resultado_formatado_symbols;

        palavroes.forEach(palavra => {
            resultado_formatado_PBC = resultado_formatado_PBC.replace(new RegExp(palavra, 'gi'), "*".repeat(palavra.length));
        });

        recognition.onend = function() {
            document.getElementById('audio_start_api').style.scale = "1";
            document.getElementById('audio_start_api').style.backgroundImage = "url('../src/assets/img/microfone.png')";
        };

        document.getElementById('search_barra').value = resultado_formatado_PBC;
    }
}

export default call_mic;
