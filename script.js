
const speakButton = document.getElementById('speak-btn');
const textInput = document.getElementById('text-input');


speakButton.addEventListener('click', () => {
    const text = textInput.value;

    if (text.trim() !== "") {
       
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    } else {
        alert("Please enter some text!");
    }
});
