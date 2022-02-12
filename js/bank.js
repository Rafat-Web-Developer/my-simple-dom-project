function getInputData(fieldId){
    const field = document.getElementById(fieldId);
    const fieldValue = field.value;
    const amount = parseFloat(fieldValue);
    
    // //--clear field--//
    field.value = '';
    return amount;
}

function getElementData(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const amount = parseFloat(elementValue);
    return amount;
}

function addIndividualAmount(elementId ,currentAmount, newInputAmount){
    const element = document.getElementById(elementId);
    const totalAmount = currentAmount + newInputAmount;
    element.innerText = totalAmount;
}

function totalBalance(elementId, currentTotalAmount, newInputAmount, checkDepositOrNot){
    const element = document.getElementById(elementId);
    if(checkDepositOrNot == true){
        const totalAmount = currentTotalAmount + newInputAmount;
        element.innerText = totalAmount;
    }else{
        const totalAmount = currentTotalAmount - newInputAmount;
        element.innerText = totalAmount;
    }
}

document.getElementById('depositBtn').addEventListener('click', function () {
    const depositAmount = getInputData('deposit_amount');
    const currentDepositAmount = getElementData('current_deposit');
    const currentTotalAmount = getElementData('current_total_balance');
    addIndividualAmount('current_deposit', currentDepositAmount, depositAmount);
    totalBalance('current_total_balance', currentTotalAmount, depositAmount, true);
});

document.getElementById('withdrawBtn').addEventListener('click', function () {
    const withdrawAmount = getInputData('withdraw_amount');
    const currentWithdrawAmount = getElementData('current_withdraw');
    const currentTotalAmount = getElementData('current_total_balance');
    addIndividualAmount('current_withdraw', currentWithdrawAmount, withdrawAmount);
    totalBalance('current_total_balance', currentTotalAmount, withdrawAmount, false);
});