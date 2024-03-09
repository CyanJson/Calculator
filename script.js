const text = document.getElementById('text');

document.getElementById('one').addEventListener('click', () => {
    text.value += 1;
});

document.getElementById('two').addEventListener('click', () => {
    text.value += 2;
});

document.getElementById('three').addEventListener('click', () => {
    text.value += 3;
});

document.getElementById('four').addEventListener('click', () => {
    text.value += 4;
});

document.getElementById('five').addEventListener('click', () => {
    text.value += 5;
});

document.getElementById('six').addEventListener('click', () => {
    text.value += 6;
});

document.getElementById('seven').addEventListener('click', () => {
    text.value += 7;
});

document.getElementById('eight').addEventListener('click', () => {
    text.value += 8;
});

document.getElementById('nine').addEventListener('click', () => {
    text.value += 9;
});

document.getElementById('zero').addEventListener('click', () => {
    text.value += 0;
});

document.getElementById('decimal').addEventListener('click', () => {
    text.value += ".";
});

document.getElementById('division').addEventListener('click', () => {
    text.value += "/";
});

document.getElementById('multiplication').addEventListener('click', () => {
    text.value += "*";
});

document.getElementById('subtraction').addEventListener('click', () => {
    text.value += "-";
});

document.getElementById('addition').addEventListener('click', () => {
    text.value += "+";
});

document.getElementById('equal').addEventListener('click', () => {
    let result = eval(text.value);
    text.value = result;

    if(result === undefined){
        text.value = 0;
    }
});

document.getElementById('clear').addEventListener('click', () => {
    text.value = "";
});