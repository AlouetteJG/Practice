//This is helpful for a n quantity of parameters need it, declare with three dots
var product = function(...nums){

    var result = 1;

    for (var i=0;i<nums.length;i++){
        console.log(nums[i]);
        result*=nums[i];
    }
    return result;
}

console.log(product(2,3,4,5));

//In addiction of the n amount of parameters, we can add at the beggining the setted parameters
//The rest parameter must be an array if typo is declare ...nums:number[] or leave it as any ...nums
var producto = function(x:number, y:number,...nums:number[]){

    var result = 1;

    for (var i=0;i<nums.length;i++){
        console.log(nums[i]);
        result*=nums[i];
    }
    return result;
}

console.log(producto(6,7,8,9));