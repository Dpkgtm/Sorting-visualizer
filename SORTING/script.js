let bubbleSortbtn=document.querySelector(".bubbleSort");
let insertionSortbtn=document.querySelector(".insertionSort");
let mergeSortbtn=document.querySelector(".mergeSort");
let quickSortbtn=document.querySelector(".quickSort");
let selectionSortbtnbtn=document.querySelector(".selectionSort");
let sizeSlider=document.querySelector("#arr_sz");
let newArrayBtn=document.querySelector(".newArray");
let delayElement=document.querySelector('#speed_input');
function swap(v1,v2){
    console.log("swapping");
    let temp=v1.style.height;
    v1.style.height=v2.style.height;
    v2.style.height=temp;
}
function disableSortingBtn(){
    bubbleSortbtn.disabled=true;
    insertionSortbtn.disabled=true;
    mergeSortbtn.disabled=true;
    quickSortbtn.disabled=true;
    selectionSortbtn.disabled=true;
    sizeSlider.disabled=true;
    newArrayBtn.disabled=true;
}
function enableSortingBtn(){
    bubbleSortbtn.disabled=false;
    insertionSortbtn.disabled=false;
    mergeSortbtn.disabled=false;
    quickSortbtn.disabled=false;
    selectionSortbtn.disabled=false;
    sizeSlider.disabled=false;
    newArrayBtn.disabled=false;
}
function waitforme(milisec){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('')
        },milisec)
    })
}
sizeSlider.addEventListener("input",function(){
    console.log(sizeSlider.value,typeof(sizeSlider.value));
    createNewArray(parseInt(sizeSlider.value))
});
let delay=260;
delayElement.addEventListener("input",function(){
    console.log(delayElement.value,typeof(delayElement.value));
    delay=320-parseInt(delayElement.value);
});
let array=[];
createNewArray();
function createNewArray(noOfBars=60){
    //delete previous bars
    deleteChild();
    array=[];
    for(let i=0;i<noOfBars;i++){
        array.push(Math.floor(Math.random()*250)+1);
    }
    console.log(array);
    //select the div #bars element
    const bars=document.querySelector("#bars");
    for(let i=0;i<noOfBars;i++){
        //createing bars form array values
        const bar=document.createElement("div");
        bar.style.height=`${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}
function deleteChild(){
    const Oldbars=document.querySelector("#bars");
    Oldbars.innerHTML='';
}
const newArray=document.querySelector(".newArray");
newArray.addEventListener("click",function(){
    newArray.addEventListener("click",function(){
        console.log("new arraay size",sizeSlider.value);
        console.log("newArray delay",delay);
        enableSortingBtn();
        createNewArray(sizeSlider.value);
    });
})