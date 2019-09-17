function fizzBuzz (array1,array2){
    var totallength = array1.concat(array2);
    var result = " ";
    var l = totallength.length;

    if (l%3==0 && l%5==0){result +="Fizzbuzz";}
    else if (l%3==0){result +="Fizz";}
    else if (l%5==0){result +="Buzz";}

    else {result=l}
    return result;
}
module.exports = fizzBuzz;