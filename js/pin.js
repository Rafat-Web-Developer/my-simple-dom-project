
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
   const showKeyField =  document.getElementById('showKey');
   const value = showKeyField.value;
   if(event.target.innerText == 'c'){
        showKeyField.value = '';
   }else if(event.target.innerText == '<'){
        const l = value.length;
        const newString = value.substring(0, l - 1);
        showKeyField.value = newString; 
   }else if(showKeyField.value != ''){
        showKeyField.value = showKeyField.value + event.target.innerText;
   }else{
        showKeyField.value = event.target.innerText;
   }
});