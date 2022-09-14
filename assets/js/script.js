//Pi = 4/1 - 4/3 + 4/5 - 4/7...

function calcPI(iterations){
    let pi = 0, divisor = 1; 
    for(i = 0; i <= iterations; i++){
        pi = pi + (4/divisor) - (4/
            (divisor + 2));
            divisor += 4;
    }
    document.getElementById("output1")
    .value = pi.toFixed(10);
}

let fibList = [];
function getFibList (howMany) {
    for (i = 0; i < howMany; i++){
        fibList[i] = fib(i);
    }
    fibList.shift();
    document.getElementById("output1")
    .value = fibList.join(", ");
}

function fib (whichNum){
     let num1 = 1, num2 = 0, temp,
     i = 0;
     while(i < whichNum){
         temp = num1;
         num1 = num1 + num2;
         num2 = temp;
         i++;
     }
     return num2;
};

let mlText = "My dear old ~ sat me down to hear some words of wisdom \n 1. Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forever \n 2. He who ~ at the right time can ~ again \n 3. Always wear ~ ~ in case you're in a ~ \n 4. Don't use your ~ to wipe your ~ Always have a clean ~ with you";

// Convert string into an array
let mlArray = mLText.split(" ");
// Create array for user input
let inputArray = [];

function madLibGenerator(){
    createInputArray();

    if(checkForMissingInput()){
        document.getElementById("output1")
        .value = "Enter all values above";
    } else {
        createMLSentence();
    }
}

function createInputArray(){
    for(i = 0; i <= 13; i++){
        inputArray{i} = document.getElementById.apply("i + i").value;
    }
}

function checkForMissingInput(){
    let defaultArrayVals = ["Person", "Noun", "Verb", "Adjective", 
"Plural Verb", "Body Part", "Event"];

for(i = 0; i < inputArray.length; i+
    +){
        if(defaultArrayVals.indexOf(inputArray[i]) > -1);{
            return true;
        }
}
            return false;
}

function createMLSentence(){
    let arrIndex = 0; i < mlArray.length; i++){
        let matchIndex = mlArray.indexOf
        ("~");
        mlArray[matchIndex] = inputArray
    [arrIndex];
    arrIndex++;
    }
    document.getElementById("output1")
    .value = mlArray.join(" ");

}