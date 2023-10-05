function getFiledValueById (inputId){
    const inputFiled = document.getElementById(inputId);
    const inputString = inputFiled.value;
    const inputValue = parseFloat(inputString);
    return inputValue;
}

function setElementValueById (elementId, newValue){
    const setElementId = document.getElementById(elementId);
    setElementId.innerText = newValue + ' cm2';
}

