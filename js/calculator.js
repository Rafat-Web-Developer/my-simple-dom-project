document.getElementById('enterKey').addEventListener('click', function (event){
    const resultField = document.getElementById('result');
    const receivedValue = event.target.innerText;
    // if(receivedValue == '='){
        
    // }else if(receivedValue == '+'){

    // }else if(receivedValue == '-'){

    // }else if(receivedValue == '/'){

    // }else if(receivedValue == 'x'){

    // }else{

    // }
    resultField.value = resultField.value + receivedValue;

});