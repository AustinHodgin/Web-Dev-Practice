//Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");
var count = -10
while(count != 20){
    console.log(count);
    count++;
}

//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
count = 10;
while(count < 41){
    if(count % 2 === 0){
        console.log(count);
    }
    count++;
}
//Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
count = 300;
while(count < 334){
    if(count % 2 !== 0){
        console.log(count);
    }
    count++; 
}
//Print all numbers divisable by 5 and 3 between 5 and 50
console.log("Print all numbers divisable by 5 and 3 between 5 and 50");
count = 5;
while(count < 51){
    if(count % 5 == 0 && count % 3 == 0){
        console.log(count)
    }
    count++;
}