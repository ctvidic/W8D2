
const NUMS = [1, 2, 3, 4, 5];
Array.prototype.myEach = function (callback) {
    for (var i= 0; i < this.length; i++) {
        callback(this[i]);
    };
};


function addOne(i) {
    i = i + 1;
    return i;
};


Array.prototype.myMap = function (callback) {
    const arr1 = [];
    this.myEach(function (element) {
        arr1.push(callback(element))
    });
    return arr1;
};

Array.prototype.myReduce = function (callback, initialValue){
        let arr = this;
        if (initialValue === undefined){
            initialValue = this[0];
            arr = arr.slice(1)
        };
        let accumulator = initialValue;
        this.myEach(function (element){
            accumulator = callback(accummulator,element);
        });

        return accumulator;   
};

console.log(NUMS.myReduce((total, item) => total + item));

// var arr1 = [1, 2, 3, 4, -2, 5 , 3, -1, 4];
// console.log(arr1.myMap(addOne));

