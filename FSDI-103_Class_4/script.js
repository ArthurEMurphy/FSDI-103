// function is a block of code that we can use as many times as we want without the code repitition. 
    // Must have a (name for the function in camelCase).
    // { body of the function needs to be inside }.
    // we have to call the function to execute the action of the function --- in cosole we can call the function by name in order to execute the function. 
    // have to define the function before we can call to execute the function. 


// function sumTwoNumbers(){
//     let num1;
//     let num2;

//     num1 = parseInt(prompt(`Add a number`));
//     num2 = parseInt(prompt(`Add a number`));

//     let result = num1 + num2;

//     alert(`The result is: `+result);
// }

// parseInt this is used to convert a string to a number
// in a string the task would yield the following: 123+1=1231. As if you are adding the number 1 to the end of the list. 
// when doing math actions we need to use numbers so that we are adding 123 + 1 = 124. 
// let num = document.getElementById(`number`).value;
//num = parseInt(num);

let array = [];
function add(){
    let num = parseInt(document.getElementById(`number`).value);
    array.push(num);
    console.log(array);
}

function avg(){
    let result=0;

    for(let i=0; i<array.length; i++){
        result += array[i]; // same as result = result + array[i];
    }
    
    result= result/array.length;
    
    alert(`The average is: ` + result);

    return result;
}

function init(){
    

}

window.onload = init;

