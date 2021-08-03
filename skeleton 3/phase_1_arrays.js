Array.prototype.uniq = function() {
        let array = []; 
        for(var i=0; i<this.length-1;i++){
            let num = this[i];
            if (!array.includes(num)){
                array.push(num);
            }
        }
        return array;
    
};
// var arr1 = [1, 2, 4, 2, 3, 1, 4];
// console.log(arr1.uniq());

Array.prototype.twoSum = function () {
    let pairs = [];
    for (var i = 0; i < this.length - 2; i++) {
        let num1=this[i];
        for (var j = i; j < this.length - 1; j++) {
            let num2=this[j];
            if (num1+num2===0){
                pairs.push([i,j])
            }
        }   
    }
    return pairs;
};

// var arr1 = [1, 2, 4, -2, 3, -1, 4];
// console.log(arr1.twoSum());

Array.prototype.transpose = function() {
    let transposearr = [];
    for (var i = 0; i < this[0].length; i++) {
        transposearr.push(new Array(this.length));
    }
    for (var i = 0; i < this.length; i++) { /* 2 */
        for (var j = 0; j < this[0].length; j++) {
            transposearr[j][i] = this[i][j];
        }
    }
    return transposearr;
}

var arr1 = [[1, 2, 3], [4, -2, 5], [3, -1, 4]];
var arr2 = [[1, 2], [3, 4]];    /* [[1, 3], [2, 4]]*/
console.log(arr1.transpose());

// let transposearr = new Array(3).fill(new Array(3));
// console.log(transposearr)
// 0, 0 
// [[1, ], []]