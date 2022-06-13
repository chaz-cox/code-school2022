//step 1 create the new Element, a div
var newElement = document.createElement("div");

//step 2 query the exsisting parent element
var parentElement = document.querySelector("body")

//step 3 append the child element to the parent element
parentElement.appendChild(newElement);

//hit up mozzila developer network

for (var i=0; i<6; i++){
    for (var j=0; j<5; j++){
        console.log(i,j);
    }
}