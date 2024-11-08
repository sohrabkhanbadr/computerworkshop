function addToDsiplay(elem) {
    document.getElementById('calcDisplay').value += elem;
    
}

function calculateFunc() {
    document.getElementById('calcDisplay').value = eval(document.getElementById('calcDisplay').value)
    
}