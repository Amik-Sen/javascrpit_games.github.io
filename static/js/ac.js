function reset(){
    location.reload();
}
function agecalc(){

    var yr = prompt(" Please Enter your year of birth");
    var age = (2021-yr)*365;
    var h1 = document.createElement('h1');
    var output_text = document.createTextNode('You are '+age+' days old');
    h1.setAttribute('id','result_text_output');
    h1.appendChild(output_text);
    document.getElementById('result_text').appendChild(h1);
}

