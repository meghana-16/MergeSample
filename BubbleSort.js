function BubbleSort(){
    for(let i=0;i<barsArray.length;i++){
        for(let j=1;j<barsArray.length-i-1;j++){
            //during comparision set background color to yellow
            barsArray[j].style.background="yellow";
            barsArray[j-1].style.background="yellow";
            if(barsArray[j]<barsArray[j-1]){
                let temp = barsArray[j-1];
                barsArray[j-1] = barsArray[j];
                barsArray[j] = temp;
            }
        }
    }
}
console.log(barsArray);
//adding eventListener for bubbleSort
let BubbleSortElement = document.querySelector(".BubbleSort");
BubbleSortElement.addEventListener('click',BubbleSort);