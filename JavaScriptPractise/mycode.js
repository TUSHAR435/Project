'use strict';

function create(){
    console.log("This function jost lost track of time");
}

create();
//calling running or invoking the function

function addTwoNumber(number1,number2){
    let sum=number1+number2;
    return sum;
}
console.log("total ="+addTwoNumber(10,5));

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }
  
  const appleJuice = fruitProcessor(5, 5);
  console.log(appleJuice);
  
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);