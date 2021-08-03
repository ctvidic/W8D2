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
var arr1 = [1, 2, 4, 2, 3, 1, 4];
console.log(arr1.uniq());

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

var arr1 = [1, 2, 4, -2, 3, -1, 4];
console.log(arr1.twoSum());