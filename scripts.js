var preview = document.querySelector('#currentPreview');
var previousOperation = document.querySelector('#previousOperation');
preview.disabled = true;

function takeNumber(number){
    preview.value +=  number;

    if(preview.value.length >= 26){
        previousOperation.textContent = 'Hey, take it easy on me man ;-;'
        previousOperation.classList.add('previousOp-in');
        preview.value =preview.value.substring(0, preview.value.length -1);        
    }
}

function clearPreview(){
    preview.value = '';
    previousOperation.classList.remove('previousOp-in');
}

function delPreview(){
    preview.value = preview.value.substring(0, preview.value.length -1);
}

function showResult(){
    previousOperation.textContent = preview.value;
    previousOperation.classList.add('previousOp-in');
    preview.value = eval(preview.value);    
}