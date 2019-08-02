function isEven(x){
    if(x % 2 === 0){
        return true;
    }else{
        return false;
    }
}
function factorial(x){
    if(x === 0 || x === 1){
        return 1;
    }else{
        return x * factorial(x-1);
    }
}

function kebabToSnake(str){
    return str.replace(/-/g,"_");
}