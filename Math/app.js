console.log("Hello, world");
console.log("my-button", myButtonElement);
//var myH1elemet = document.querySelector("h1");
//myH1elemet.innerHTML = "Something new"; //this changes h1 to something new
//DOM - document object Model
//query, modify, insert, events!
var myButtonElement = document.querySelector("#submit-button");

function newProblem(){
    var a = Math.floor(Math.random() *10);
    var b = Math.floor(Math.random()* 10);
    var number1 = document.querySelector("#number1");
    var number2 = document.querySelector("#number2");
    number1.innerHTML = a;
    number2.innerHTML = b;
    return a+b;
}
var answer = newProblem();


myButtonElement.onclick = function () {
    //code goes here
    //runs each time the button is clicked
    console.log("onclick function called");
    //var myH1elemet = document.querySelector("h1");
    //myH1elemet.innerHTML = "Something new";

    var answerInput = document.querySelector("#answer-input");
    var pelement = document.querySelector("#iscorrect")
    if(answerInput.value == answer){
        pelement.innerHTML = "correct";
        pelement.style.backgroundColor="#00CC00";
        //pelement.classList.add("correct"); add class
        answer = newProblem();
        
    }else{
        pelement.innerHTML = "incorrect";
        pelement.style.color="#CC0000";
    }
    answerInput.value = "";
};