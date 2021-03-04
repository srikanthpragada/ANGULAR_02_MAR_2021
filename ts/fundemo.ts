
function add(n1 : number, n2 : number = 10) : number 
{
    return n1 + n2 ;
}

function multiply(n1 : number, n2? : number) : number 
{
    if (n2) // n2 is having a value 
       return n1 + n2;
    else
       return n1 * n1;
}


console.log(add(10,20))
console.log(add(10))
console.log(multiply(10,20))
console.log(multiply(10))
