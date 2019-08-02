//printReverse
function printReverse(a){
    for(var i = a.length; i >=0; i--){
        console.log(a[i]);
    }
}
//isUniform
function isUniform(a){
    var b = a[0];
   for(var i =0; i < a.length; i++){
       if(a[i] !== b){
           return false;
       }
   }
   return true;
}
//sumArray
function sumArray(a){
    var sum = 0;
    a.forEach(num => {
        sum += num;
    });
    console.log(sum);
}
//max
function max(a){
    var num = a[0];
    a.forEach(n => {
        if(n > num){
            num = n;
        }
    });
    return num;
}
