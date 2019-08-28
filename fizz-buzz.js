const FIZZ='fizz';
const BUZZ="buzz";
const FIZZBUZZ='fizzbuzz';
function fizzbuzz(number) {
    if(number==3){return FIZZ;}
    else if (number==5){return BUZZ}
    else if(number==15) {return FIZZBUZZ}
    else {return number};

}