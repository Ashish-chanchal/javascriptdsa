

function digitsum(digit){
    let sum=0;
    while(digit>0){
        sum=sum+digit%10;
        digit=Math.floor(digit/10);
    }
    return sum;
}

console.log(digitsum(123321))