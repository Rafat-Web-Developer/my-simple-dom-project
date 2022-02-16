
function createPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return createPin();
    }
}

function showFieldValue(fieldId, getValue){
    const showField = document.getElementById(fieldId);
    showField.value = getValue;
}

function generatePin(){
    const pin = createPin();
    showFieldValue('showGeneratePin', pin);
}

document.getElementById('key').addEventListener('click', function (event){
    // console.log(event.target.innerText);
});