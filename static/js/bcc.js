function reset(){
    location.reload();
}

var button = document.getElementsByTagName('button');

var defaultButtoncolor = [];

for(let i=0; i<button.length; i++){
    defaultButtoncolor.push(button[i].classList[1]);
}

function bcc(choice){
    if(choice.value == 'red'){
        redButton();
    }
    else if(choice.value == 'blue'){
        blueButton();
    }
    else if(choice.value == 'green'){
        greenButton();
    }
    else if(choice.value == 'yellow'){
        yellowButton();
    }
    else if(choice.value == 'light'){
        lightButton();
    }
    else if(choice.value == 'dark'){
        darkButton();
    }
    else if(choice.value == 'random'){
        randomButton();
    }
    else if(choice.value == 'normal'){
        normalButton();
    }
}

function redButton(){
    for(let i=0; i<button.length; i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add('btn-danger');
    }
}

function blueButton(){
    for(let i=0; i<button.length; i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add('btn-primary');
    }
}

function greenButton(){
    for(let i=0; i<button.length; i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add('btn-success');
    }
}

function yellowButton(){
    for(let i=0; i<button.length; i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add('btn-warning');
    }
}

function lightButton(){
    for(let i=0; i<button.length; i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add('btn-light');
    }
}

function darkButton(){
    for(let i=0; i<button.length; i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add('btn-dark');
    }
}

function normalButton(){
    for(let i=0; i<button.length; i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add(defaultButtoncolor[i]);
    }
}

function randomButton(){
    for(let i=0; i<button.length; i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add(defaultButtoncolor[Math.floor(Math.random()*button.length)]);
    }
}