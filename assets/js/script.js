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
    for (i - 0; 1 < howMany; i++){
        fibList[i] = fib(i);
    }
}

function fib (whichNum){
     let num1 = 1, num2 = 0, temp,
     1 = 0;
     while(i < whichNum){
         temp = num1;
         num1 = num1 + num2;
         num2 = temp;
         i++;
     }
     return num2;
};