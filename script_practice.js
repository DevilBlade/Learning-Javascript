// 1. Program to find largest of the 3 nos.
function findMax( a,b,c) {
	var max_value = -Infinity;
	for( i=0; i<arguments.length; i++) {
		if(arguments[i] > max_value) 
			max_value = arguments[i];
		}
	console.log(max_value);		
}
findMax(1,2,3);
document.getElementById("action-button")= findMax(1,2,3);

//2. 
