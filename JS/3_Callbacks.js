function calculateArithmetic(a,b,type)
{
    return type(a,b);
}   

function sum(a,b) {return a+b;}
function sub(a,b) {return a-b;}


const value=calculateArithmetic(1,2,sub)
console.log(value)