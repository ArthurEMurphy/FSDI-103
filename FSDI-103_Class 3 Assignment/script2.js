function sum(num1, num2){
   return num1+num2;

}
let result=sum(10,10);
console.log(result);
sum(3,3);
sum(6,2);


// let sum2 = function(){
//     console.log(3+3);
// }
// sum2();
// declare the variable before you can use it in a function //


// function sum(num1, num2){
//     console.log(num1+num2);
 
//  }
//  sum(10,10);
//  sum(3,3);
//  sum(6,2);


// Global scope
let subtotal =0;

function addCart(price){
    return subtotal += price;
}
function taxesCalculation(subtotal){
    return 1.11*subtotal;
}

subtotal = addCart(200); // 200
subtotal = addCart(400); // 600
subtotal = addCart(600); // 1200



console.log(`The subtotal is: ${subtotal}`); // 1200

const total = taxesCalculation(subtotal);
console.log(`The total is: ${total}`);

// lines 28 - 46 are showing a cart that people are adding different products. If using the function you are adding to the total.