document.getElementById('enterKey').addEventListener('click', function (event){
    const resultField = document.getElementById('result');
    const receivedValue = event.target.innerText;
    resultField.value = resultField.value + receivedValue;
});