Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (sorted === false) {
        sorted = true;
        for (var i = 0; i < this.length - 1; i++) {
            let num1 = this[i];
            let num2 = this[i + 1];
            if (num1 > num2) {
                let temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return this;
}

var arr1 = [1, 2, 3, 4, -2, 5, 3, -1, 4];
var arr2 = [1, 2, 3, 4];    /* [[1, 3], [2, 4]]*/
console.log(arr1.bubbleSort());

String.prototype.substrings = function() {
   let arr = [];
   for (var i = 0; i < this.length; i++) {
       for (var j = i; j < this.length; j++) {
           arr.push(this.slice(i, (j + 1)));
       }
   }
   return arr;
}

var str = "cool"
console.log(str.substrings());