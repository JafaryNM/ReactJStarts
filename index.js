// es5 javaScript 

var name='jafary';

//  var keyword can be overid 
name='moses'
alert(name);

// In ES 6 you can use let 


if(true){
    var name= 'jafary';
    alert(name);
}
// Because var is window object will be access outside the block

alert(name);

// In ES 6 you cannot access variable outiside the scope 

if(true){
    let surname='mdegela'
    alert(surname);
}

// In ES6   you can use const for unchange variable

const ageDrink=18;

alert(ageDrink)

// But if you want to overide const error will occurs

ageDrink=18;


// # 02 Template Literal 

// ES6 Template String Is Major Concept Of String Concatination

let firstname='Jafary';
let lastname='Mdegela';

let age= prompt('What is Jafary input');

// Using ES5 To construct (Should Use String Concationations)

let results= "Your name is " + firstname + " " + lastname;

alert(results)

// Using Template String 


let resultsTemplateString= `Your name is ${firstname} + ${lastname} `;
alert(resultsTemplateString);



 





































 













































