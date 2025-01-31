// let submit = document.getElementById("submitbtn");
// let visa = document.getElementById("visapay");
// const paypal = document.getElementById("paypal")
// let masterCard = document.getElementById("mastercard");
// const subresult =document.getElementById("subresult");
// const payment = document.getElementById("paymentresult");
// const mycheckbox = document.getElementById("mycheckbox");

// submit.onclick = function(){
//     if(mycheckbox.checked){
//         subresult.textContent=`you are subscribed`;
//     }
//     else{
//         subresult.textContent=`your are not subscribed`;
//     }

//     if(visa.checked){
//         payment.textContent=` you are payment done by visa`;

//     }
//     else if(masterCard.checked){
//         payment.textContent=` you are payment done by masterCard`;
//     }
//     else if(paypal.checked){
//         payment.textContent=` you are payment done by paypal`;
//     }
//     else{
//         payment.textContent=`you must select any one of the payment`
//     }
// }

/*
function diceRoll(){
    const submitbtn = document.getElementById("submitbtn");
    const inputdice  = document.getElementById("inputValue").value;
    const resultdice = document.getElementById("resultdice");
    const resultimage = document.getElementById("resultimages");
    const values=[];
    const images = [];


    for(let i = 1; i<= inputdice;i++){
        const value = Math.floor(Math.random()*6)+1;
        // console.log(value)
        values.push(value);
        images.push(`<img src="dice_images/${value}">`);

        resultdice.textContent=`dice : ${values}`;
        resultimage.innerHTML=images


    }

}*/

// callback method 

/*

hello(waite(bye(leave)));

function hello(callback){
    setTimeout(function(){
    console.log("hello ramesh");
    });
}
 function bye(callback){
    setTimeout(function (){
    console.log("bye ramesh");
    },4000);
 }
 function waite(callback){
    setTimeout(function(){
    console.log("waite ramesh");
 },3000)
    // callback();
 }

 function leave(callback){
    setTimeout(() => {
        console.log("leave ramesh");
    },3000 );
    callback();  
 }*/
 
// foreach method 

/*

const fruits = ["apple","banana","orange","coconut"];
// fruits.forEach(display);
fruits.forEach(display);

function display(element){
//   console.log(element.toUpperCase());
//   console.log(element.toLowerCase());
  console.log(element.charAt(0).toUpperCase() + element.slice(1));
}

const numbers = [1,2,3,4,5];

numbers.forEach(double);

numbers.forEach(sum)

function double(element,array,index){
    console.log(array[index] = element * 2)
}

function sum(element,array,index){
    console.log(array[index] = element * 3)
}
*/

// map method 
/*
console.log("hello ramesh");
const numbers = [1,2,3,4,5];

 const squeares = numbers.map(cube);
 console.log(squeares);

function squeare(element){
    return Math.pow(element,2);

}

function cube(element){
 return Math.pow(element, 3);
}
 */

// filter method ////////
/*
console.log("hello ramesh")

const numbers = [1,2,3,4,4,577,8,8,];

const isevenNum = numbers.filter(iseven);
console.log(isevenNum);

function iseven(element){
    return element % 2 === 0;
}

const ages = [18,35,12,14,16,56,78,90];

const adultPerson = ages.filter(adults);
console.log(adultPerson);

function adults(elments){
    return elments >=18 ;
}

const fruits = ["apple","oranges","kiwi","banana"];
 const result = fruits.filter(getShortWords);
 console.log(result);

function getShortWords(element){
    return element.length < 6;
}
*/


// .reduce method 

// console.log("ramesh korabar your worst guy ")

let display = document.getElementById("input-user1");


function number(input){
    display.value += input
}
function cleardisplay(){
    display.value = "";
}