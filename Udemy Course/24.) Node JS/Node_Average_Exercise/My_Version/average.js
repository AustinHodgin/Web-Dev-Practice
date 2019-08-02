var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(s){
	var sum = 0;
	for(var i = 0; i < s.length; i++){
		sum += s[i];
	}
	return Math.round(sum / s.length);

}

console.log(average(scores));
console.log(average(scores2));

