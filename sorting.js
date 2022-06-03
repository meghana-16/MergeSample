//array for storing height of bars equivalent to array value
let barsArray = [];

//slider
let slider = document.querySelector("#myRange");
slider.addEventListener("input",createNewArray);

//createNewArray for displaying bars without initial input
createNewArray();

//create new array
function createNewArray(){
    deletePreviousArray();
    inputSize = slider.value;
    console.log(inputSize)
    //create bars according to size
    for(let i=0;i<inputSize;i++){
        let bar_height = Math.floor(Math.random() * 100) + 1;
        barsArray.push(bar_height);
        let bar = document.createElement("div");
        console.log(bar,bar_height);
        bar.style.height = 4*barsArray[i]+"px";
        bar.style.backgroundColor = "yellow";
        bar.classList.add("bar");
        bar.classList.add("barStyle");
        let bars = document.querySelector("#bars");
        bars.append(bar);
    }
}

//delete previous array
function deletePreviousArray(){
    let bars = document.querySelector("#bars");
    bars.innerHTML="";
}

//eventlistener for generating new array
let buttons = document.querySelector(".buttons");
buttons.addEventListener("click",createNewArray);