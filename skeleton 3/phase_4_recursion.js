function range(start, end){
    if(start === end){
        return [end];
    };
    let arr = range(start,end-1);
    arr.push(end)
    return arr;
};

function sumRec(arr){
    if (arr.length === 0){
        return 0;
    };
    sum = arr[0]+sumRec(arr.slice(1))
    return sum
};

function exponent(base, exp){
    if (exp === 0){
        return 1;
    };
    sum = base * exponent(base,exp-1);
    return sum
}

function exponent2(base, exp) {
    if (exp === 0) {
        return 1;
    };
    if (exp % 2 === 0){
        sum = exponent2(base, exp/2) ** 2;
    }else {
        sum = base * (exponent2(base, (exp-1)/2)**2);
    }
    return sum
}

function fibonnaci(n){
    if (n<3){
        var fib= [1,1];
        return fib.slice(0,n);
    };
    let prevFib = fibonnaci(n - 1);
    let nextval = prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2];
    prevFib.push(nextval);
    return prevFib

}
// console.log(range(5,10));
// console.log(sumRec([1,2,3,4,5]));
console.log(fibonnaci(5))
