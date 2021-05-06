function reset(){
    location.reload();
}
function play(yourChoice){
    var bot_choice = ["r","p","s"][Math.floor(Math.random()*3)];
    var score = decide_winner(bot_choice,yourChoice.id);
    display(score,yourChoice.id,bot_choice);
}
function decide_winner(bot_choice,yourChoice) {
    if (bot_choice ==yourChoice){
        return 0.5;
    }
    if(bot_choice =="r" && yourChoice =="p"){
        return 1;
    }
    if(bot_choice =="p" && yourChoice =="r"){
        return 0;
    }
    if(bot_choice =="s" && yourChoice =="p"){
        return 0;
    }
    if(bot_choice =="p" && yourChoice =="s"){
        return 1;
    }
    if(bot_choice =="s" && yourChoice =="r"){
        return 1;
    }
    if(bot_choice =="r" && yourChoice =="s"){
        return 0;
    }
}

function display(score,yourChoice,bot_choice){
    var images = {'r':document.getElementById('r').src,
            'p':document.getElementById('p').src,
            's':document.getElementById('s').src
        };
    document.getElementById('r').remove();
    document.getElementById('p').remove();
    document.getElementById('s').remove();

    var human = document.createElement('div');
    var message = document.createElement('div');
    var bot = document.createElement('div');

    human.setAttribute('class','col-sm text-center');
    message.setAttribute('class','col-sm text-center');
    bot.setAttribute('class','col-sm text-center');

    human.innerHTML ="<img src = '"+images[yourChoice]+"' style = 'box-shadow: 0px 10px 50px rgba(37,50,233,1); margin: 50px;'>";
    bot.innerHTML ="<img src = '"+images[bot_choice]+"' style = 'box-shadow: 0px 10px 50px rgba(243,38,24,1);margin: 50px;'>";
    if(score==1){
        message.innerHTML ="<h1 style='color: Green; font-size:60px; padding:30px; margin-top:10px;'>You Won!</h1>";
    }
    else if(score==0){
        message.innerHTML ="<h1 style='color: Red; font-size:60px; padding:30px; margin-top:30px;'>You Lost!</h1>";
    }
    else{
        message.innerHTML ="<h1 style='color: Yellow; font-size:60px; padding:30px; margin-top:30px;'>You Tied!</h1>";
    }
    document.getElementById('rps-row').appendChild(human);
    document.getElementById('rps-row').appendChild(message);
    document.getElementById('rps-row').appendChild(bot);
}