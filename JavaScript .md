---
title: "JavaScript "
tags: []
---

## JavaScript

### Basic Commands and there use

|Command|Function|
|---|---|
|console.log("Hello")|prints hello in console|
|alert("yoo")|shows an alert in browser saying hello |
|var a = 3| used to declare variable a with value 3|
|var b = 'Amik'|used to store the string 'Amik' in variable b|
|prompt('Enter age?')|prompts message on browser and asks for user input, this value can be stored in a variable also|
|document.getElementById('id').innerHTML = Some stuff|Used to modify HTML content of a a tag|

- Arithematic operations like ++, --, += and -= are valid for numerical variables in javascript

---

### Functions in JavaScript

To define a function you do 

```javascript
function function_name(arg_1, arg_2){
	. . . . .
	. . . . .
}

// to call the function do 

function_name(arg_1, arg_2);
```

### Loops in JavaScript

```javascript
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
```

### String commands in JavaScript
- __\n__ is used to print a new line

first assume we define fruits as

```javascript
var fruit = 'banana'
```
now observe various commands and outputs

|Command|Output|
|---|---|
|fruit.length|6|
|fruit.indexOf('nan')|2|
|fruit.slice(2,6)|nana|
|fruit.replace('ban','123')|123ana|
|fruit.toUpperCase()|BANANA|
|fruit.toLowerCase|banana|
|fruit.charAt(3)|a|
|fruit [2]|n|
|fruit.split('')|[ "b","a","n","a","n","a", ]|

> split can be used with any character like " ", "," or "!" or anything else

### Array in JavaScript

- To create a new array in javascript we have two methods :

```javascript

// method 1

let fruit = ['apple','kiwi'];

// method 2

fruit = new Array('apple','kiwi');

vegetable = ['carrot']
```

- Some other functions and there outcome

|Command|Output|
|---|---|
|fruit.pop()| outputs the last element of the array and deletes it|
|fruit.shift()|outputs the first element of the array and deletes it|
|fruit.push('orange')| adds orange at the last of the array|
|fruit.unshift('orange')| adds orange at the first of the array|
|fruit.join( ' * ' )|apple * kiwi|
|fruit.toString()|apple, kiwi|
|fruit [ fruit.length ]='orange'| adds orange at the last of the array|
|fruit.concat(vegetable)|concatenates fruits and vegetable|
|fruit.reverse()|reverses the order of content in fruit|
|fruit.sort()|sorts content of fruit|
 
> 'sort' can also take in function as in c++ to custom sort stuff example is

```javascript

// sorts in ascending order

fruit.sort(function(a,b){
	return a-b
});

// sorts in decending order

fruit.sort(function(a,b){
	return b-a
});
```

### Objects in JavaScript (dictionary)

```javascript

let student = {
	first : 'Amik',
	last : 'Sen',
  name : function(){
		return this.first + ' ' + this.last;
	}
}

console.log(student.first);  // prints Amik
console.log(student.name()); // prints Amik Sen
```

### if/else and switch statement in javascript 

```javascript
// switch case

switch(num) {
	case 1:
		text = 'Case 1';
		break;
	default:
		text = 'default';
		break;

}
// if statements

if(a>=2){
	console.log('Number more than 2');
}
else{
	console.log('Number less than 2');
}
```

### JSON in javascript 

- The format of a JSON file is like a list of objects, which is generally uploaded in an API in the form of a string, to use that as a list again, write 
```javascript
var list = JSON.parse(students) // say student is the json file name 
// now list contains the information as a list which could be used later accordingly 
```

# For the remaining Check the JS files of the javascrpit bj repo
