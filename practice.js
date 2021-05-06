
console.log("Hello"); // Semi colon necessary in JS file after every command 

alert("Bhago"); // Used to alert user

var a = 'Amik';
console.log(a); // prints a = 'Amik'

var b = 45;
console.log(b); // prints b = 45

var age = prompt('Enter your age Boss'); // prompts the Question Enter your age Boss and takes input from user 
console.log(age); // prints the age that user inputed in console

document.getElementById('heading').innerHTML = age;  // changes the content of 'heading' element

// functions and definations 

function call_my_name(name) {
    console.log('Hi '+ name); // string concatenation 
}
var name = prompt('Hi what\'s your name ?');
call_my_name(name);

// while loop 
var n = 10;
while(n<20){
    n+=1;
    console.log(n);
}

// for loop 
var i ;
for(let i=0; i<10;i++){  // let is also used to define variables 
    console.log(i);
}