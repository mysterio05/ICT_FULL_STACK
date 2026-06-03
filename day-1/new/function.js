/* normal function
function sum(a,b)
{
    return a+b
}

console.log(sum(4,6))
*/

/*
  Arrow function

const sum=(a,b)=>
{
    return a+b
}

console.log(sum(4,6))

single line arrow function
const sum=(a,b)=>a+b

console.log(sum(4,4))

*/

function prime(n){
    count=0

    for(let i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            count=count+1
        }
    }
    if(count<=2)
    {
        return " prime"
    }
    else {
        return " not prime"
    }


}

n=6
console.log(prime(n))
