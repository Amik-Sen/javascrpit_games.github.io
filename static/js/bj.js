function reset(){
    location.reload();
}

// Modifying the front end when game starts 
function modifyonce(){
    document.getElementById('rh').remove();
    yourtable = document.createElement('div');
    dealertable = document.createElement('div');
    yourtable.setAttribute('id','yourTable');
    dealertable.setAttribute('id','dealerTable');
    yourtable.setAttribute('class','col-sm text-center');
    dealertable.setAttribute('class','col-sm text-center');
    yourtable.setAttribute('style','border: 3px solid white; justify-content: center;margin: 10px; flex-wrap: wrap;');
    dealertable.setAttribute('style','border: 3px solid white; justify-content: center;margin: 10px; flex-wrap: wrap;');
    document.getElementById('bjtable').appendChild(yourtable);
    document.getElementById('bjtable').appendChild(dealertable);
    document.getElementById('bjtable').style.height = null; 
}
let count = 0;
var feCleared = false;

const hit_sound = new Audio('static/sounds/swish.m4a');
const lose_sound = new Audio('static/sounds/aww.mp3');
const win_sound = new Audio('static/sounds/cash.mp3');

let stand_status = false;

let active_player = {
    'you':{'score': 0, 'divId': 'yourTable', 'ace':0,
    'htmlScoreId':'player_score','htmlInner':'Your Score: ',},
    'dealer':{'score': 0, 'divId': 'dealerTable', 'ace':0,
    'htmlScoreId':'dealer_score','htmlInner':'Dealer\'s Score: '},
}


// Hit button Function
function hit(){
    
    if(stand_status == false)
    addcard(active_player.you);
    if(count<=3)
    addcard(active_player.dealer);
}

// adding a card to dealer or player
function addcard(player){
    if(feCleared == false ){
        modifyonce();
        feCleared = true;
    }
    document.getElementById('bjtable').style.height = null;
    let card = document.createElement('img');
    let suit = ['C','D','H','S'][Math.floor(Math.random()*4)];
    let number = ['2','3','4','5','6','7','8','9','10','A','J','K','Q'][Math.floor(Math.random()*13)];
    if(player.divId == 'dealerTable' && count == 3){
        card.src = 'static/images/bj/deck/Gray_back.jpg';
        card.setAttribute('style','height:200;margin: 5px');
        card.setAttribute('id','back_card');
        document.getElementById(player.divId).appendChild(card);
        count++;
        hit_sound.play();
    }
    else if(player.score<21){
        if((player.divId == 'dealerTable' && (stand_status == true||count<3))||player.divId == 'yourTable'){
            card.src = 'static/images/bj/deck/'+number+suit+'.jpg';
            card.setAttribute('style','height:200;margin: 5px');
            document.getElementById(player.divId).appendChild(card);
            count++;
            hit_sound.play();
            update_score(number,player); // to update the score
            if(player.score==21){
                document.getElementById(player.htmlScoreId).innerHTML = 'BLACK JACK';
                document.getElementById(player.htmlScoreId).style.color = 'black';
                if(player.divId== 'yourTable'){
                    win_sound.play();
                    table_update();
                }
            }
            else if(player.score>21){
                document.getElementById(player.htmlScoreId).innerHTML = 'BUSTED';
                document.getElementById(player.htmlScoreId).style.color = 'red';
                if(player.divId== 'yourTable'){
                    lose_sound.play();
                    table_update();
                }
                else{
                    win_sound.play();
                }
            }
        }
        
    }
    console.log(count);
}
let card_score = {
    '2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'A':[1,11],'J':10,
    'K':10,'Q':10,
};



// Function to update score
function update_score(number,player){
    if(number =='A'){
        if(player.score+card_score[number][1]<21){
            player.score+=11;
        }
        else if(player.score+card_score[number][1]==21){
            player.score+=11;
        }
        else{
            player.score+=1;
            player.ace--;
        }
        player.ace++;
    }
    else{
        if(player.score+card_score[number]>21 && player.ace>0){
            player.ace--;
            player.score+=card_score[number]-10;
        }
        else{
            player.score+=card_score[number];
        }
    }
    document.getElementById(player.htmlScoreId).innerHTML = player.htmlInner +player.score;
}
function sleep(){
    return new Promise(resolve => setTimeout(resolve, 500));
}
async function stand(){
    stand_status = true;
    document.getElementById('back_card').remove();
    while((active_player.dealer.score<=17 && active_player.dealer.score<active_player.you.score)||count==4){
        addcard(active_player.dealer);
        await sleep();
    }

    table_update();
}

// Function to deal or walk out
function deal(){
    stand_status = false;
    count = 0;
    let yourcards = document.querySelector('#yourTable').querySelectorAll('img');
    for(let i=0;i<yourcards.length;i++){
        yourcards[i].remove();
    }
    let dealercards = document.querySelector('#dealerTable').querySelectorAll('img');
    for(let i=0;i<dealercards.length;i++){
        dealercards[i].remove();
    }
    document.getElementById('bjtable').style.height = '200px';
    document.getElementById('player_score').innerHTML = 'Your Score: 0';
    document.getElementById('dealer_score').innerHTML = 'Dealer\'s Score: 0';
    active_player.you.score = 0;
    active_player.dealer.score = 0;
    active_player.you.ace = 0;
    active_player.dealer.ace = 0;
    document.getElementById(active_player.you.htmlScoreId).style.color = 'white';
    document.getElementById(active_player.dealer.htmlScoreId).style.color = 'white';
}
let win=0;
let loss=0;
let draw=0;
function table_update(){
    if((active_player.dealer.score < active_player.you.score || active_player.dealer.score>21) && active_player.you.score <=21 ){
        if(active_player.you.score!=21){
            document.getElementById(active_player.you.htmlScoreId).innerHTML = 'You Won !!';
            document.getElementById(active_player.you.htmlScoreId).style.color = 'dark green';
            win_sound.play();
        }
        win++;
        document.getElementById('win').innerHTML = win;

    }
    else if(active_player.dealer.score == active_player.you.score){
        document.getElementById(active_player.you.htmlScoreId).innerHTML = 'You Tied !!';
        document.getElementById(active_player.you.htmlScoreId).style.color = 'Blue';
        win_sound.play();
        draw++;
        document.getElementById('draw').innerHTML = draw;
    }
    else{
        if(active_player.you.score<=21){
            document.getElementById(active_player.you.htmlScoreId).innerHTML = 'You Lost !!';
            document.getElementById(active_player.you.htmlScoreId).style.color = 'red';
            lose_sound.play();
        }
        loss++;
        document.getElementById('loss').innerHTML = loss;
    }
}
console.log(win);
console.log(loss);
console.log(draw);